import { readFileSync } from 'node:fs';

import { compactCastTransitions } from '../../lib/castTransitions';

export function GET() {
  const directory = 'public/data/network/character-through-episodes/';
  const boundaries = readFileSync(directory + 'adjacent_episode_distances.csv', 'utf-8');
  const contributors = readFileSync(directory + 'character_transition_contributions.csv', 'utf-8');
  return Response.json(compactCastTransitions(boundaries, contributors));
}
