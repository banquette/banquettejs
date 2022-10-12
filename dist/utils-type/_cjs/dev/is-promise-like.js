/*!
 * Banquette UtilsType v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Test if the input looks like a promise.
 */
function isPromiseLike(value) {
    // Avoid testing for "then()" to avoid invoking a proxy that could have side effects.
    return Object.prototype.toString.call(value).indexOf('Promise') > -1;
}

exports.isPromiseLike = isPromiseLike;