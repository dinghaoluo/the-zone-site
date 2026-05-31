export function normaliseSearch(value: string): string {
  return value
    .toLocaleLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ß/g, 'ss')
    .replace(/æ/g, 'ae')
    .replace(/œ/g, 'oe')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

export function compactSearch(value: string): string {
  return normaliseSearch(value).replace(/\s+/g, '');
}

export function searchMatches(
  value: string,
  query: string,
  compactQuery: string = compactSearch(query)
): boolean {
  const normalisedValue = normaliseSearch(value);
  const compactValue = normalisedValue.replace(/\s+/g, '');
  return normalisedValue.includes(query)
    || (compactQuery.length > 1 && compactValue.includes(compactQuery));
}

function normaliseCharacter(value: string): string {
  return value
    .toLocaleLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ß/g, 'ss')
    .replace(/æ/g, 'ae')
    .replace(/œ/g, 'oe')
    .replace(/[^a-z0-9]/g, '');
}

export function highlightRanges(value: string, compactQuery: string): { start: number; end: number }[] {
  if (compactQuery.length === 0) return [];

  let compactValue = '';
  const offsets: { start: number; end: number }[] = [];
  let index = 0;

  for (const character of value) {
    const start = index;
    const end = index + character.length;
    const normalised = normaliseCharacter(character);

    for (const _ of normalised) {
      compactValue += _;
      offsets.push({ start, end });
    }

    index = end;
  }

  const ranges: { start: number; end: number }[] = [];
  let searchFrom = 0;

  while (searchFrom < compactValue.length) {
    const matchIndex = compactValue.indexOf(compactQuery, searchFrom);
    if (matchIndex < 0) break;

    const start = offsets[matchIndex]?.start;
    const end = offsets[matchIndex + compactQuery.length - 1]?.end;
    if (start !== undefined && end !== undefined) {
      const previous = ranges[ranges.length - 1];
      if (previous && start <= previous.end) {
        previous.end = Math.max(previous.end, end);
      } else {
        ranges.push({ start, end });
      }
    }

    searchFrom = matchIndex + Math.max(1, compactQuery.length);
  }

  return ranges;
}

export function highlightElementText(element: HTMLElement, compactQuery: string): void {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  const textNodes: { node: Text; start: number; end: number }[] = [];
  let text = '';
  let node = walker.nextNode();

  while (node) {
    const textNode = node as Text;
    const start = text.length;
    text += textNode.data;
    textNodes.push({ node: textNode, start, end: text.length });
    node = walker.nextNode();
  }

  const ranges = highlightRanges(text, compactQuery);
  if (ranges.length === 0) return;

  for (const textNode of textNodes) {
    const intersections = ranges
      .filter(range => range.start < textNode.end && range.end > textNode.start)
      .map(range => ({
        start: Math.max(range.start, textNode.start) - textNode.start,
        end: Math.min(range.end, textNode.end) - textNode.start,
      }));
    if (intersections.length === 0) continue;

    const fragment = document.createDocumentFragment();
    const value = textNode.node.data;
    let cursor = 0;

    for (const intersection of intersections) {
      if (intersection.end <= cursor) continue;

      if (intersection.start > cursor) {
        fragment.append(document.createTextNode(value.slice(cursor, intersection.start)));
      }

      const highlight = document.createElement(
        textNode.node.parentElement?.closest('mark') ? 'span' : 'mark'
      );
      highlight.className = 'site-search-match';
      highlight.textContent = value.slice(intersection.start, intersection.end);
      fragment.append(highlight);
      cursor = intersection.end;
    }

    if (cursor < value.length) {
      fragment.append(document.createTextNode(value.slice(cursor)));
    }

    textNode.node.replaceWith(fragment);
  }
}
