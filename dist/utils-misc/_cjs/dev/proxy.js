/*!
 * Banquette UtilsMisc v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Bind a function to a context, optionally partially applying any arguments.
 */
function proxy(fn, context) {
    var args = Array.prototype.slice.call(arguments, 2);
    return function () {
        // @ts-ignore
        return fn.apply(context || this, args.concat(Array.prototype.slice.call(arguments)));
    };
}

exports.proxy = proxy;
