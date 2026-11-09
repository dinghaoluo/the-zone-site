import * as d3 from 'd3';
import { placeGraphLabels, type GraphLabel } from '../lib/graphLabels';
import { communityColour, communityColours, type NodeRecord, type EdgeRecord } from '../lib/lexicalNetwork';

type NodeView = NodeRecord & { px: number; py: number; depth: number; radius: number };

type LexicalSelection = {
  edgeMode: 'backbone' | 'all';
  focusedCommunity: number | null;
  selectedNode: string | null;
  selectedEdge: string | null;
  hoveredNode: string | null;
  hoveredEdge: string | null;
};

type RendererActions = {
  nodeClick: (id: string) => void;
  edgeClick: (id: string) => void;
  nodeHover: (id: string | null) => void;
  edgeHover: (id: string | null) => void;
  backgroundClick: () => void;
  ready: () => void;
  unavailable: () => void;
};

export function createLexicalRenderer(root: HTMLElement, actions: RendererActions) {
  const canvas = root.querySelector<HTMLElement>('#lexical-network-canvas')!;
  const webglHost = root.querySelector<HTMLElement>('#lexical-network-webgl')!;
  const webglLabels = root.querySelector<HTMLElement>('#lexical-network-webgl-labels')!;
  const loading = root.querySelector<HTMLElement>('#lexical-network-loading')!;
  const svg = root.querySelector<SVGSVGElement>('#lexical-network-svg')!;
  const rendererUrl = root.dataset.rendererUrl!;
  const labelMeasure = document.createElement('canvas').getContext('2d')!;
  const formatInt = (value: number) => new Intl.NumberFormat('en-GB').format(value);
  const formatFixed = (value: number, digits = 3) => Number.isFinite(value) ? value.toFixed(digits) : '-';
  const W = 1200;
  const H = 760;
  const PAD_X = 44;
  const PAD_Y = 38;

  function showWebGLFailure() {
    webglLabels.hidden = true;
    actions.unavailable();
  }

  function resolvedColour(variable: string, fallback: string) {
    const value = getComputedStyle(root).getPropertyValue(variable).trim();
    const documentValue = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
    return value || documentValue || fallback;
  }

  function currentColours() {
    return {
      background: resolvedColour('--color-bg', '#f2f2ed'),
      text: resolvedColour('--color-text', '#20221f'),
      secondary: resolvedColour('--color-text-secondary', '#5d6465'),
      dim: resolvedColour('--color-text-dim', '#767a73'),
      accent: resolvedColour('--color-accent', '#8b493a'),
      border: resolvedColour('--color-border', '#b9beb7'),
      communities: communityColours.map((colour) => colour.startsWith('var(')
        ? resolvedColour(colour.slice(4, -1).trim(), '#777b74')
        : colour),
    };
  }

  function colourWithOpacity(colour: string, opacity: number) {
    const match = /^#([\da-f]{6})$/i.exec(colour.trim());
    if (!match) return colour;
    const value = Number.parseInt(match[1], 16);
    const alpha = Math.max(0, Math.min(1, opacity));
    return `rgba(${value >> 16}, ${(value >> 8) & 255}, ${value & 255}, ${alpha})`;
  }

  let themeColours = currentColours();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const figureStyles = getComputedStyle(root);
  const highlightTime = figureStyles.getPropertyValue('--figure-highlight-duration').trim();
  const highlightDuration = parseFloat(highlightTime) * (highlightTime.endsWith('ms') ? 1 : 1000);
  const mutedOpacity = Number(figureStyles.getPropertyValue('--figure-muted-opacity'));
  const displayedNodeOpacity = new Map<string, number>();
  const displayedLinkOpacity = new Map<string, number>();
  let highlightFrame = 0;

  function endpointId(value: unknown) {
    return typeof value === 'object' && value !== null
      ? String((value as { id?: unknown }).id ?? '')
      : String(value ?? '');
  }

  function setSvgHidden(hidden: boolean) {
    if (hidden) svg.setAttribute('aria-hidden', 'true');
    else svg.removeAttribute('aria-hidden');
    svg.querySelectorAll<SVGElement>('.lexical-node-hit, .lexical-edge-hit').forEach((hit) => {
      // Search and the hub list remain the keyboard entry points; raw evidence lives in Methods.
      hit.removeAttribute('tabindex');
      hit.removeAttribute('role');
      hit.removeAttribute('aria-pressed');
    });
  }

  let nodes: NodeView[] = [];
  let edges: EdgeRecord[] = [];
  let nodeMap = new Map<string, NodeView>();
  let edgeMap = new Map<string, EdgeRecord>();
  let edgeMode: 'backbone' | 'all' = 'backbone';
  let focusedCommunity: number | null = null;
  let selectedNode: string | null = null;
  let selectedEdge: string | null = null;
  let hoveredNode: string | null = null;
  let hoveredEdge: string | null = null;
  let svgReady = false;
  type GraphApi = {
    (element: HTMLElement): GraphApi;
    graphData(value?: { nodes: Array<Record<string, unknown>>; links: Array<Record<string, unknown>> }): GraphApi | { nodes: Array<Record<string, unknown>>; links: Array<Record<string, unknown>> };
    width(value?: number): GraphApi | number;
    height(value?: number): GraphApi | number;
    refresh(): GraphApi;
    zoomToFit(duration?: number, padding?: number, filter?: (node: Record<string, unknown>) => boolean): GraphApi;
    pauseAnimation(): GraphApi;
    resumeAnimation(): GraphApi;
    cameraPosition(position?: { x?: number; y?: number; z?: number }, lookAt?: { x?: number; y?: number; z?: number }, duration?: number): GraphApi | { x: number; y: number; z: number };
    camera(): any;
    controls(): any;
    renderer(): any;
    scene(): any;
    nodeId(value: string): GraphApi;
    nodeVal(value: string | ((node: Record<string, unknown>) => number)): GraphApi;
    nodeRelSize(value: number): GraphApi;
    nodeResolution(value: number): GraphApi;
    nodeColor(value: (node: Record<string, unknown>) => string): GraphApi;
    nodeOpacity(value: number): GraphApi;
    nodeLabel(value: string | ((node: Record<string, unknown>) => string | HTMLElement)): GraphApi;
    linkLabel(value: string | ((link: Record<string, unknown>) => string | HTMLElement)): GraphApi;
    forceEngine(value: 'd3' | 'ngraph'): GraphApi;
    linkSource(value: string): GraphApi;
    linkTarget(value: string): GraphApi;
    linkVisibility(value: (link: Record<string, unknown>) => boolean): GraphApi;
    linkColor(value: (link: Record<string, unknown>) => string): GraphApi;
    linkOpacity(value: number): GraphApi;
    linkWidth(value: number | ((link: Record<string, unknown>) => number)): GraphApi;
    linkHoverPrecision(value: number): GraphApi;
    showNavInfo(value: boolean): GraphApi;
    backgroundColor(value: string): GraphApi;
    enableNavigationControls(value: boolean): GraphApi;
    enableNodeDrag(value: boolean): GraphApi;
    showPointerCursor(value: boolean): GraphApi;
    warmupTicks(value: number): GraphApi;
    cooldownTicks(value: number): GraphApi;
    onNodeClick(value: (node: Record<string, unknown>, event?: Event) => void): GraphApi;
    onNodeHover(value: (node: Record<string, unknown> | null) => void): GraphApi;
    onLinkClick(value: (link: Record<string, unknown>, event?: Event) => void): GraphApi;
    onLinkHover(value: (link: Record<string, unknown> | null) => void): GraphApi;
    onBackgroundClick(value: (event?: Event) => void): GraphApi;
  };
  let graph: GraphApi | null = null;
  let graphReady = false;
  let forceGraphScript: Promise<void> | null = null;
  let webglHasFit = false;
  let webglLabelFrame = 0;
  let webglRefreshFrame = 0;
  const webglLabelMap = new Map<string, HTMLSpanElement>();
  let graphVisible = false;
  const graphVisibility = new IntersectionObserver(([entry]) => {
    graphVisible = entry.isIntersecting;
    if (!graph) return;
    if (graphVisible && !document.hidden) graph.resumeAnimation();
    else graph.pauseAnimation();
  });
  graphVisibility.observe(canvas);
  document.addEventListener('visibilitychange', () => {
    if (!graph) return;
    if (graphVisible && !document.hidden) graph.resumeAnimation();
    else graph.pauseAnimation();
  });

  const nodeLayer = d3.select(svg).append('g').attr('class', 'lexical-network-edges');
  const nodeMarksLayer = d3.select(svg).append('g').attr('class', 'lexical-network-nodes');
  const labelsLayer = d3.select(svg).append('g').attr('class', 'lexical-network-labels');

  function supportsWebgl() {
    try {
      const probe = document.createElement('canvas');
      return Boolean(probe.getContext('webgl') || probe.getContext('experimental-webgl'));
    } catch {
      return false;
    }
  }

  function loadForceGraphScript() {
    if (forceGraphScript) return forceGraphScript;
    const existing = (window as Window & { ForceGraph3D?: unknown }).ForceGraph3D;
    if (typeof existing === 'function') return Promise.resolve();

    forceGraphScript = new Promise<void>((resolve, reject) => {
      const current = document.querySelector<HTMLScriptElement>('script[data-lexical-network-renderer]');
      if (current) {
        if (typeof (window as Window & { ForceGraph3D?: unknown }).ForceGraph3D === 'function') {
          resolve();
          return;
        }
        current.addEventListener('load', () => resolve(), { once: true });
        current.addEventListener('error', () => reject(new Error('The pinned 3D renderer did not load.')), { once: true });
        return;
      }
      const script = document.createElement('script');
      script.src = rendererUrl;
      script.dataset.lexicalNetworkRenderer = 'true';
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('The pinned 3D renderer did not load.'));
      document.head.appendChild(script);
    });
    return forceGraphScript;
  }

  function graphNode(node: Record<string, unknown>) {
    return nodeMap.get(endpointId(node)) || null;
  }

  function graphLink(edge: Record<string, unknown>) {
    return edgeMap.get(String(edge.id ?? '')) || null;
  }

  function selectedEdgeTouches(nodeId: string) {
    const edge = selectedEdge ? edgeMap.get(selectedEdge) : null;
    return Boolean(edge && (edge.source === nodeId || edge.target === nodeId));
  }

  function graphNodeColour(node: Record<string, unknown>) {
    const record = graphNode(node);
    const colours = themeColours;
    if (!record) return colourWithOpacity(colours.dim, 0.65);
    const colour = colours.communities[(record.community_id - 1) % colours.communities.length];
    return colourWithOpacity(colour, displayedNodeOpacity.get(record.id) ?? graphNodeOpacity(node));
  }

  function graphNodeOpacity(node: Record<string, unknown>) {
    const record = graphNode(node);
    if (!record) return 0.65;
    const focusId = selectedNode || hoveredNode;
    const focusEdge = edgeMap.get(selectedEdge || hoveredEdge || '');
    const endpoint = focusEdge && (focusEdge.source === record.id || focusEdge.target === record.id);
    if (record.id === focusId || endpoint) return 0.82;
    if (focusedCommunity !== null && record.community_id !== focusedCommunity) return 0.82 * mutedOpacity;
    if (focusEdge) return 0.82 * mutedOpacity;
    if (focusId) {
      const related = incidentEdges(focusId).some((edge) => edge.source === record.id || edge.target === record.id);
      return 0.82 * (related ? 1 : mutedOpacity);
    }
    return 0.82;
  }

  function graphLinkColour(link: Record<string, unknown>) {
    const edge = graphLink(link);
    return colourWithOpacity(themeColours.dim, edge
      ? displayedLinkOpacity.get(edge.id) ?? graphLinkOpacity(link)
      : 0);
  }

  function graphLinkOpacity(link: Record<string, unknown>, baseline?: number) {
    const edge = graphLink(link);
    if (!edge) return 0;
    const focusId = selectedNode || hoveredNode;
    const focusEdge = selectedEdge || hoveredEdge;
    const incident = edge.id === focusEdge || edge.source === focusId || edge.target === focusId;
    if (incident) return 0.56;
    if (edgeMode !== 'all' && !edge.backbone) return 0;
    const opacity = baseline ?? (edge.backbone ? 0.14 : 0.05);
    if (focusId || focusEdge) return opacity * mutedOpacity;
    if (focusedCommunity !== null) {
      const source = nodeMap.get(edge.source)!;
      const target = nodeMap.get(edge.target)!;
      if (source.community_id !== focusedCommunity || target.community_id !== focusedCommunity) return opacity * mutedOpacity;
    }
    return opacity;
  }

  function handleWebglContextLost(event: Event) {
    event.preventDefault();
    graph?.pauseAnimation();
    graph = null;
    graphReady = false;
    webglHost.hidden = true;
    webglHost.setAttribute('aria-hidden', 'true');
    if (svgReady) setSvgHidden(false);
    showWebGLFailure();
    if (svgReady) renderGraph();
  }

  function graphLinks() {
    return edges.map((edge) => ({
      id: edge.id,
      source: edge.source,
      target: edge.target,
      npmi: edge.npmi,
      backbone: edge.backbone,
    }));
  }

  function graphNodes() {
    return nodes.map((node) => ({
      id: node.id,
      x: node.x,
      y: node.y,
      z: node.z,
      fx: node.x,
      fy: node.y,
      fz: node.z,
      graph_value: Math.pow(node.render_radius, 3),
      render_radius: node.render_radius,
      community_id: node.community_id,
    }));
  }

  function resizeWebgl() {
    if (!graph || !webglHost.clientWidth) return;
    graph.width(Math.max(1, Math.round(webglHost.clientWidth)));
    graph.height(Math.max(1, Math.round(webglHost.clientHeight)));
    if (!webglHasFit) fitWebglView(nodes, 0, true);
    else updateWebglLabels();
  }

  let webglTarget = { x: 0, y: 0, z: 0 };

  type Point3 = { x: number; y: number; z: number };

  function pointLength(point: Point3) {
    return Math.hypot(point.x, point.y, point.z);
  }

  function normalisePoint(point: Point3): Point3 {
    const length = pointLength(point) || 1;
    return { x: point.x / length, y: point.y / length, z: point.z / length };
  }

  function dotPoint(first: Point3, second: Point3) {
    return first.x * second.x + first.y * second.y + first.z * second.z;
  }

  function crossPoint(first: Point3, second: Point3): Point3 {
    return {
      x: first.y * second.z - first.z * second.y,
      y: first.z * second.x - first.x * second.z,
      z: first.x * second.y - first.y * second.x,
    };
  }

  function fitWebglView(members: NodeView[] = nodes, duration = 0, resetOrientation = false, distanceScale = 0.95) {
    if (!graph || !members.length || !webglHost.clientWidth || !webglHost.clientHeight) return;

    const centre = members.reduce((sum, node) => ({
      x: sum.x + node.x,
      y: sum.y + node.y,
      z: sum.z + node.z,
    }), { x: 0, y: 0, z: 0 });
    centre.x /= members.length;
    centre.y /= members.length;
    centre.z /= members.length;

    const camera = graph.camera();
    const width = Math.max(1, webglHost.clientWidth);
    const height = Math.max(1, webglHost.clientHeight);
    const aspect = width / height;
    camera.aspect = aspect;
    camera.fov = 18;
    camera.near = 0.1;
    camera.far = 5000;
    camera.updateProjectionMatrix();

    const verticalFov = camera.fov * Math.PI / 180;
    const horizontalFov = 2 * Math.atan(Math.tan(verticalFov / 2) * aspect);
    const previousTarget = webglTarget;
    // This direction keeps the large structural groups apart in the opening projection.
    const direction = resetOrientation
      ? { x: 0, y: 0, z: 1 }
      : {
        x: camera.position.x - previousTarget.x,
        y: camera.position.y - previousTarget.y,
        z: camera.position.z - previousTarget.z,
      };
    const viewDirection = normalisePoint(direction);
    let right = crossPoint(viewDirection, { x: 0, y: 1, z: 0 });
    if (pointLength(right) < 0.01) right = { x: 1, y: 0, z: 0 };
    right = normalisePoint(right);
    const up = normalisePoint(crossPoint(right, viewDirection));
    let horizontalExtent = 0;
    let verticalExtent = 0;
    let depthExtent = 0;
    members.forEach((node) => {
      const offset = { x: node.x - centre.x, y: node.y - centre.y, z: node.z - centre.z };
      horizontalExtent = Math.max(horizontalExtent, Math.abs(dotPoint(offset, right)));
      verticalExtent = Math.max(verticalExtent, Math.abs(dotPoint(offset, up)));
      depthExtent = Math.max(depthExtent, Math.abs(dotPoint(offset, viewDirection)));
    });
    const horizontalDistance = horizontalExtent / Math.tan(horizontalFov / 2);
    const verticalDistance = verticalExtent / Math.tan(verticalFov / 2);
    const distance = Math.max(72, horizontalDistance, verticalDistance) * distanceScale + depthExtent * 0.15;
    webglTarget = centre;
    camera.far = Math.max(5000, distance + depthExtent + 100);
    camera.updateProjectionMatrix();
    const controls = graph.controls();
    if (controls) {
      controls.minDistance = 72;
      controls.maxDistance = Math.max(900, distance * 4);
    }
    graph.cameraPosition({
      x: centre.x + viewDirection.x * distance,
      y: centre.y + viewDirection.y * distance,
      z: centre.z + viewDirection.z * distance,
    }, {
      x: centre.x,
      y: centre.y,
      z: centre.z,
    }, duration);
    webglHasFit = true;
  }

  function resetWebglView() {
    if (!graph) return;
    graph.camera().up?.set?.(0, 1, 0);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reduced ? 0 : 350;
    fitWebglView(nodes, duration, true);
    requestWebglLabels();
  }

  function focusWebglNode(node: NodeView) {
    if (!graph) return;
    if (node.degree < 3) {
      requestWebglLabels();
      return;
    }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reduced ? 0 : 300;
    const neighbourIds = new Set([node.id, ...incidentEdges(node.id).flatMap((edge) => [edge.source, edge.target])]);
    fitWebglView(nodes.filter((candidate) => neighbourIds.has(candidate.id)), duration, false, 1);
  }

  function focusWebglCommunity(id: number | null) {
    if (!graph || id === null) return;
    const members = nodes.filter((node) => node.community_id === id);
    if (!members.length) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    fitWebglView(members, reduced ? 0 : 350, false);
    requestWebglLabels();
  }

  function requestWebglLabels() {
    if (webglLabelFrame) return;
    webglLabelFrame = requestAnimationFrame(() => {
      webglLabelFrame = 0;
      updateWebglLabels();
    });
  }

  function updateWebglLabels() {
    if (!graphReady || !graph || webglHost.hidden || !webglHost.clientWidth || !webglHost.clientHeight) {
      webglLabels.hidden = true;
      return;
    }

    const labelBottomInset = Math.min(28, Math.max(16, webglHost.clientHeight * 0.04));
    const labelViewportHeight = Math.max(1, webglHost.clientHeight - labelBottomInset);

    const camera = graph.camera();
    const controls = graph.controls();
    const target = controls?.target || webglTarget;
    const viewDirection = normalisePoint({
      x: target.x - camera.position.x,
      y: target.y - camera.position.y,
      z: target.z - camera.position.z,
    });
    const cameraUp = camera.up ? { x: camera.up.x, y: camera.up.y, z: camera.up.z } : { x: 0, y: 1, z: 0 };
    let right = crossPoint(viewDirection, cameraUp);
    if (pointLength(right) < 0.01) right = { x: 1, y: 0, z: 0 };
    right = normalisePoint(right);
    const up = normalisePoint(crossPoint(right, viewDirection));
    const verticalFov = (camera.fov || 34) * Math.PI / 180;
    const horizontalFov = 2 * Math.atan(Math.tan(verticalFov / 2) * (webglHost.clientWidth / webglHost.clientHeight));
    const labelLimit = webglHost.clientWidth < 600 ? 3 : 5;
    const selectedEdgeEndpoints = selectedEdge ? (() => {
      const edge = edgeMap.get(selectedEdge);
      return edge ? [edge.source, edge.target] : [];
    })() : [];
    const selectedNodeNeighbours = selectedNode
      ? incidentEdges(selectedNode).flatMap((edge) => [edge.source, edge.target])
      : [];
    const selectedCandidates = [selectedNode, hoveredNode, ...selectedNodeNeighbours, ...selectedEdgeEndpoints]
      .map((id) => id ? nodeMap.get(id) : null)
      .filter((node): node is NodeView => Boolean(node));
    const labels = [...new Map([
      ...selectedCandidates,
      ...nodes.filter(visibleByFocus).sort((first, second) => first.hub_rank - second.hub_rank),
    ].map((node) => [node.id, node])).values()];

    const selectedIds = new Set(selectedCandidates.map(node => node.id));
    const style = getComputedStyle(webglLabels);
    const labelHeight = parseFloat(style.lineHeight);
    const maxLabelWidth = parseFloat(getComputedStyle(document.documentElement).fontSize) * 10;
    const projected: GraphLabel[] = [];
    labels.forEach(node => {
      const offset = { x: node.x - camera.position.x, y: node.y - camera.position.y, z: node.z - camera.position.z };
      const depth = dotPoint(offset, viewDirection);
      if (depth <= 1) return;
      const x = dotPoint(offset, right) / (depth * Math.tan(horizontalFov / 2));
      const y = dotPoint(offset, up) / (depth * Math.tan(verticalFov / 2));
      if (Math.abs(x) > 1 || Math.abs(y) > 1) return;
      const priority = selectedIds.has(node.id);
      labelMeasure.font = `${priority ? 700 : style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
      projected.push({
        id: node.id,
        x: (x + 1) * 0.5 * webglHost.clientWidth,
        y: (1 - y) * 0.5 * webglHost.clientHeight,
        width: Math.min(maxLabelWidth, labelMeasure.measureText(node.display).width),
        height: labelHeight,
        offset: 8,
        priority,
      });
    });

    const visible = new Set<string>();
    for (const item of placeGraphLabels(projected, webglHost.clientWidth, labelViewportHeight, labelLimit)) {
      visible.add(item.id);
      let label = webglLabelMap.get(item.id);
      if (!label) {
        label = document.createElement('span');
        label.dataset.nodeId = item.id;
        webglLabelMap.set(item.id, label);
        webglLabels.append(label);
      }
      label.className = `lexical-network-webgl-label${selectedEdgeTouches(item.id) || item.id === selectedNode ? ' is-selected' : ''}${item.id === hoveredNode ? ' is-hovered' : ''}`;
      label.textContent = nodeMap.get(item.id)!.display;
      label.hidden = false;
      label.style.left = `${item.left}px`;
      label.style.top = `${item.top}px`;
      label.style.opacity = graphNodeOpacity({ id: item.id }) < 0.1 ? '0.35' : '1';
    }
    webglLabelMap.forEach((label, id) => {
      if (visible.has(id)) return;
      label.remove();
      webglLabelMap.delete(id);
    });
    webglLabels.hidden = visible.size === 0;
  }

  async function initialiseWebgl() {
    if (graphReady || !supportsWebgl()) {
      if (!supportsWebgl()) showWebGLFailure();
      return;
    }
    try {
      await loadForceGraphScript();
      const factory = (window as Window & { ForceGraph3D?: (config?: Record<string, unknown>) => (element: HTMLElement) => GraphApi }).ForceGraph3D;
      if (typeof factory !== 'function') throw new Error('The pinned 3D renderer did not load.');
      webglHost.hidden = false;
      webglHost.setAttribute('aria-hidden', 'false');
      const instance = factory({
        controlType: 'orbit',
        rendererConfig: { antialias: true, alpha: true, powerPreference: 'high-performance' },
      })(webglHost);
      graph = instance;
      webglHost.addEventListener('webglcontextlost', handleWebglContextLost, { capture: true, once: true });
      graph
        .showNavInfo(false)
        .backgroundColor(themeColours.background)
        .nodeId('id')
        .nodeVal('graph_value')
        .nodeRelSize(1)
        .nodeResolution(12)
        .nodeColor(graphNodeColour)
        .nodeOpacity(1)
        .nodeLabel(() => '')
        .forceEngine('d3')
        .linkSource('source')
        .linkTarget('target')
        .linkLabel(() => '')
        .linkVisibility((link) => (displayedLinkOpacity.get(String(link.id)) ?? graphLinkOpacity(link)) > 0)
        .linkColor(graphLinkColour)
        .linkOpacity(1)
        .linkWidth((link) => {
          const edge = graphLink(link);
          if (!edge) return 0;
          const strength = Math.min(edge.npmi / 0.12, 1);
          return 0.35 + strength * 0.8;
        })
        .linkHoverPrecision(2)
        .enableNavigationControls(true)
        .enableNodeDrag(false)
        .showPointerCursor(true)
        .warmupTicks(0)
        .cooldownTicks(0)
        .onNodeClick(node => actions.nodeClick(endpointId(node)))
        .onNodeHover(node => actions.nodeHover(node ? endpointId(node) : null))
        .onLinkClick(link => actions.edgeClick(String(link.id ?? '')))
        .onLinkHover(link => actions.edgeHover(link ? String(link.id ?? '') : null))
        .onBackgroundClick(actions.backgroundClick);

      const controls = graph.controls();
      if (controls) {
        controls.noPan = true;
        controls.noRotate = false;
        controls.noZoom = false;
        controls.enablePan = false;
        controls.enableRotate = true;
        controls.enableZoom = true;
        controls.enableDamping = false;
        controls.minDistance = 72;
        controls.maxDistance = 1400;
        controls.autoRotate = false;
        controls.staticMoving = true;
        controls.dynamicDampingFactor = 0.15;
        controls.addEventListener?.('change', () => {
          requestWebglLabels();
        });
      }
      graph.renderer()?.setPixelRatio?.(Math.min(window.devicePixelRatio || 1, 2));
      graph.graphData({ nodes: graphNodes(), links: graphLinks() });
      graphReady = true;
      actions.ready();
      if (!graphVisible || document.hidden) graph.pauseAnimation();
      setSvgHidden(true);
      root.dataset.webgl = 'available';
      loading.hidden = true;
      requestAnimationFrame(() => {
        resizeWebgl();
        resetWebglView();
        graph?.refresh();
        updateWebglLabels();
      });
    } catch (error) {
      console.error('Lexical proximity 3D view unavailable:', error);
      graph?.pauseAnimation();
      graph = null;
      graphReady = false;
      webglHost.hidden = true;
      webglHost.setAttribute('aria-hidden', 'true');
      if (svgReady) setSvgHidden(false);
      showWebGLFailure();
      if (svgReady) renderGraph();
    }
  }

  function refreshWebgl() {
    if (!graphReady || !graph) return;
    graph.refresh();
  }

  function animateWebglHighlight() {
    cancelAnimationFrame(highlightFrame);
    const nodeStarts = new Map(displayedNodeOpacity);
    const linkStarts = new Map(displayedLinkOpacity);
    const nodeTargets = new Map(nodes.map(node => [node.id, graphNodeOpacity(node)]));
    const linkTargets = new Map(edges.map(edge => [edge.id, graphLinkOpacity(edge)]));
    const started = performance.now();
    function frame(now: number) {
      const progress = reducedMotion.matches ? 1 : Math.min(1, (now - started) / highlightDuration);
      const eased = d3.easeCubicOut(progress);
      for (const [id, target] of nodeTargets) {
        const start = nodeStarts.get(id) ?? target;
        displayedNodeOpacity.set(id, start + (target - start) * eased);
      }
      for (const [id, target] of linkTargets) {
        const start = linkStarts.get(id) ?? target;
        displayedLinkOpacity.set(id, start + (target - start) * eased);
      }
      refreshWebgl();
      if (progress < 1) highlightFrame = requestAnimationFrame(frame);
      else highlightFrame = 0;
    }
    frame(started);
  }

  function requestWebglRefresh() {
    if (!graphReady || !graph || webglRefreshFrame) return;
    webglRefreshFrame = requestAnimationFrame(() => {
      webglRefreshFrame = 0;
      refreshWebgl();
      requestWebglLabels();
    });
  }

  function activeEdges() {
    if (edgeMode === 'all') return edges;
    return edges.filter((edge) => edge.backbone
      || edge.id === selectedEdge
      || edge.id === hoveredEdge
      || Boolean(selectedNode && (edge.source === selectedNode || edge.target === selectedNode))
      || Boolean(hoveredNode && (edge.source === hoveredNode || edge.target === hoveredNode)));
  }

  function visibleByFocus(node: NodeView) {
    return focusedCommunity === null || node.community_id === focusedCommunity;
  }

  function fallbackLabelIds() {
    // Selected and hovered words displace the lowest-ranked structural label.
    const selectedEdgeEndpoints = selectedEdge ? (() => {
      const edge = edgeMap.get(selectedEdge);
      return edge ? [edge.source, edge.target] : [];
    })() : [];
    const selectedNodeNeighbours = selectedNode
      ? incidentEdges(selectedNode).flatMap((edge) => [edge.source, edge.target])
      : [];
    const priority = [selectedNode, hoveredNode, ...selectedNodeNeighbours, ...selectedEdgeEndpoints]
      .map((id) => id ? nodeMap.get(id) : null)
      .filter((node): node is NodeView => Boolean(node));
    const priorityIds = new Set(priority.map((node) => node.id));
    const labelLimit = svg.getBoundingClientRect().width < 600 ? 3 : 5;
    const candidates = [...new Map([
      ...priority,
      ...nodes.filter(visibleByFocus).sort((first, second) => first.hub_rank - second.hub_rank),
    ].map((node) => [node.id, node])).values()];
    const bounds = svg.getBoundingClientRect();
    const scale = Math.min(bounds.width / W, bounds.height / H);
    if (!scale) return new Set<string>();
    const targetSize = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--plot-label-size')) || 16;
    const labelElements = new Map([...svg.querySelectorAll<SVGTextElement>('.lexical-node-label')]
      .map(label => [label.dataset.nodeId!, label]));
    const measured = candidates.map(node => {
      const label = labelElements.get(node.id)!;
      label.setAttribute('font-size', `${targetSize / scale}px`);
      label.classList.toggle('is-selected', selectedEdgeTouches(node.id) || node.id === selectedNode);
      const box = label.getBBox();
      return {
        id: node.id, x: node.px * scale, y: node.py * scale,
        width: box.width * scale, height: box.height * scale,
        offset: node.radius * scale + 4, priority: priorityIds.has(node.id),
      };
    });
    const visible = new Set<string>();
    for (const placement of placeGraphLabels(measured, W * scale, H * scale, labelLimit)) {
      const label = labelElements.get(placement.id)!;
      label.setAttribute('x', String(placement.left / scale));
      label.setAttribute('y', String((placement.top + placement.height / 2) / scale));
      label.setAttribute('text-anchor', 'start');
      visible.add(placement.id);
    }

    return visible;
  }

  function incidentEdges(nodeId: string) {
    return edges.filter((edge) => edge.source === nodeId || edge.target === nodeId).sort((a, b) => b.npmi - a.npmi || a.id.localeCompare(b.id));
  }

  function renderGraph() {
    if (!svgReady) return;
    const active = activeEdges();
    const activeIds = new Set(active.map((edge) => edge.id));
    const selectedIncident = selectedNode ? new Set(incidentEdges(selectedNode).map((edge) => edge.id)) : new Set<string>();
    const focusNode = selectedNode || hoveredNode;
    const focusNeighbours = focusNode ? new Set(incidentEdges(focusNode).flatMap((edge) => [edge.source, edge.target])) : new Set<string>();

    root.dataset.edgeMode = edgeMode;
    root.dataset.communityFocus = focusedCommunity === null ? 'all' : String(focusedCommunity);

    root.querySelectorAll<SVGLineElement>('.lexical-edge-line').forEach((line) => {
      const edgeId = line.dataset.edgeId || '';
      const edge = edgeMap.get(edgeId);
      if (!edge) return;
      const source = nodeMap.get(edge.source)!;
      const target = nodeMap.get(edge.target)!;
      const selected = selectedEdge === edgeId || selectedIncident.has(edgeId);
      const hovered = hoveredEdge === edgeId;
      const incident = selected || hovered;
      const inFocus = (visibleByFocus(source) && visibleByFocus(target)) || incident;
      const related = !focusNode || focusNeighbours.has(edge.source) || focusNeighbours.has(edge.target);
      const baseline = edge.backbone
        ? 0.22 + Math.min(edge.npmi / 0.12, 1) * 0.18
        : 0.09 + Math.min(edge.npmi / 0.12, 1) * 0.1;
      line.setAttribute('stroke-opacity', String(graphLinkOpacity(edge, baseline)));
      line.classList.toggle('is-selected', selected);
      line.classList.toggle('is-muted', !activeIds.has(edgeId) || !inFocus || (focusNode !== null && !related));
    });

    root.querySelectorAll<SVGLineElement>('.lexical-edge-hit').forEach((line) => {
      const edgeId = line.dataset.edgeId || '';
      const edge = edgeMap.get(edgeId);
      if (!edge) return;
      const source = nodeMap.get(edge.source)!;
      const target = nodeMap.get(edge.target)!;
      const incident = selectedEdge === edgeId
        || Boolean(selectedNode && (edge.source === selectedNode || edge.target === selectedNode))
        || hoveredEdge === edgeId
        || Boolean(hoveredNode && (edge.source === hoveredNode || edge.target === hoveredNode));
      const inFocus = (visibleByFocus(source) && visibleByFocus(target)) || incident;
      const interactive = activeIds.has(edgeId) && inFocus;
      line.setAttribute('aria-hidden', String(!interactive));
      line.style.pointerEvents = interactive ? 'stroke' : 'none';
    });

    root.querySelectorAll<SVGCircleElement>('.lexical-node-mark').forEach((mark) => {
      const id = mark.dataset.nodeId || '';
      const node = nodeMap.get(id)!;
      const selected = selectedNode === id || selectedEdgeTouches(id);
      const hovered = hoveredNode === id;
      const activeNode = selected || hovered;
      const inFocus = visibleByFocus(node) || activeNode;
      const neighbour = focusNode ? focusNeighbours.has(id) : false;
      mark.setAttribute('fill', communityColour(node.community_id));
      mark.setAttribute('fill-opacity', String(graphNodeOpacity(node) / 0.82 * (0.58 + node.depth * 0.26)));
      mark.setAttribute('stroke', 'var(--color-bg)');
      mark.setAttribute('stroke-width', '0.8');
      mark.classList.toggle('is-selected', selected);
      mark.classList.toggle('is-muted', !inFocus || (focusNode !== null && !activeNode && !neighbour));
    });

    root.querySelectorAll<SVGCircleElement>('.lexical-node-hit').forEach((hit) => {
      const id = hit.dataset.nodeId || '';
      const node = nodeMap.get(id)!;
      const activeNode = selectedNode === id || selectedEdgeTouches(id) || hoveredNode === id;
      const interactive = visibleByFocus(node) || activeNode;
      hit.setAttribute('aria-label', `${node.display}, ${formatInt(node.frequency)} occurrences, ${formatInt(node.degree)} selected links`);
      hit.setAttribute('aria-hidden', String(!interactive));
      hit.style.pointerEvents = interactive ? 'all' : 'none';
    });

    const visibleLabelIds = fallbackLabelIds();
    root.querySelectorAll<SVGTextElement>('.lexical-node-label').forEach((label) => {
      const id = label.dataset.nodeId || '';
      const show = visibleLabelIds.has(id);
      label.setAttribute('opacity', show ? graphNodeOpacity({ id }) < 0.1 ? '0.35' : '1' : '0');
      label.classList.toggle('is-selected', selectedEdgeTouches(id) || id === selectedNode);
    });

    requestWebglRefresh();
    requestWebglLabels();
  }

  function renderSvg() {
    const xExtent = d3.extent(nodes, (node) => node.x) as [number, number];
    const yExtent = d3.extent(nodes, (node) => node.y) as [number, number];
    const zExtent = d3.extent(nodes, (node) => node.z) as [number, number];
    const xScale = d3.scaleLinear().domain(xExtent).range([PAD_X, W - PAD_X]);
    const yScale = d3.scaleLinear().domain(yExtent).range([H - PAD_Y, PAD_Y]);
    const zScale = d3.scaleLinear().domain(zExtent).range([0, 1]);
    nodes = nodes.map((node) => ({ ...node, px: xScale(node.x), py: yScale(node.y), depth: zScale(node.z), radius: 2.5 + node.render_radius * 2.8 }));
    nodeMap = new Map(nodes.map((node) => [node.id, node]));

    nodeLayer.selectAll('*').remove();
    nodeMarksLayer.selectAll('*').remove();
    labelsLayer.selectAll('*').remove();

    const maxNpmi = d3.max(edges, (edge) => edge.npmi) || 1;
    const sortedEdges = [...edges].sort((a, b) => ((nodeMap.get(a.source)?.depth || 0) + (nodeMap.get(a.target)?.depth || 0)) - ((nodeMap.get(b.source)?.depth || 0) + (nodeMap.get(b.target)?.depth || 0)));
    const edgeGroups = nodeLayer.selectAll<SVGGElement, EdgeRecord>('g.lexical-edge').data(sortedEdges, (edge) => edge.id).join((enter) => {
      const group = enter.append('g').attr('class', 'lexical-edge');
      group.append('line').attr('class', 'lexical-edge-line').attr('pointer-events', 'none');
      group.append('line').attr('class', 'lexical-edge-hit').attr('stroke', 'transparent').attr('stroke-width', 14);
      return group;
    });
    edgeGroups.each(function(edge) {
      const source = nodeMap.get(edge.source)!;
      const target = nodeMap.get(edge.target)!;
      const group = d3.select(this);
      group.attr('data-edge-id', edge.id);
      group.select<SVGLineElement>('.lexical-edge-line')
        .attr('data-edge-id', edge.id)
        .attr('x1', source.px).attr('y1', source.py)
        .attr('x2', target.px).attr('y2', target.py)
        .attr('stroke', 'var(--color-text-dim)')
        .attr('stroke-width', 0.45 + Math.min(edge.npmi / maxNpmi, 1) * 1.2);
      group.select<SVGLineElement>('.lexical-edge-hit')
        .attr('data-edge-id', edge.id)
        .attr('x1', source.px).attr('y1', source.py)
        .attr('x2', target.px).attr('y2', target.py)
        .attr('aria-label', `${source.display} × ${target.display}, NPMI ${formatFixed(edge.npmi, 6)}`)
        .attr('aria-controls', 'lexical-network-reading');
    });

    const sortedNodes = [...nodes].sort((a, b) => a.depth - b.depth);
    const nodeGroups = nodeMarksLayer.selectAll<SVGGElement, NodeView>('g.lexical-node').data(sortedNodes, (node) => node.id).join((enter) => {
      const group = enter.append('g').attr('class', 'lexical-node');
      group.append('circle').attr('class', 'lexical-node-mark');
      group.append('circle').attr('class', 'lexical-node-hit').attr('fill', 'transparent');
      return group;
    });
    nodeGroups.each(function(node) {
      const group = d3.select(this).attr('data-node-id', node.id).attr('data-community', node.community_id);
      group.select<SVGCircleElement>('.lexical-node-mark')
        .attr('data-node-id', node.id).attr('cx', node.px).attr('cy', node.py).attr('r', node.radius);
      group.select<SVGCircleElement>('.lexical-node-hit')
        .attr('data-node-id', node.id).attr('cx', node.px).attr('cy', node.py).attr('r', Math.max(10, node.radius + 5))
        .attr('aria-label', `${node.display}, ${formatInt(node.frequency)} occurrences, ${formatInt(node.degree)} selected links`)
        .attr('aria-controls', 'lexical-network-reading');
    });

    const labelNodes = nodes;
    const labels = labelsLayer.selectAll<SVGTextElement, NodeView>('text.lexical-node-label').data(labelNodes, (node) => node.id).join('text')
      .attr('class', 'plot-label lexical-node-label')
      .attr('data-node-id', (node) => node.id)
      .attr('x', (node) => node.px + node.radius + 4)
      .attr('y', (node) => node.py)
      .attr('dominant-baseline', 'middle')
      .attr('fill', 'var(--color-text)')
      .attr('pointer-events', 'none')
      .text((node) => node.display);
    labels.attr('font-size', 'var(--plot-label-size)');

    nodeGroups.select<SVGCircleElement>('.lexical-node-hit')
      .on('pointerenter', (_, node) => actions.nodeHover(node.id))
      .on('pointerleave', () => actions.nodeHover(null))
      .on('click', (_, node) => actions.nodeClick(node.id));

    edgeGroups.select<SVGLineElement>('.lexical-edge-hit')
      .on('pointerenter', (_, edge) => actions.edgeHover(edge.id))
      .on('pointerleave', () => actions.edgeHover(null))
      .on('click', (_, edge) => actions.edgeClick(edge.id));

    svgReady = true;
    setSvgHidden(false);
    loading.hidden = true;
    renderGraph();
    updateLabelScale();
  }

  function updateLabelScale() {
    const visibleLabelIds = svgReady ? fallbackLabelIds() : new Set<string>();
    svg.querySelectorAll<SVGTextElement>('.lexical-node-label').forEach((label) => {
      const id = label.dataset.nodeId || '';
      if (svgReady) {
        const show = visibleLabelIds.has(id);
        label.setAttribute('opacity', show ? String(id === selectedNode ? 1 : id === hoveredNode ? 0.9 : 0.72) : '0');
      }
    });
  }

  const themeObserver = new MutationObserver(() => {
    themeColours = currentColours();
    graph?.backgroundColor(themeColours.background);
    if (svgReady) renderGraph();
  });
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  new ResizeObserver(() => {
    updateLabelScale();
    resizeWebgl();
  }).observe(canvas);
  document.fonts.ready.then(() => { updateLabelScale(); requestWebglLabels(); });

  return {
    initialise(records: NodeRecord[], links: EdgeRecord[]) {
      nodes = records.map(node => ({ ...node, px: 0, py: 0, depth: 0, radius: 0 }));
      edges = links;
      edgeMap = new Map(edges.map(edge => [edge.id, edge]));
      renderSvg();
      animateWebglHighlight();
      void initialiseWebgl();
    },
    render(selection: LexicalSelection) {
      ({ edgeMode, focusedCommunity, selectedNode, selectedEdge, hoveredNode, hoveredEdge } = selection);
      animateWebglHighlight();
      renderGraph();
    },
    focusNode(id: string) {
      const node = nodeMap.get(id);
      if (node) focusWebglNode(node);
    },
    focusCommunity: focusWebglCommunity,
    resetCamera: resetWebglView,
  };
}
