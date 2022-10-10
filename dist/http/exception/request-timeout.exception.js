/*!
 * Banquette Http v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { NetworkException } from './network.exception.js';

/**
 * Exception thrown when a request doesn't complete before the timeout.
 */
var RequestTimeoutException = /** @class */ (function (_super) {
    __extends(RequestTimeoutException, _super);
    function RequestTimeoutException(timeout, message, previous, extra) {
        if (message === void 0) { message = "Timeout reached (".concat(timeout, ")"); }
        var _this = _super.call(this, false, message, previous, extra) || this;
        _this.timeout = timeout;
        return _this;
    }
    return RequestTimeoutException;
}(NetworkException));

export { RequestTimeoutException };
