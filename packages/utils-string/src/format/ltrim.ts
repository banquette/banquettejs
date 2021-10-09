import { trim, TrimStrategy } from "./trim";

/**
 * Trim the left side of a string.
 *
 * Alias of `trim(input, chars, TrimStrategy.LEFT)`.
 */
export function ltrim(input: string, chars: string = ' '): string {
    return trim(input, chars, TrimStrategy.LEFT);
}
