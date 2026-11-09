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

  it('keeps non-Latin letters in queries', () => {
    expect(normaliseSearch('Δt')).toBe('δt');
    expect(matches('Δt denotes an interval', 'Δt')).toBe(true);
    expect(matches('unrelated entry', 'Δt')).toBe(false);
    expect(matches('Пётр', 'петр')).toBe(true);
    expect(matches('陰陽', '陰')).toBe(true);
    expect(matches('unrelated entry', '陰')).toBe(false);
  });

  it('maps Unicode matches to complete displayed characters', () => {
    expect(highlightRanges('Δt', compactSearch('Δt'))).toEqual([{ start: 0, end: 2 }]);
    expect(highlightRanges('𠮷田', compactSearch('𠮷'))).toEqual([{ start: 0, end: 2 }]);
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
