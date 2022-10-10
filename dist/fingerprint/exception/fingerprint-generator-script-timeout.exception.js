/*!
 * Banquette Fingerprint v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { SystemException } from '@banquette/exception/system.exception';

/**
 * Thrown when the generator script failed to load.
 */
var FingerprintGeneratorScriptTimeoutException = /** @class */ (function (_super) {
    __extends(FingerprintGeneratorScriptTimeoutException, _super);
    function FingerprintGeneratorScriptTimeoutException() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.slug = 'fingerprint-generator-script-timeout';
        return _this;
    }
    return FingerprintGeneratorScriptTimeoutException;
}(SystemException));

export { FingerprintGeneratorScriptTimeoutException };
