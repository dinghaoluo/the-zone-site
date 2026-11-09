import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { csvParse } from 'd3';
import { describe, expect, it } from 'vitest';

import {
  orderLexicalTermsByPeak,
  parseLexicalCohortRow,
  parseLexicalDensityRow,
  validateLexicalDensity,
} from '../src/lib/lexicalDensity';
import type { CastBoundary } from '../src/lib/castTransitions';

const dataRoot = resolve(__dirname, '../public/data/network');
const readCsv = (name: string) => csvParse(readFileSync(resolve(dataRoot, name), 'utf-8'));
const density = readCsv('lexical-through-episodes/episode_density.csv').map(parseLexicalDensityRow);
const terms = readCsv('lexical-through-episodes/cohort_terms.csv').map(parseLexicalCohortRow);

describe('lexical episode density', () => {
  it('covers the declared forms and episodes with rates derived from complete token counts', () => {
    const shape = validateLexicalDensity(density, terms);
    const denominators = new Map(density.map(point => [point.episodeId, point.lexicalTokens]));
    expect(shape.words).toHaveLength(16);
    expect(shape.episodes).toHaveLength(73);
    expect([...denominators.values()].reduce((sum, count) => sum + count, 0)).toBe(327676);
  });

  it('rejects duplicate observations and rates that disagree with the counts', () => {
    const duplicate = density.map(point => ({ ...point }));
    duplicate[1] = { ...duplicate[0] };
    expect(() => validateLexicalDensity(duplicate, terms)).toThrow();

    const wrongRate = density.map(point => ({ ...point }));
    wrongRate[0].per1000 += 1;
    expect(() => validateLexicalDensity(wrongRate, terms)).toThrow();
  });

  it('orders density peaks chronologically and associates each with its quotation', () => {
    const peaks = orderLexicalTermsByPeak(density, terms);
    const quotes = JSON.parse(readFileSync(resolve(dataRoot, 'lexical-through-episodes/peak_quotes.json'), 'utf-8'));
    const peakEpisodes = peaks.map(term => term.peak.episodeOrder);
    expect(peakEpisodes).toEqual([...peakEpisodes].sort((a, b) => a - b));
    expect(quotes).toHaveLength(peaks.length);
    for (const term of peaks) {
      const quote = quotes.find((row: { word: string }) => row.word === term.word);
      expect(quote.episode_id).toBe(term.peak.episodeId);
      expect(quote.matched_surface.trim().toLocaleLowerCase('en-GB')).toBe(term.word);
    }
  });
});

describe('character episode density', () => {
  it('preserves all 20 by 73 observations and uses the same episode denominators', () => {
    const rows = readCsv('character-through-episodes/figure3_ordered_trajectories.csv');
    const denominators = new Map(density.map(point => [point.episodeId, point.lexicalTokens]));
    const cells = new Set(rows.map(row => `${row.canonical_name}|${row.episode_id}`));
    expect(rows).toHaveLength(1460);
    expect(cells.size).toBe(rows.length);
    expect(new Set(rows.map(row => row.canonical_name)).size).toBe(20);
    for (const row of rows) {
      expect(+row.lexical_token_count!).toBe(denominators.get(row.episode_id!));
      expect(+row.mentions_per_1000!).toBeCloseTo(+row.raw_mentions! * 1000 / +row.lexical_token_count!, 8);
    }
    expect(rows.filter(row => +row.raw_mentions! > 0)).toHaveLength(319);
  });
});

