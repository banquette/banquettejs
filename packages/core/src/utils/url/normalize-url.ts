/**
 * Normalize an URL by removing multiple slashes, backslashes, etc.
 */
export function normalizeUrl(url: string): string {
    return url.replace(/\\/g, "/").replace(/([^:])(\/\/+)/g, "$1/");
}
