/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../../_virtual/_tslib.js';
import { SystemException } from '@banquette/exception/system.exception';

/**
 * Thrown when the response from the server doesn't match what is expected by the list in the current configuration.
 */
var InvalidServerResponseException = /** @class */ (function (_super) {
    __extends(InvalidServerResponseException, _super);
    function InvalidServerResponseException() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.slug = 'invalid-server-response';
        return _this;
    }
    return InvalidServerResponseException;
}(SystemException));

export { InvalidServerResponseException };
