/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isFunction } from '@banquette/utils-type/is-function';
import { getPropertyDescriptor } from './get-property-descriptor.js';

function isFunctionGetterSafe(ctor, property) {
    var descriptor = getPropertyDescriptor(ctor, property);
    if (!descriptor || descriptor.get || descriptor.set) {
        return false;
    }
    return isFunction(descriptor.value);
}

export { isFunctionGetterSafe };
