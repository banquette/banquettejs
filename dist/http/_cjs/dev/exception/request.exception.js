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
 * Exception thrown when a request doesn't respond with a 2xx HTTP status code.
 *
 * This type of exception will only trigger if the transaction has been successful.
 * An error in the HTTP transaction will trigger a NetworkException instead.
 */
var RequestException = /** @class */ (function (_super) {
    _tslib.__extends(RequestException, _super);
    function RequestException() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.slug = 'request';
        return _this;
    }
    return RequestException;
}(system_exception.SystemException));

exports.RequestException = RequestException;
