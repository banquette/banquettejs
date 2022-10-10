/*!
 * Banquette Model v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { SystemException } from '@banquette/exception/system.exception';

/**
 * Exception thrown when any type of transform failed as the transform service level.
 */
var TransformFailedException = /** @class */ (function (_super) {
    __extends(TransformFailedException, _super);
    function TransformFailedException() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.slug = 'transform-failed';
        return _this;
    }
    return TransformFailedException;
}(SystemException));

export { TransformFailedException };
