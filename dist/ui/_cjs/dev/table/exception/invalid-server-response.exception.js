/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var system_exception = require('@banquette/exception/_cjs/dev/system.exception');

/**
 * Thrown when the response from the server doesn't match what is expected by the list in the current configuration.
 */
var InvalidServerResponseException = /** @class */ (function (_super) {
    _tslib.__extends(InvalidServerResponseException, _super);
    function InvalidServerResponseException() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.slug = 'invalid-server-response';
        return _this;
    }
    return InvalidServerResponseException;
}(system_exception.SystemException));

exports.InvalidServerResponseException = InvalidServerResponseException;
