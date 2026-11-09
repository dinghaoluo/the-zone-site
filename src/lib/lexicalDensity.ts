export const LEXICAL_DENSITY_FORM_COUNT = 16;
export const LEXICAL_DENSITY_EPISODE_COUNT = 73;
export const LEXICAL_DENSITY_MAX_RATE = 16;

export type LexicalDensityPoint = {
  cohortDisplayOrder: number;
  word: string;
  episodeId: string;
  episodeOrder: number;
  lexicalTokens: number;
  rawCount: number;
  per1000: number;
};

export type LexicalCohortTerm = {
  cohortDisplayOrder: number;
  word: string;
};

export type LexicalDensityShape = {
  words: string[];
  episodes: string[];
};

export type LexicalTermPeak = {
  cohortDisplayOrder: number;
  word: string;
  peak: LexicalDensityPoint;
};

export type LexicalTrajectorySelectionDetail = {
  word: string;
  cohortDisplayOrder: number;
  episodeId?: string;
  locked: boolean;
};

export type LexicalTrajectoryCommitDetail = Omit<LexicalTrajectorySelectionDetail, 'locked'>;

export const lexicalTrajectoryEvents = {
  select: 'lexical-trajectory-select',
  committed: 'lexical-trajectory-selection-committed',
  cleared: 'lexical-trajectory-selection-cleared',
} as const;

function numberField(row: Record<string, string | undefined>, field: string) {
  const rawValue = row[field];
  if (rawValue === undefined || rawValue.trim() === '') {
    throw new Error(`Lexical density row has a missing ${field}`);
  }
  const value = Number(rawValue);
  if (!Number.isFinite(value)) throw new Error(`Lexical density row has an invalid ${field}`);
  return value;
}

export function parseLexicalDensityRow(row: Record<string, string | undefined>): LexicalDensityPoint {
  return {
    cohortDisplayOrder: numberField(row, 'cohort_display_order'),
    word: row.word?.trim() ?? '',
    episodeId: row.episode_id?.trim() ?? '',
    episodeOrder: numberField(row, 'episode_order'),
    lexicalTokens: numberField(row, 'lexical_tokens'),
    rawCount: numberField(row, 'raw_count'),
    per1000: numberField(row, 'per_1000'),
  };
}

export function parseLexicalCohortRow(row: Record<string, string | undefined>): LexicalCohortTerm {
  return {
    cohortDisplayOrder: numberField(row, 'cohort_display_order'),
    word: row.word?.trim() ?? '',
  };
}

export function densityPer1000(rawCount: number, lexicalTokens: number) {
  if (!Number.isFinite(rawCount) || rawCount < 0) throw new RangeError('raw count must be non-negative');
  if (!Number.isFinite(lexicalTokens) || lexicalTokens <= 0) throw new RangeError('lexical token count must be positive');
  return rawCount * 1000 / lexicalTokens;
}

export function linearRateFraction(rate: number, maximum = LEXICAL_DENSITY_MAX_RATE) {
  if (!Number.isFinite(rate) || !Number.isFinite(maximum) || maximum <= 0) {
    throw new RangeError('density scale values must be finite and positive');
  }
  return Math.max(0, Math.min(1, rate / maximum));
}

export function formatCount(value: number) {
  return value.toLocaleString('en-GB');
}

export function formatMentionCount(value: number) {
  return `${formatCount(value)} ${value === 1 ? 'mention' : 'mentions'}`;
}

