/*!
 * Banquette ObjectObserver v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isObject } from '@banquette/utils-type/is-object';
import { ObserverInstance } from './constant.js';

/**
 * Try to extract the observer instance from a value.
 */
function extractObserver(value) {
    return isObject(value) ? (value[ObserverInstance] || null) : null;
}

export { extractObserver };
