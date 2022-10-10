/*!
 * Banquette UtilsMisc v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isFunction = require('@banquette/utils-type/_cjs/dev/is-function');

/**
 * Utility function allowing you to execute some logic (the side effect) after a callback has finished
 * while ensuring the side effect callback is only called once, even if recursive calls are made.
 */
function recursionSafeSideEffectProxy(sideEffectCallback) {
    var callCount = 0;
    return function (cb) {
        ++callCount;
        if (isFunction.isFunction(cb)) {
            cb();
        }
        if ((--callCount) === 0) {
            sideEffectCallback();
        }
    };
}

exports.recursionSafeSideEffectProxy = recursionSafeSideEffectProxy;
