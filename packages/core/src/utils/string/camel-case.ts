import { capitalize } from "./capitalize";

/**
 * Convert a string to the camelCase case.
 */
export function camelCase(input: string): string {
    const string = input.toLowerCase().replace(/[^A-Za-z0-9]/g, ' ').split(' ')
        .reduce((result, word) => result + capitalize(word.toLowerCase()));
    return string.charAt(0).toLowerCase() + string.slice(1);
}
