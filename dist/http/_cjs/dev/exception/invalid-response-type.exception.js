/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var request_exception = require('./request.exception.js');

/**
 * Exception thrown when the response returned by the server
 * doesn't match what was expected by the client.
 */
var InvalidResponseTypeException = /** @class */ (function (_super) {
    _tslib.__extends(InvalidResponseTypeException, _super);
    function InvalidResponseTypeException(request, message, previous, extra) {
        var _this = _super.call(this, message, previous, extra) || this;
        _this.request = request;
        return _this;
    }
    return InvalidResponseTypeException;
}(request_exception.RequestException));

exports.InvalidResponseTypeException = InvalidResponseTypeException;
