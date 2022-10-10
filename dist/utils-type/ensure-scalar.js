/*!
 * Banquette UtilsType v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isScalar } from './is-scalar.js';
import { ensureString } from './ensure-string.js';

/**
 * Ensure the input is a scalar value.
 * If not, converts it to string.
 */
function ensureScalar(input) {
    if (isScalar(input)) {
        return input;
    }
    return ensureString(input);
}

export { ensureScalar };
