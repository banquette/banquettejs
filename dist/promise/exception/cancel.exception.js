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
var CancelException = /** @class */ (function (_super) {
    __extends(CancelException, _super);
    function CancelException(message) {
        if (message === void 0) { message = 'Canceled.'; }
        var _this = _super.call(this, message) || this;
        _this.slug = 'cancel';
        return _this;
    }
    return CancelException;
}(SystemException));

export { CancelException };
