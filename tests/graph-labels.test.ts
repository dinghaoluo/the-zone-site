import { describe, expect, it } from 'vitest';

import { placeGraphLabels, type GraphLabel } from '../src/lib/graphLabels';

describe('lexical graph labels', () => {
  it('keeps both selected endpoints visible without overlap at a plot corner', () => {
    for (const x of [0, 294]) for (const y of [0, 186]) {
      const labels = ['everyone', 'knows'].map(id => ({ id, x, y, width: id.length * 9, height: 16, offset: 8, priority: true }));
      const placed = placeGraphLabels(labels, 294, 186, 3);
      expect(placed).toHaveLength(2);
      for (const label of placed) {
        expect(label.left).toBeGreaterThanOrEqual(0);
        expect(label.top).toBeGreaterThanOrEqual(0);
        expect(label.left + label.width).toBeLessThanOrEqual(294);
        expect(label.top + label.height).toBeLessThanOrEqual(186);
      }
      const [first, second] = placed;
      const overlaps = first.left < second.left + second.width && second.left < first.left + first.width
        && first.top < second.top + second.height && second.top < first.top + first.height;
      expect(overlaps).toBe(false);
    }
  });

  it('reserves the mobile label allowance for selected endpoints before structural hubs', () => {
    const labels: GraphLabel[] = [
      { id: 'everyone', x: 60, y: 40, width: 70, height: 16, offset: 8, priority: true },
      { id: 'knows', x: 60, y: 42, width: 45, height: 16, offset: 8, priority: true },
      { id: 'springer', x: 200, y: 140, width: 70, height: 16, offset: 8, priority: false },
      { id: 'bland', x: 200, y: 80, width: 45, height: 16, offset: 8, priority: false },
    ];
    expect(placeGraphLabels(labels, 294, 186, 3).map(label => label.id)).toEqual(['everyone', 'knows', 'springer']);
  });
});
