export declare enum TrimStrategy {
    LEFT = 1,
    RIGHT = 2,
    BOTH = 3
}
/**
 * Trim a string.
 *
 * @source https://stackoverflow.com/a/55292366/1110635 (with slight modifications)
 */
export declare function trim(input: string, chars?: string, strategy?: TrimStrategy): string;
