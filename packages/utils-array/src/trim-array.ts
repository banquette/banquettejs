import { trim } from '@banquette/utils-string';

/**
 * Trim each element of a string array.
 */
export function trimArray(input: string[]): string[] {
    for (let i = 0; i < input.length; ++i) {
        input[i] = trim(input[i]);
    }
    return input;
}
