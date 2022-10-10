/*!
 * Banquette UtilsArray v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');

/**
 * Gets the first defined value of the list or arg.
 * If all arguments are undefined, undefined is returned.
 */
function getFirstOf() {
    var arguments$1 = arguments;

    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments$1[_i];
    }
    if (args.length === 0) {
        return undefined;
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (!isUndefined.isUndefined(arg)) {
            return arg;
        }
    }
    return args[args.length - 1];
}

exports.getFirstOf = getFirstOf;
