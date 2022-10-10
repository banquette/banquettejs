/*!
 * Banquette Http v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { NetworkException } from './network.exception.js';

/**
 * Error thrown when a request is canceled before its completion.
 */
var RequestCanceledException = /** @class */ (function (_super) {
    __extends(RequestCanceledException, _super);
    function RequestCanceledException(message, previous, extra) {
        if (message === void 0) { message = 'Canceled.'; }
        return _super.call(this, false, message, previous, extra) || this;
    }
    return RequestCanceledException;
}(NetworkException));

export { RequestCanceledException };
