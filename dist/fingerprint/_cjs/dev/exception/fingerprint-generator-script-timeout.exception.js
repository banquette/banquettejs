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
 * Thrown when the generator script failed to load.
 */
var FingerprintGeneratorScriptTimeoutException = /** @class */ (function (_super) {
    _tslib.__extends(FingerprintGeneratorScriptTimeoutException, _super);
    function FingerprintGeneratorScriptTimeoutException() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.slug = 'fingerprint-generator-script-timeout';
        return _this;
    }
    return FingerprintGeneratorScriptTimeoutException;
}(system_exception.SystemException));

exports.FingerprintGeneratorScriptTimeoutException = FingerprintGeneratorScriptTimeoutException;
