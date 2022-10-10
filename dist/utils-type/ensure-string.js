/*!
 * Banquette UtilsType v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { ensureSerializable } from './ensure-serializable.js';
import { isArray } from './is-array.js';
import { isNullOrUndefined } from './is-null-or-undefined.js';
import { isObject } from './is-object.js';
import { isString } from './is-string.js';
import { isSymbol } from './is-symbol.js';
import { getSymbolDescription } from './utils.js';

/**
 * Ensure the input is converted to a string.
 *
 * Inspired by lodash/toString.
 * @see https://lodash.com/docs/4.17.15#toString
 */
function ensureString(input) {
    if (isNullOrUndefined(input)) {
        return '';
    }
    if (isString(input)) {
        return input;
    }
    if (isObject(input)) {
        return JSON.stringify(ensureSerializable(input));
    }
    if (isArray(input)) {
        return JSON.stringify(input.map(toString));
    }
    if (isSymbol(input)) {
        return getSymbolDescription(input);
    }
    var genericOutput = (input + '');
    return (genericOutput === '0' && (1 / input) == -(1 / 0)) ? '-0' : genericOutput;
}

export { ensureString };
