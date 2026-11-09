export type GraphLabel = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  offset: number;
  priority: boolean;
};

export function placeGraphLabels(labels: GraphLabel[], width: number, height: number, limit: number) {
  const placed: Array<GraphLabel & { left: number; top: number }> = [];
  const priorityCount = labels.filter(label => label.priority).length;
  let ordinaryCount = 0;

  for (const label of labels) {
    if (!label.priority && ordinaryCount >= Math.max(0, limit - priorityCount)) continue;
    const right = label.x + label.offset;
    const left = label.x - label.offset - label.width;
    const middle = Math.max(4, Math.min(height - label.height - 4, label.y - label.height / 2));
    const positions = [
      { left: right, top: middle },
      { left, top: middle },
      { left: label.x - label.width / 2, top: label.y - label.offset - label.height },
      { left: label.x - label.width / 2, top: label.y + label.offset },
    ];
    if (label.priority) {
      const rowHeight = label.height + 6;
      positions.push(
        { left: right, top: middle - rowHeight },
        { left: right, top: middle + rowHeight },
        { left, top: middle - rowHeight },
        { left, top: middle + rowHeight },
      );
    }
    const candidates = positions.map(position => ({
      left: Math.max(4, Math.min(width - label.width - 4, position.left)),
      top: Math.max(4, Math.min(height - label.height - 4, position.top)),
    }));
    const overlap = (position: typeof candidates[number]) => placed.reduce((sum, other) => sum
      + Math.max(0, Math.min(position.left + label.width, other.left + other.width) - Math.max(position.left, other.left) + 4)
      * Math.max(0, Math.min(position.top + label.height, other.top + other.height) - Math.max(position.top, other.top) + 4), 0);
    const position = candidates.reduce((best, candidate) => overlap(candidate) < overlap(best) ? candidate : best);
    if (!label.priority && overlap(position) > 0) continue;
    placed.push({ ...label, ...position });
    if (!label.priority) ordinaryCount += 1;
  }
  return placed;
}
