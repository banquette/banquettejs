/*!
 * Banquette Fingerprint v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { SystemException } from '@banquette/exception/system.exception';

/**
 * Thrown after the generator script successfully loaded but cannot be exploited because of various possible reasons.
 */
var FingerprintGeneratorInvalidScriptException = /** @class */ (function (_super) {
    __extends(FingerprintGeneratorInvalidScriptException, _super);
    function FingerprintGeneratorInvalidScriptException() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.slug = 'fingerprint-generator-invalid-script';
        return _this;
    }
    return FingerprintGeneratorInvalidScriptException;
}(SystemException));

export { FingerprintGeneratorInvalidScriptException };
