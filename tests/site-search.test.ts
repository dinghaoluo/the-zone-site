import { describe, expect, it } from 'vitest';

import {
  compactSearch,
  highlightRanges,
  normaliseSearch,
  searchMatches,
} from '../src/scripts/siteSearch';

function matches(value: string, query: string): boolean {
  const normalisedQuery = normaliseSearch(query);
  return searchMatches(value, normalisedQuery, compactSearch(normalisedQuery));
}

describe('site search', () => {
  it('matches diacritics consistently', () => {
    expect(normaliseSearch('Peenemünde')).toBe('peenemunde');
    expect(matches('Peenemünde', 'peenemunde')).toBe(true);
  });

  it('ignores punctuation within a contiguous phrase', () => {
    expect(matches("Gravity's Rainbow", 'gravitys rainbow')).toBe(true);
    expect(matches("Gravity's Rainbow", 'rainbow gravity')).toBe(false);
  });

  it('maps punctuation-insensitive matches back to the displayed text', () => {
    expect(highlightRanges("Gravity's Rainbow", compactSearch('gravitys rainbow'))).toEqual([
      { start: 0, end: 17 },
    ]);
    expect(highlightRanges('Peenemünde', compactSearch('peenemunde'))).toEqual([
      { start: 0, end: 10 },
    ]);
  });

  it('coalesces overlapping ranges created by character expansions', () => {
    expect(highlightRanges('ß', compactSearch('s'))).toEqual([{ start: 0, end: 1 }]);
    expect(highlightRanges('ßß', compactSearch('s'))).toEqual([{ start: 0, end: 2 }]);
  });
});
