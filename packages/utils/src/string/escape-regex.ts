/**
 * Escape all regex reserved characters so the string can be used as simple text inside a regular expression.
 *
 * @author bobince
 * @source https://stackoverflow.com/a/3561711/1110635
 */
export function escapeRegex(input: string) {
    return input.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
