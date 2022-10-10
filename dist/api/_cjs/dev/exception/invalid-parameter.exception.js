/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var system_exception = require('@banquette/exception/_cjs/dev/system.exception');

/**
 * Exception thrown when an endpoint parameter fails to validate.
 */
var InvalidParameterException = /** @class */ (function (_super) {
    _tslib.__extends(InvalidParameterException, _super);
    function InvalidParameterException(parameterName, message, previous, extra) {
        var _this = _super.call(this, message, previous, extra) || this;
        _this.parameterName = parameterName;
        _this.slug = 'invalid-parameter';
        return _this;
    }
    return InvalidParameterException;
}(system_exception.SystemException));

exports.InvalidParameterException = InvalidParameterException;
