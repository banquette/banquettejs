/*!
 * Banquette Storage v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { SystemException } from '@banquette/exception/system.exception';

/**
 * Exception thrown when the browser doesn't support any of the registered adapters.
 */
var NoAdapterAvailableException = /** @class */ (function (_super) {
    __extends(NoAdapterAvailableException, _super);
    function NoAdapterAvailableException(message) {
        if (message === void 0) { message = 'None of the available storage adapters is supported by the current browser.'; }
        var _this = _super.call(this, message) || this;
        _this.slug = 'no-adapter-available';
        return _this;
    }
    return NoAdapterAvailableException;
}(SystemException));

export { NoAdapterAvailableException };
