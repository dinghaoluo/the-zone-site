export function waitForFigure(figure: Element): Promise<void> {
  return new Promise(resolve => {
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      observer.disconnect();
      resolve();
    }, { rootMargin: '600px 0px' });
    observer.observe(figure);
  });
}
