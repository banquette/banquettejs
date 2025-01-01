let te: TextEncoder|null = null;

/**
 * Get the size of a string in bytes, considering utf8 multi-bytes characters.
 */
export function utf8Size(str: string): number {
    if (!te) {
        te = new TextEncoder();
    }
    return te.encode(str).length;
}
