/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var system_exception = require('@banquette/exception/_cjs/dev/system.exception');

/**
 * Exception thrown when a request fails at the network level
 * (like if the timeout is reached or if the request is canceled).
 *
 * More specific error types may extend this exception.
 */
var NetworkException = /** @class */ (function (_super) {
    _tslib.__extends(NetworkException, _super);
    function NetworkException(retryable, message, previous, extra) {
        if (message === void 0) { message = 'An error occurred during the transaction.'; }
        var _this = _super.call(this, message, previous, extra) || this;
        _this.retryable = retryable;
        _this.slug = 'network';
        return _this;
    }
    return NetworkException;
}(system_exception.SystemException));

exports.NetworkException = NetworkException;
