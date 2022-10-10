/*!
 * Banquette Http v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { RequestException } from './request.exception.js';

/**
 * Special kind of RequestException thrown when the response returns a status 401 or 403.
 */
var AuthenticationException = /** @class */ (function (_super) {
    __extends(AuthenticationException, _super);
    function AuthenticationException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AuthenticationException;
}(RequestException));

export { AuthenticationException };
