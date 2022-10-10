/*!
 * Banquette UtilsType v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isNullOrUndefined } from './is-null-or-undefined.js';

/**
 * Determines if a value is iterable.
 */
function isIterable(value) {
    return !isNullOrUndefined(value) && typeof value[Symbol.iterator] === 'function';
}

export { isIterable };
