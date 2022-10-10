/*!
 * Banquette UtilsObject v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isArray } from '@banquette/utils-type/is-array';
import { isObject } from '@banquette/utils-type/is-object';
import { extend } from './extend.js';

/**
 * Recursively clone a value.
 */
function cloneDeep(value) {
    if (isArray(value)) {
        return extend([], [value], true);
    }
    else if (isObject(value)) {
        return extend({}, [value], true);
    }
    return value;
}

export { cloneDeep };
