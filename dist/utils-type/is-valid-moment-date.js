/*!
 * Banquette UtilsType v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isFunction } from './is-function.js';
import { isObject } from './is-object.js';
import { isUndefined } from './is-undefined.js';

/**
 * Test if the input is a valid momentjs date.
 */
function isValidMomentDate(value) {
    return isObject(value) &&
        (!isUndefined(value.isMoment) || !isUndefined(value._isAMomentObject)) &&
        ((isFunction(value.isValid) && value.isValid()) || value._isValid === true);
}

export { isValidMomentDate };
