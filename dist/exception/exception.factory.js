/*!
 * Banquette Exception v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isObject } from '@banquette/utils-type/is-object';
import { isString } from '@banquette/utils-type/is-string';
import { Exception } from './exception.js';
import { UsageException } from './usage.exception.js';

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
        if (input instanceof Exception) {
            return input;
        }
        if (isString(input)) {
            return new UsageException(input, previous);
        }
        if (input instanceof Error) {
            return new UsageException(input.toString(), previous, { originalError: input, stack: input.stack });
        }
        if (isObject(input) && isString(input.message)) {
            return new UsageException(input.message, previous, { originalError: input });
        }
        return new UsageException(defaultMessage, previous);
    };
    return ExceptionFactory;
}());

export { ExceptionFactory };
