/**
 * Exception safe `JSON.`.
 */
export function jsonEncode(input: any): string|null {
    try {
        return JSON.stringify(input);
    } catch (e) { }
    return null;
}
