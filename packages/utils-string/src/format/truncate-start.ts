/**
 * Truncates a string to keep only the last `maxLength` characters, adding an optional prefix.
 *
 * @param str       The input string to truncate.
 * @param maxLength The maximum length of the result string, including the suffix.
 * @param suffix    An optional prefix to add at the beginning of the truncated string.
 */
export function truncateStart(str: string, maxLength: number, suffix: string = ''): string {
    if (str.length > maxLength) {
        const adjustedLength = maxLength - suffix.length;
        return suffix + str.substring(str.length - adjustedLength);
    }
    return str;
}
