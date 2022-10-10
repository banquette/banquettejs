/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isUndefined } from '@banquette/utils-type/is-undefined';

/**
 * Try to get a property descriptor in the whole prototype chain.
 */
function getPropertyDescriptor(ctor, property) {
    var prototype = ctor.prototype;
    do {
        var descriptor = Object.getOwnPropertyDescriptor(prototype, property);
        if (!isUndefined(descriptor)) {
            return descriptor;
        }
        prototype = Object.getPrototypeOf(prototype);
    } while (prototype);
    return null;
}

export { getPropertyDescriptor };