describe('cast transitions', () => {
  it('keeps the displayed values and contributor readings in the compact build export', () => {
    const compact = JSON.parse(readFileSync(resolve(__dirname, '../dist/data/cast-transitions.json'), 'utf-8')) as CastBoundary[];
    const boundaries = readCsv('character-through-episodes/adjacent_episode_distances.csv');
    const contributors = readCsv('character-through-episodes/character_transition_contributions.csv');
    expect(compact).toHaveLength(boundaries.length);
    for (const [index, boundary] of compact.entries()) {
      const source = boundaries[index];
      expect(boundary.index).toBe(+source.boundary_index!);
      expect(boundary.fromEpisode).toBe(source.from_episode_id);
      expect(boundary.toEpisode).toBe(source.to_episode_id);
      expect(boundary.jsd).toBe(+source.jsd_bits!);
      expect(boundary.stable).toBe(source.stable_transition === 'True');
      expect(boundary.lowMention).toBe(source.touches_episode_below_20_mentions === 'True');
      expect(boundary.partBoundary).toBe(source.part_boundary === 'True');
      for (const direction of ['outgoing', 'incoming'] as const) {
        const rows = contributors.filter(row => +row.boundary_index! === boundary.index
          && +row.jsd_contribution_bits! > 0
          && (direction === 'outgoing' ? +row.smoothed_share_change! < 0 : +row.smoothed_share_change! > 0));
        rows.sort((a, b) => +b.jsd_contribution_bits! - +a.jsd_contribution_bits! || a.canonical_name!.localeCompare(b.canonical_name!));
        const named = rows.filter(row => row.change_type !== 'zero in both').slice(0, 3);
        expect(boundary[direction].names).toEqual(named.map(row => row.short_name));
        const names = new Set(named.map(row => row.canonical_name));
        expect(boundary[direction].hasOthers).toBe(rows.some(row => !names.has(row.canonical_name)));
      }
    }
  });

  it('accounts for each boundary through the full set of character contributions', () => {
    const boundaries = readCsv('character-through-episodes/adjacent_episode_distances.csv');
    const contributions = readCsv('character-through-episodes/character_transition_contributions.csv');
    expect(boundaries).toHaveLength(72);
    expect(contributions).toHaveLength(72 * 130);
    for (const [index, boundary] of boundaries.entries()) {
      expect(+boundary.boundary_index!).toBe(index + 1);
      const rows = contributions.filter(row => row.boundary_index === boundary.boundary_index);
      expect(new Set(rows.map(row => row.canonical_name)).size).toBe(130);
      let divergence = 0;
      for (const row of rows) {
        const from = +row.from_smoothed_share!;
        const to = +row.to_smoothed_share!;
        const mean = (from + to) / 2;
        const contribution = mean === 0 ? 0 : (
          (from ? from * Math.log2(from / mean) : 0)
          + (to ? to * Math.log2(to / mean) : 0)
        ) / 2;
        expect(+row.jsd_contribution_bits!).toBeCloseTo(contribution, 10);
        expect(+row.smoothed_share_change!).toBeCloseTo(to - from, 10);
        divergence += contribution;
      }
      expect(divergence).toBeCloseTo(+boundary.jsd_bits!, 10);
      expect(divergence).toBeGreaterThanOrEqual(0);
      expect(divergence).toBeLessThanOrEqual(1);
    }
  });
});

describe('retained lexical graph', () => {
  it('keeps the published graph identities, endpoints and source consistent', () => {
    const graph = JSON.parse(readFileSync(resolve(dataRoot, 'lexical-proximity.json'), 'utf-8'));
    const manifest = JSON.parse(readFileSync(resolve(dataRoot, 'lexical-through-episodes/manifest.json'), 'utf-8'));
    const nodes = graph.nodes as { id: string }[];
    const edges = graph.edges as { id: string; source: string; target: string; npmi: number; backbone: boolean }[];
    const ids = new Set(nodes.map(node => node.id));
    expect(nodes).toHaveLength(graph.meta.node_count);
    expect(edges).toHaveLength(graph.meta.edge_count);
    expect(ids.size).toBe(nodes.length);
    expect(new Set(edges.map(edge => edge.id)).size).toBe(edges.length);
    expect(edges.filter(edge => edge.backbone)).toHaveLength(graph.meta.backbone_edge_count);
    expect(graph.meta.source_sha256).toBe(manifest.source_hash);
    for (const node of nodes) expect(node.id).toBe(node.id.normalize('NFC'));
    for (const edge of edges) {
      expect(ids.has(edge.source) && ids.has(edge.target)).toBe(true);
      expect(edge.source).not.toBe(edge.target);
      expect(edge.npmi).toBeGreaterThan(0);
      expect(edge.npmi).toBeLessThanOrEqual(1);
    }
  });
});
