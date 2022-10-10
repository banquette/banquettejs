/*!
 * Banquette Exception v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var exception = require('./exception.js');

/**
 * Exception to use for any error impossible to avoid.
 *
 * The class is abstract because you must create a custom type for the error so it can be caught
 * specifically to maybe execute some recovery logic.
 *
 * This kind of error should represent 10-20% of the exceptions thrown in your app.
 *
 * The message is not mandatory here because the type may be enough in most cases.
 * If the error should give a message to the end user you should use the `id` attribute as a key
 * in a map of messages (translated or not).
 *
 * @see Exception for more details
 */
var SystemException = /** @class */ (function (_super) {
    _tslib.__extends(SystemException, _super);
    function SystemException(message, previous, extra) {
        var _this = _super.call(this, message || 'Internal error', previous, extra) || this;
        _this.previous = previous;
        _this.extra = extra;
        return _this;
    }
    return SystemException;
}(exception.Exception));

exports.SystemException = SystemException;
