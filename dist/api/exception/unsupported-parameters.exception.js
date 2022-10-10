/*!
 * Banquette Api v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { SystemException } from '@banquette/exception/system.exception';

/**
 * Exception thrown when parameters not defined in the endpoint's configuration have been given as input.
 */
var UnsupportedParametersException = /** @class */ (function (_super) {
    __extends(UnsupportedParametersException, _super);
    function UnsupportedParametersException(parameters, message, previous, extra) {
        var _this = _super.call(this, message, previous, extra) || this;
        _this.parameters = parameters;
        _this.slug = 'unsupported-parameters';
        return _this;
    }
    return UnsupportedParametersException;
}(SystemException));

export { UnsupportedParametersException };
