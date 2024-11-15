/**
 * Truncates a string to keep only the first `maxLength` characters, adding an optional suffix.
 *
 * @param str       The input string to truncate.
 * @param maxLength The maximum length of the result string, including the suffix.
 * @param suffix    An optional suffix to add at the end of the truncated string.
 */
export function truncateEnd(str: string, maxLength: number, suffix: string = ''): string {
    if (str.length > maxLength) {
        const adjustedLength = maxLength - suffix.length;
        return str.substring(0, adjustedLength) + suffix;
    }
    return str;
}
