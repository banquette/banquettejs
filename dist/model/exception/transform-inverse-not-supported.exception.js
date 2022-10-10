/*!
 * Banquette Model v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { SystemException } from '@banquette/exception/system.exception';

/**
 * Exception thrown when the "transformInverse" method is called on a transformer that doesn't implement it.
 */
var TransformInverseNotSupportedException = /** @class */ (function (_super) {
    __extends(TransformInverseNotSupportedException, _super);
    function TransformInverseNotSupportedException(message, previous, extra) {
        if (message === void 0) { message = 'The "transformInverse" method is not available for this transformer.'; }
        var _this = _super.call(this, message, previous, extra) || this;
        _this.slug = 'transform-inverse-not-supported';
        return _this;
    }
    return TransformInverseNotSupportedException;
}(SystemException));

export { TransformInverseNotSupportedException };
