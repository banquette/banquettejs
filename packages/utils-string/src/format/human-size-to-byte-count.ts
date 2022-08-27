const powers: Record<string, number> = {'k': 1, 'm': 2, 'g': 3, 't': 4};

/**
 * Convert a size in bytes to a human friendly string.
 */
export function humanSizeToByteCount(size: string): number {
    const match = size.match(/(\d*\.?\d*)\s*([a-z]+)/i);
    if (!match) {
        return parseFloat(size);
    }
    const value = parseFloat(match[1]);
    const unit = match[2];
    if (unit.length < 2) {
        return Math.round(unit === 'b' ? (value / 8) : value);
    }
    const byteSize = unit === 'KB' || unit[1] === 'i' ? 1024 : 1000;
    const result = value * Math.pow(byteSize, powers[unit[0].toLowerCase()] || 1);
    return Math.round(unit[unit.length - 1] === 'b' ? (result / 8) : result);
}
