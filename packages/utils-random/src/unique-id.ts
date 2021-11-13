/**
 * The list of all generated ids.
 * This gives a better insurance the id is unique, at least for the current execution context.
 */
const existingIds: string[] = [];

/**
 * Generate a unique id string.
 *
 * @param length the length of the id to generate
 * @param ensureUnique if `true` the id is confronted to all ids previously generated to ensure uniqueness
 */
export function uniqueId(length: number, ensureUnique: boolean = true): string {
    let output = '';
    length = Math.max(1, length);
    do {
        let part: string = Math.random().toString(36).substring(2, 2 + (length - output.length));
        if (output === '') {
            part = part.replace(/^[0-9]+/, '');
        }
        output += part;
        if (output.length < length) {
            continue;
        }
        if (!ensureUnique || existingIds.indexOf(output) < 0) {
            existingIds.push(output);
            return output;
        }
        // Not unique? Try again.
        output = '';
    } while (true);
}
