/**
 * Truncates a string to `maxLength` by keeping the start and end, replacing the middle with an optional suffix.
 *
 * @param str       The input string to truncate.
 * @param maxLength The maximum length of the result string, including the suffix.
 * @param suffix    An optional suffix to add in the middle of the truncated string (default: "...")
 */
export function truncateMiddle(str: string, maxLength: number, suffix: string = '...'): string {
    if (str.length > maxLength) {
        const adjustedLength = maxLength - suffix.length;
        const cutStart = Math.floor(adjustedLength / 2);
        return str.substring(0, cutStart) + suffix + str.substring(str.length - cutStart);
    }
    return str;
}
