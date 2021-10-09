import { trim, TrimStrategy } from "./trim";

/**
 * Trim the left side of a string.
 *
 * Alias of `trim(input, chars, TrimStrategy.RIGHT)`.
 */
export function rtrim(input: string, chars?: string): string {
    return trim(input, chars, TrimStrategy.RIGHT);
}
