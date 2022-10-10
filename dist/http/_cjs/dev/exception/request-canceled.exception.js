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
 * Error thrown when a request is canceled before its completion.
 */
var RequestCanceledException = /** @class */ (function (_super) {
    _tslib.__extends(RequestCanceledException, _super);
    function RequestCanceledException(message, previous, extra) {
        if (message === void 0) { message = 'Canceled.'; }
        return _super.call(this, false, message, previous, extra) || this;
    }
    return RequestCanceledException;
}(network_exception.NetworkException));

exports.RequestCanceledException = RequestCanceledException;
