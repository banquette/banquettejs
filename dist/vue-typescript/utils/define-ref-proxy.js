/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { reassign } from '@banquette/utils-misc/make-reassignable';

/**
 * Define a proxy making the wrapper object created by Vue invisible.
 */
function defineRefProxy(proxy, proxyKey, target, targetKey) {
    if (targetKey === void 0) { targetKey = proxyKey; }
    Object.defineProperty(proxy, proxyKey, {
        get: function () { return target[targetKey].value; },
        set: function (value) {
            target[targetKey].value = value;
            // If the value has been wrap into a proxy created by `makeReassignable()`,
            // reassign it to the Vue proxy.
            reassign(value, target[targetKey].value);
        },
        enumerable: true,
        configurable: true
    });
}

export { defineRefProxy };
