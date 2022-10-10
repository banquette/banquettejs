/*!
 * Banquette UtilsType v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { ensureArray } from './ensure-array.js';
import { ensureBoolean } from './ensure-boolean.js';
import { ensureNumber } from './ensure-number.js';
import { ensureObject } from './ensure-object.js';
import { ensureString } from './ensure-string.js';
import { isArray } from './is-array.js';

/**
 * Ensure the input is converted to a the type of the reference value.
 */
function ensureSameType(input, referenceValue) {
    var targetType = referenceValue === null ? 'null' : typeof (referenceValue);
    switch (targetType) {
        case 'string': return ensureString(input);
        case 'number':
        case 'bigint': return ensureNumber(input);
        case 'boolean': return ensureBoolean(input);
        case 'object': {
            if (isArray(referenceValue)) {
                return ensureArray(input);
            }
            return ensureObject(input);
        }
    }
    return input;
}

export { ensureSameType };
