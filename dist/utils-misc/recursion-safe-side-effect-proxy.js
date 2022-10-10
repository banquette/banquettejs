/*!
 * Banquette UtilsMisc v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isFunction } from '@banquette/utils-type/is-function';

/**
 * Utility function allowing you to execute some logic (the side effect) after a callback has finished
 * while ensuring the side effect callback is only called once, even if recursive calls are made.
 */
function recursionSafeSideEffectProxy(sideEffectCallback) {
    var callCount = 0;
    return function (cb) {
        ++callCount;
        if (isFunction(cb)) {
            cb();
        }
        if ((--callCount) === 0) {
            sideEffectCallback();
        }
    };
}

export { recursionSafeSideEffectProxy };
