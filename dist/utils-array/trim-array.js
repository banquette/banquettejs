/*!
 * Banquette UtilsArray v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { trim } from '@banquette/utils-string/format/trim';

/**
 * Trim each element of a string array.
 */
function trimArray(input) {
    for (var i = 0; i < input.length; ++i) {
        input[i] = trim(input[i]);
    }
    return input;
}

export { trimArray };
