import { csvParse } from 'd3';

export type CastDirection = { names: string[]; hasOthers: boolean };
export type CastBoundary = {
  index: number;
  fromEpisode: string;
  toEpisode: string;
  jsd: number;
  stable: boolean;
  lowMention: boolean;
  partBoundary: boolean;
  outgoing: CastDirection;
  incoming: CastDirection;
};

export function compactCastTransitions(boundaryText: string, contributorText: string): CastBoundary[] {
  const contributors = csvParse(contributorText);
  const asBoolean = (value: string | undefined) => ['true', '1', 'yes', 'True'].includes(value ?? '');

  function direction(index: number, sign: number): CastDirection {
    const rows = contributors
      .filter(row => +row.boundary_index! === index && +row.jsd_contribution_bits! > 0 && Math.sign(+row.smoothed_share_change!) === sign)
      .sort((a, b) => +b.jsd_contribution_bits! - +a.jsd_contribution_bits! || a.canonical_name!.localeCompare(b.canonical_name!));
    const named = rows.filter(row => row.change_type !== 'zero in both').slice(0, 3);
    const names = new Set(named.map(row => row.canonical_name));
    return {
      names: named.map(row => row.short_name ?? row.canonical_name!),
      hasOthers: rows.some(row => !names.has(row.canonical_name)),
    };
  }

  return csvParse(boundaryText).map(row => {
    const index = +row.boundary_index!;
    return {
      index,
      fromEpisode: row.from_episode_id!,
      toEpisode: row.to_episode_id!,
      jsd: +row.jsd_bits!,
      stable: asBoolean(row.stable_transition),
      lowMention: asBoolean(row.touches_episode_below_20_mentions),
      partBoundary: asBoolean(row.part_boundary),
      outgoing: direction(index, -1),
      incoming: direction(index, 1),
    };
  }).sort((a, b) => a.index - b.index);
}
