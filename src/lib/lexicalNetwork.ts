type Neighbour = { word: string; edge_id: string };
export type NodeRecord = {
  id: string;
  display: string;
  frequency: number;
  episode_count: number;
  x: number;
  y: number;
  z: number;
  community_id: number;
  component_id: number;
  degree: number;
  weighted_degree: number;
  hub_rank: number;
  size_scale: number;
  render_radius: number;
  incident_neighbours: Neighbour[];
};
type SupportEpisode = { episode_id: string; part: number; global_index: number; pair_events: number };
export type EdgeRecord = {
  id: string;
  source: string;
  target: string;
  npmi: number;
  pair_events: number;
  supporting_episode_count: number;
  mean_sentence_distance: number;
  minimum_sentence_distance: number;
  backbone: boolean;
  backbone_rank: number | null;
  selection_reason: string[];
  supporting_episodes: SupportEpisode[];
};
type CommunityRecord = { id: number; size: number; component_id: number; link_count: number; internal_weight: number; weighted_degree_sum: number; top_words: string[] };
export type Payload = {
  meta: { schema_version?: string; node_count?: number; edge_count?: number; backbone_edge_count?: number; component_count?: number; isolate_count?: number; community_count?: number; episode_count?: number };
  method?: Record<string, unknown>;
  communities: CommunityRecord[];
  components?: Record<string, unknown>[];
  nodes: NodeRecord[];
  edges: EdgeRecord[];
};
export const communityColours = [
  'var(--lexical-community-1)', 'var(--lexical-community-2)', 'var(--lexical-community-3)',
  'var(--lexical-community-4)', 'var(--lexical-community-5)', 'var(--lexical-community-6)',
  'var(--lexical-community-7)', 'var(--lexical-community-8)', 'var(--lexical-community-9)',
  'var(--lexical-community-10)', 'var(--lexical-community-11)', 'var(--lexical-community-12)',
  'var(--lexical-community-13)', 'var(--lexical-community-14)',
];
export const communityColour = (id: number) => communityColours[(Math.max(1, id) - 1) % communityColours.length];
