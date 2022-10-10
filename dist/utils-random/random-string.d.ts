export declare const ALPHABETS: {
    ALPHA: string;
    ALPHANUMERIC: string;
    ALPHANUMERIC_SIMPLIFIED: string;
    BASE_64: string;
    COMPLEX: string;
    HEXADECIMAL: string;
    NUMERIC: string;
};
/**
 * Generates a random string.
 * Available alphabets are :
 *   - ALPHABETS.ALPHANUMERIC
 *   - ALPHABETS.ALPHA
 *   - ALPHABETS.ALPHANUMERIC
 *   - ALPHABETS.ALPHANUMERIC_SIMPLIFIED
 *   - ALPHABETS.BASE_64
 *   - ALPHABETS.COMPLEX
 *   - ALPHABETS.HEXADECIMAL
 *   - ALPHABETS.NUMERIC
 *
 * You can also provide your own.
 *
 * @param {number} length
 * @param {string} alphabet (optional, default: ALPHABETS.ALPHANUMERIC)
 *
 * @returns {string}
 */
export declare function randomString(length: number, alphabet?: string): string;
