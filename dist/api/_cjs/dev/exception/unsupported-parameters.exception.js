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
 * Exception thrown when parameters not defined in the endpoint's configuration have been given as input.
 */
var UnsupportedParametersException = /** @class */ (function (_super) {
    _tslib.__extends(UnsupportedParametersException, _super);
    function UnsupportedParametersException(parameters, message, previous, extra) {
        var _this = _super.call(this, message, previous, extra) || this;
        _this.parameters = parameters;
        _this.slug = 'unsupported-parameters';
        return _this;
    }
    return UnsupportedParametersException;
}(system_exception.SystemException));

exports.UnsupportedParametersException = UnsupportedParametersException;
