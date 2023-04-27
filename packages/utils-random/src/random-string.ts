import { isString } from '@banquette/utils-type';
import { randomInt } from './random-int';

export const ALPHABETS = {
    ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ALPHANUMERIC:
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    ALPHANUMERIC_SIMPLIFIED:
        'abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ123456789', // Alphanumeric without confusing letters/numbers like "O" and "0", "l" and "I", etc.
    BASE_64: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/',
    COMPLEX:
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/$^-_.(){}:<>?,;|[]*%#+!@~=',
    HEXADECIMAL: 'abcdef0123456789',
    NUMERIC: '0123456789',
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
export function randomString(
    length: number,
    alphabet: string = ALPHABETS.ALPHANUMERIC
): string {
    if (length < 1 || !isString(alphabet)) {
        return '';
    }
    let output = '';
    for (let i = 0; i < length; i++) {
        output += alphabet[randomInt(0, alphabet.length - 1)];
    }
    return output;
}
