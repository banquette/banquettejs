/*!
 * Banquette Model v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { SystemException } from '@banquette/exception/system.exception';

/**
 * Exception thrown when no transformer have been found for a transform context.
 */
var NoCompatibleTransformerFoundException = /** @class */ (function (_super) {
    __extends(NoCompatibleTransformerFoundException, _super);
    function NoCompatibleTransformerFoundException(context, message, previous, extra) {
        var _this = _super.call(this, message, previous, extra) || this;
        _this.context = context;
        _this.slug = 'no-compatible-transformer-found';
        return _this;
    }
    return NoCompatibleTransformerFoundException;
}(SystemException));

export { NoCompatibleTransformerFoundException };
