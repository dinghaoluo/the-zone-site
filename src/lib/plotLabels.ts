export function scalePlotLabels(svg: SVGSVGElement, selector = '.plot-label', targetSize?: number) {
  const renderedWidth = svg.getBoundingClientRect().width;
  const viewBoxWidth = svg.viewBox.baseVal.width;
  const defaultTargetSize = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue('--plot-label-size'),
  );
  const renderedTargetSize = targetSize ?? defaultTargetSize;

  if (!renderedWidth || !viewBoxWidth || !renderedTargetSize) return;

  const intrinsicSize = renderedTargetSize * viewBoxWidth / renderedWidth;
  svg.querySelectorAll<SVGTextElement>(selector).forEach((label) => {
    label.setAttribute('font-size', `${intrinsicSize}px`);
  });
}
