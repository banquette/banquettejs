/*!
 * Banquette Fingerprint v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var system_exception = require('@banquette/exception/_cjs/dev/system.exception');

/**
 * Thrown after the generator script successfully loaded but cannot be exploited because of various possible reasons.
 */
var FingerprintGeneratorInvalidScriptException = /** @class */ (function (_super) {
    _tslib.__extends(FingerprintGeneratorInvalidScriptException, _super);
    function FingerprintGeneratorInvalidScriptException() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.slug = 'fingerprint-generator-invalid-script';
        return _this;
    }
    return FingerprintGeneratorInvalidScriptException;
}(system_exception.SystemException));

exports.FingerprintGeneratorInvalidScriptException = FingerprintGeneratorInvalidScriptException;