export function validateLexicalDensity(
  points: readonly LexicalDensityPoint[],
  terms: readonly LexicalCohortTerm[] = [],
): LexicalDensityShape {
  if (points.length !== LEXICAL_DENSITY_FORM_COUNT * LEXICAL_DENSITY_EPISODE_COUNT) {
    throw new Error('Lexical density data is not 16 forms by 73 episodes');
  }
  if (terms.length && terms.length !== LEXICAL_DENSITY_FORM_COUNT) {
    throw new Error('Lexical cohort data does not contain 16 forms');
  }

  const pointsByWord = new Map<string, LexicalDensityPoint[]>();
  const wordOrder = new Map<string, number>();
  const episodesByOrder = new Map<number, string>();
  const denominatorsByOrder = new Map<number, number>();
  const cellKeys = new Set<string>();

  for (const point of points) {
    if (!point.word || !point.episodeId) throw new Error('Lexical density data contains an empty label');
    if (!Number.isInteger(point.cohortDisplayOrder) || point.cohortDisplayOrder < 1 || point.cohortDisplayOrder > LEXICAL_DENSITY_FORM_COUNT) {
      throw new Error(`Lexical density data has an invalid form order for ${point.word}`);
    }
    if (!Number.isInteger(point.episodeOrder) || point.episodeOrder < 1 || point.episodeOrder > LEXICAL_DENSITY_EPISODE_COUNT) {
      throw new Error(`Lexical density data has an invalid episode order for ${point.episodeId}`);
    }
    if (!Number.isInteger(point.lexicalTokens) || point.lexicalTokens <= 0 || !Number.isInteger(point.rawCount) || point.rawCount < 0 || !Number.isFinite(point.per1000) || point.per1000 < 0) {
      throw new Error(`Lexical density data has an invalid count for ${point.word} ${point.episodeId}`);
    }
    const existingOrder = wordOrder.get(point.word);
    if (existingOrder !== undefined && existingOrder !== point.cohortDisplayOrder) {
      throw new Error(`Lexical density form order changes for ${point.word}`);
    }
    wordOrder.set(point.word, point.cohortDisplayOrder);

    const existingEpisode = episodesByOrder.get(point.episodeOrder);
    if (existingEpisode !== undefined && existingEpisode !== point.episodeId) {
      throw new Error(`Lexical density episode order changes for ${point.episodeOrder}`);
    }
    episodesByOrder.set(point.episodeOrder, point.episodeId);
    const existingDenominator = denominatorsByOrder.get(point.episodeOrder);
    if (existingDenominator !== undefined && existingDenominator !== point.lexicalTokens) {
      throw new Error(`Lexical density denominator changes for ${point.episodeId}`);
    }
    denominatorsByOrder.set(point.episodeOrder, point.lexicalTokens);

    const cellKey = `${point.word}\u0000${point.episodeOrder}`;
    if (cellKeys.has(cellKey)) throw new Error(`Lexical density data duplicates ${point.word} ${point.episodeId}`);
    cellKeys.add(cellKey);

    const expectedRate = densityPer1000(point.rawCount, point.lexicalTokens);
    if (Math.abs(point.per1000 - expectedRate) > 1e-6) {
      throw new Error(`Lexical density does not match counts for ${point.word} ${point.episodeId}`);
    }
    const row = pointsByWord.get(point.word) ?? [];
    row.push(point);
    pointsByWord.set(point.word, row);
  }

  const words = [...wordOrder.entries()]
    .sort(([, left], [, right]) => left - right)
    .map(([word]) => word);
  const episodes = [...episodesByOrder.entries()]
    .sort(([left], [right]) => left - right)
    .map(([, episode]) => episode);

  if (words.length !== LEXICAL_DENSITY_FORM_COUNT || episodes.length !== LEXICAL_DENSITY_EPISODE_COUNT || new Set(episodes).size !== LEXICAL_DENSITY_EPISODE_COUNT) {
    throw new Error('Lexical density data does not contain 16 forms and 73 episodes');
  }
  for (const [index, word] of words.entries()) {
    if (wordOrder.get(word) !== index + 1 || pointsByWord.get(word)?.length !== LEXICAL_DENSITY_EPISODE_COUNT) {
      throw new Error(`Lexical density data has an incomplete row for ${word}`);
    }
  }
  for (const [index, episode] of episodes.entries()) {
    if (episodesByOrder.get(index + 1) !== episode) {
      throw new Error(`Lexical density data has an incomplete episode sequence at ${episode}`);
    }
  }

  if (terms.length) {
    const orderedTerms = [...terms].sort((left, right) => left.cohortDisplayOrder - right.cohortDisplayOrder);
    for (const [index, term] of orderedTerms.entries()) {
      if (term.cohortDisplayOrder !== index + 1 || term.word !== words[index]) {
        throw new Error(`Lexical cohort order does not match density rows at ${term.word}`);
      }
    }
  }

  return { words, episodes };
}

export function lexicalDensityPeak(points: readonly LexicalDensityPoint[]) {
  if (!points.length) throw new RangeError('Lexical density cannot find a peak in an empty row');
  return points.reduce((peak, point) => point.per1000 > peak.per1000 ? point : peak);
}

export function orderLexicalTermsByPeak(
  points: readonly LexicalDensityPoint[],
  terms: readonly LexicalCohortTerm[],
) {
  validateLexicalDensity(points, terms);
  const pointsByWord = new Map<string, LexicalDensityPoint[]>();
  for (const point of points) {
    const row = pointsByWord.get(point.word) ?? [];
    row.push(point);
    pointsByWord.set(point.word, row);
  }

  return [...terms]
    .sort((left, right) => left.cohortDisplayOrder - right.cohortDisplayOrder)
    .map((term): LexicalTermPeak => ({
      cohortDisplayOrder: term.cohortDisplayOrder,
      word: term.word,
      peak: lexicalDensityPeak(pointsByWord.get(term.word) ?? []),
    }))
    .sort((left, right) => (
      left.peak.episodeOrder - right.peak.episodeOrder
      || left.cohortDisplayOrder - right.cohortDisplayOrder
    ));
}

function selectionBase(word: string, cohortDisplayOrder: number, episodeId?: string) {
  if (typeof word !== 'string') return null;
  const cleanWord = word.trim();
  const cleanEpisode = episodeId?.trim();
  if (!cleanWord || !Number.isInteger(cohortDisplayOrder) || cohortDisplayOrder < 1 || cohortDisplayOrder > LEXICAL_DENSITY_FORM_COUNT) return null;
  return {
    word: cleanWord,
    cohortDisplayOrder,
    ...(cleanEpisode ? { episodeId: cleanEpisode } : {}),
  };
}

export function lexicalSelectionDetail(
  word: string,
  cohortDisplayOrder: number,
  episodeId?: string,
  locked = false,
): LexicalTrajectorySelectionDetail | null {
  const base = selectionBase(word, cohortDisplayOrder, episodeId);
  return base ? { ...base, locked } : null;
}

export function lexicalCommitDetail(
  word: string,
  cohortDisplayOrder: number,
  episodeId?: string,
): LexicalTrajectoryCommitDetail | null {
  return selectionBase(word, cohortDisplayOrder, episodeId);
}
