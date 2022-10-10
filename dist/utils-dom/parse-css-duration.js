/*!
 * Banquette UtilsDom v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { ensureNumber } from '@banquette/utils-type/ensure-number';
import { isString } from '@banquette/utils-type/is-string';

/**
 * Parse a css duration into a number of milliseconds.
 */
function parseCssDuration(input) {
    if (isString(input)) {
        var asNum = parseFloat(input);
        if (input.match(/[^m]s\s*$/)) {
            asNum *= 1000;
        }
        return asNum;
    }
    return ensureNumber(input);
}

export { parseCssDuration };
