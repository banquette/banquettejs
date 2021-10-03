/**
 * Ensure the input is converted to a boolean.
 */
export function ensureBoolean(input: any): boolean {
    return input === true || input === "true" || input === "on" || (!!input && input !== '0');
}
