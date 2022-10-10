/*!
 * Banquette Api v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { SystemException } from '@banquette/exception/system.exception';

/**
 * Exception thrown an api endpoint fails to generate an url because a required parameter is missing.
 */
var MissingRequiredParameterException = /** @class */ (function (_super) {
    __extends(MissingRequiredParameterException, _super);
    function MissingRequiredParameterException(parameterName, message, previous, extra) {
        var _this = _super.call(this, message || "The parameter \"".concat(parameterName, "\" is required."), previous, extra) || this;
        _this.parameterName = parameterName;
        _this.slug = 'missing-required-parameter';
        return _this;
    }
    return MissingRequiredParameterException;
}(SystemException));

export { MissingRequiredParameterException };
