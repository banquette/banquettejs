/*!
 * Banquette Http v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { SystemException } from '@banquette/exception/system.exception';

/**
 * Exception thrown when a request fails at the network level
 * (like if the timeout is reached or if the request is canceled).
 *
 * More specific error types may extend this exception.
 */
var NetworkException = /** @class */ (function (_super) {
    __extends(NetworkException, _super);
    function NetworkException(retryable, message, previous, extra) {
        if (message === void 0) { message = 'An error occurred during the transaction.'; }
        var _this = _super.call(this, message, previous, extra) || this;
        _this.retryable = retryable;
        _this.slug = 'network';
        return _this;
    }
    return NetworkException;
}(SystemException));

export { NetworkException };