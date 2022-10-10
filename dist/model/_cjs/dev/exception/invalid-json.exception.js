/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var system_exception = require('@banquette/exception/_cjs/dev/system.exception');

/**
 * Exception thrown when a JSON string failed to decode.
 */
var InvalidJsonException = /** @class */ (function (_super) {
    _tslib.__extends(InvalidJsonException, _super);
    function InvalidJsonException() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.slug = 'invalid-json';
        return _this;
    }
    return InvalidJsonException;
}(system_exception.SystemException));

exports.InvalidJsonException = InvalidJsonException;
