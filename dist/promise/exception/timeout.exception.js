/*!
 * Banquette Promise v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { SystemException } from '@banquette/exception/system.exception';

/**
 * Exception thrown to clearly notify an implementation is missing.
 */
var TimeoutException = /** @class */ (function (_super) {
    __extends(TimeoutException, _super);
    function TimeoutException(message) {
        if (message === void 0) { message = 'Timeout reached.'; }
        var _this = _super.call(this, message) || this;
        _this.slug = 'timeout';
        return _this;
    }
    return TimeoutException;
}(SystemException));

export { TimeoutException };
