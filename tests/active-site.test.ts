import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

import { describe, expect, it } from 'vitest';

import { episodePartLengths, episodeWordCounts } from '../src/data/episodeWordCounts';
import { glossaryFocusEntries } from '../src/data/glossaryFocusEntries';
import { homepageLanguageSummary } from '../src/data/homepageLanguageSummary';
import references from '../src/data/references.json';

const root = resolve(__dirname, '..');
const referencePageSource = readFileSync(resolve(root, 'src/pages/reference.astro'), 'utf-8');

describe('glossary integrity', () => {
  it('uses unique entry IDs', () => {
    const ids = glossaryFocusEntries.map(entry => entry.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('resolves every related term', () => {
    const ids = new Set(glossaryFocusEntries.map(entry => entry.id));
    const missing = glossaryFocusEntries.flatMap(entry =>
      (entry.relatedTerms ?? []).filter(termId => !ids.has(termId))
    );
    expect(missing).toEqual([]);
  });

  it('finds every highlighted term in its excerpt', () => {
    const missing = glossaryFocusEntries
      .filter(entry =>
        !entry.context.excerpt
          .toLocaleLowerCase()
          .includes(entry.context.highlightedTerm.toLocaleLowerCase())
      )
      .map(entry => entry.id);
    expect(missing).toEqual([]);
  });
});

describe('homepage data', () => {
  it('covers all 73 episodes and four Parts', () => {
    expect(episodeWordCounts).toHaveLength(73);
    expect(episodeWordCounts.every(Number.isInteger)).toBe(true);
    expect(episodeWordCounts.every(count => count > 0)).toBe(true);
    expect(episodePartLengths).toEqual([21, 8, 32, 12]);
    expect(episodePartLengths.reduce((sum, length) => sum + length, 0)).toBe(73);
  });

  it('keeps the displayed language summary', () => {
    expect(homepageLanguageSummary).toEqual([
      { key: 'German', colour: '--language-german', total: 411, legible: 356 },
      { key: 'French', colour: '--language-french', total: 87, legible: 86 },
      { key: 'Russian (transliterated)', colour: '--language-russian', total: 21, legible: 21 },
      { key: 'Herero/Nama', colour: '--language-herero', total: 15, legible: 15 },
      { key: 'Latin', colour: '--language-latin', total: 5, legible: 5 },
    ]);
  });
});

describe('reference data', () => {
  const expectedKeys = [
    'accessCategory',
    'category',
    'creators',
    'format',
    'publisherOrHost',
    'resourceType',
    'shortAnnotation',
    'tags',
    'title',
    'url',
    'year',
  ].sort();
  const categories = new Set(['analyses', 'guides', 'community', 'audio-video']);
  const accessCategories = new Set(['open', 'library', 'paywalled', 'varies']);

  it('contains the 34 displayed records', () => {
    expect(references).toHaveLength(34);
  });

  it('uses the four reviewed reference categories', () => {
    const counts = references.reduce<Record<string, number>>((result, reference) => {
      result[reference.category] = (result[reference.category] ?? 0) + 1;
      return result;
    }, {});

    expect(counts).toEqual({
      analyses: 19,
      guides: 9,
      community: 2,
      'audio-video': 4,
    });
  });

  it('contains only displayed or searchable fields', () => {
    for (const reference of references) {
      expect(Object.keys(reference).sort()).toEqual(expectedKeys);
      expect(reference.title).not.toBe('');
      expect(reference.creators).not.toBe('');
      expect(reference.resourceType).not.toBe('');
      expect(reference.format).not.toBe('');
      expect(reference.publisherOrHost).not.toBe('');
      expect(reference.shortAnnotation).not.toBe('');
      expect(reference.tags.every(tag => tag.length > 0)).toBe(true);
      expect(categories.has(reference.category)).toBe(true);
      expect(accessCategories.has(reference.accessCategory)).toBe(true);
      expect(reference.year === null || Number.isInteger(reference.year)).toBe(true);
      expect(reference.url === null || URL.canParse(reference.url)).toBe(true);
    }
  });

  it('keeps titles and creators unique in combination', () => {
    const identities = references.map(reference => `${reference.title}\n${reference.creators}`);
    expect(new Set(identities).size).toBe(identities.length);
  });

  it('uses one valid URL for each source', () => {
    const urls = references.map(reference => reference.url);
    expect(urls.every(url => URL.canParse(url))).toBe(true);
    expect(new Set(urls).size).toBe(urls.length);
  });
});

describe('reference interactions', () => {
  it('keeps filtered entries out of the grid layout', () => {
    expect(referencePageSource).toMatch(
      /\.reference-page \[hidden\]\s*\{\s*display:\s*none !important;/
    );
  });

  it('does not change category font weight on hover or focus', () => {
    const interactionBlocks = referencePageSource.match(
      /\.reference-(?:category-control|entry-category):(?:hover|focus-visible)[^{]*\{[^}]*\}/g
    ) ?? [];

    expect(interactionBlocks).not.toHaveLength(0);
    expect(interactionBlocks.every(block => !block.includes('font-weight'))).toBe(true);
  });
});

describe('live route boundary', () => {
  it('contains only Home, Network, Glossary, Reference, and Methods', () => {
    expect(readdirSync(resolve(root, 'src/pages')).sort()).toEqual([
      'glossary.astro',
      'index.astro',
      'methods.astro',
      'network.astro',
      'reference.astro',
    ]);
  });
});

describe('production build', () => {
  it('builds the active site', () => {
    expect(() => execFileSync('npm', ['run', 'build'], {
      cwd: root,
      encoding: 'utf-8',
      timeout: 30_000,
    })).not.toThrow();
  }, 30_000);
});
