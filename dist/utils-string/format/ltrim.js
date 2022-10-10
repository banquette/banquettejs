/*!
 * Banquette UtilsString v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { trim, TrimStrategy } from './trim.js';

/**
 * Trim the left side of a string.
 *
 * Alias of `trim(input, chars, TrimStrategy.LEFT)`.
 */
function ltrim(input, chars) {
    return trim(input, chars, TrimStrategy.LEFT);
}

export { ltrim };
