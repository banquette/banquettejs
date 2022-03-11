/**
 * Insert a string into another at a specified index.
 * If the index is negative it will count from the end of the target string.
 */
export function insertInString(str: string, index: number, inserted: string) {
    if (index < 0) {
        index = Math.min(0, index + str.length);
    }
    if (index > 0) {
        return str.substring(0, index) + inserted + str.substring(index);
    }
    return inserted + str;
}
