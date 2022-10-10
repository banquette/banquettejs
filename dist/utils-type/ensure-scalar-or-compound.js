/*!
 * Banquette UtilsType v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isScalar } from './is-scalar.js';
import { ensureString } from './ensure-string.js';
import { isObjectLiteral } from './is-object.js';
import { isArray } from './is-array.js';

/**
 * Ensure the input is a scalar value.
 * If not, converts it to string.
 */
function ensureScalarOrCompound(input) {
    if (isScalar(input)) {
        return input;
    }
    if (isArray(input) || isObjectLiteral(input)) {
        for (var _i = 0, _a = Object.keys(input); _i < _a.length; _i++) {
            var key = _a[_i];
            input[key] = ensureScalarOrCompound(input[key]);
        }
        return input;
    }
    return ensureString(input);
}

export { ensureScalarOrCompound };
