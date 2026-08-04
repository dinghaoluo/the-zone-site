export function scalePlotLabels(svg: SVGSVGElement, selector = '.plot-label') {
  const renderedWidth = svg.getBoundingClientRect().width;
  const viewBoxWidth = svg.viewBox.baseVal.width;
  const targetSize = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue('--plot-label-size'),
  );

  if (!renderedWidth || !viewBoxWidth || !targetSize) return;

  const intrinsicSize = targetSize * viewBoxWidth / renderedWidth;
  svg.querySelectorAll<SVGTextElement>(selector).forEach((label) => {
    label.setAttribute('font-size', `${intrinsicSize}px`);
  });
}
