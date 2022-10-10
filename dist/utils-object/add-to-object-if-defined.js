/*!
 * Banquette UtilsObject v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isUndefined } from '@banquette/utils-type/is-undefined';

/**
 * Add a value to an object if it's not undefined.
 */
function addToObjectIfDefined(obj, key, value) {
    if (!isUndefined(value)) {
        obj[key] = value;
    }
}

export { addToObjectIfDefined };
