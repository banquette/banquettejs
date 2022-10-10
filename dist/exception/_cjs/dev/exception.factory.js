/*!
 * Banquette Exception v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var exception = require('./exception.js');
var usage_exception = require('./usage.exception.js');

var ExceptionFactory = /** @class */ (function () {
    function ExceptionFactory() {
    }
    /**
     * Create a AppError instance from a mixed input.
     * Input can be:
     *   - a string
     *   - an Error object
     *   - an Exception object
     *   - a plain object containing a "message" key
     *
     * If the input is not an exception, we will consider it a UsageException by default
     * because Exception and SystemException are abstract.
     */
    ExceptionFactory.EnsureException = function (input, defaultMessage, previous) {
        if (defaultMessage === void 0) { defaultMessage = 'Unknown error'; }
        if (input instanceof exception.Exception) {
            return input;
        }
        if (isString.isString(input)) {
            return new usage_exception.UsageException(input, previous);
        }
        if (input instanceof Error) {
            return new usage_exception.UsageException(input.toString(), previous, { originalError: input, stack: input.stack });
        }
        if (isObject.isObject(input) && isString.isString(input.message)) {
            return new usage_exception.UsageException(input.message, previous, { originalError: input });
        }
        return new usage_exception.UsageException(defaultMessage, previous);
    };
    return ExceptionFactory;
}());

exports.ExceptionFactory = ExceptionFactory;
