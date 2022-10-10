/*!
 * Banquette Api v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { SystemException } from '@banquette/exception/system.exception';

/**
 * Exception thrown when an endpoint parameter fails to validate.
 */
var InvalidParameterException = /** @class */ (function (_super) {
    __extends(InvalidParameterException, _super);
    function InvalidParameterException(parameterName, message, previous, extra) {
        var _this = _super.call(this, message, previous, extra) || this;
        _this.parameterName = parameterName;
        _this.slug = 'invalid-parameter';
        return _this;
    }
    return InvalidParameterException;
}(SystemException));

export { InvalidParameterException };
