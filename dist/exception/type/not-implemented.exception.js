/*!
 * Banquette Exception v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { Exception } from '../exception.js';

/**
 * Exception thrown to clearly notify an implementation is missing.
 */
var NotImplementedException = /** @class */ (function (_super) {
    __extends(NotImplementedException, _super);
    function NotImplementedException(message) {
        if (message === void 0) { message = 'Not implemented.'; }
        var _this = _super.call(this, message) || this;
        _this.slug = 'not-implemented';
        return _this;
    }
    return NotImplementedException;
}(Exception));

export { NotImplementedException };
