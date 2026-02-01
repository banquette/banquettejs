/**
 * Determines if a reference is a record (object with string keys).
 */
export function isRecord(value: any): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}
