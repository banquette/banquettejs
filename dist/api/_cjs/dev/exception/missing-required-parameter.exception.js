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
 * Exception thrown an api endpoint fails to generate an url because a required parameter is missing.
 */
var MissingRequiredParameterException = /** @class */ (function (_super) {
    _tslib.__extends(MissingRequiredParameterException, _super);
    function MissingRequiredParameterException(parameterName, message, previous, extra) {
        var _this = _super.call(this, message || "The parameter \"".concat(parameterName, "\" is required."), previous, extra) || this;
        _this.parameterName = parameterName;
        _this.slug = 'missing-required-parameter';
        return _this;
    }
    return MissingRequiredParameterException;
}(system_exception.SystemException));

exports.MissingRequiredParameterException = MissingRequiredParameterException;
