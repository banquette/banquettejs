/**
 * Set the first character of a string to the uppercase.
 */
export function capitalize(input : string): string {
    return input.charAt(0).toUpperCase() + input.slice(1);
}
