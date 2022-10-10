/*!
 * Banquette Model v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { SystemException } from '@banquette/exception/system.exception';

/**
 * Exception thrown when a JSON string failed to decode.
 */
var InvalidJsonException = /** @class */ (function (_super) {
    __extends(InvalidJsonException, _super);
    function InvalidJsonException() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.slug = 'invalid-json';
        return _this;
    }
    return InvalidJsonException;
}(SystemException));

export { InvalidJsonException };
