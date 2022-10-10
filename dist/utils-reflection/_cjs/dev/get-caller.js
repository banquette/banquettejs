/*!
 * Banquette UtilsReflection v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var trim = require('@banquette/utils-string/_cjs/dev/format/trim');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');

/**
 * Try to get the function and class name of a certain index in the callstack.
 */
function getCaller(ignorePattern) {
    var e = new Error();
    if (!e.stack) {
        try {
            // IE requires the Error to actually be thrown or else the
            // Error's 'stack' property is undefined.
            throw e;
        }
        catch (e) {
            if (!e.stack) {
                return null; // IE < 10, likely
            }
        }
    }
    // @ts-ignore
    var stack = e.stack.toString().split(/\r\n|\n/);
    if (isArray.isArray(stack)) {
        for (var i = 1 /** ignore the first element of the stack */; i < stack.length; ++i) {
            var str = stack[i];
            var parenthesisPos = str.indexOf('(');
            if (parenthesisPos > 0 && isString.isString(str)) {
                str = str.substring(0, parenthesisPos);
            }
            var parts = str.split('.');
            if (parts.length >= 2) {
                parts = parts.splice(parts.length - 2, 2);
            }
            var result = trim.trim(parts.join(':').replace(/\s*at\s+/, ''));
            if (result.indexOf('getCallerName') < 0 && (isUndefined.isUndefined(ignorePattern) || !result.match(ignorePattern))) {
                return result;
            }
        }
    }
    return null;
}

exports.getCaller = getCaller;
