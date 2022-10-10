/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var network_exception = require('./network.exception.js');

/**
 * Exception thrown when a request doesn't complete before the timeout.
 */
var RequestTimeoutException = /** @class */ (function (_super) {
    _tslib.__extends(RequestTimeoutException, _super);
    function RequestTimeoutException(timeout, message, previous, extra) {
        if (message === void 0) { message = "Timeout reached (".concat(timeout, ")"); }
        var _this = _super.call(this, false, message, previous, extra) || this;
        _this.timeout = timeout;
        return _this;
    }
    return RequestTimeoutException;
}(network_exception.NetworkException));

exports.RequestTimeoutException = RequestTimeoutException;
