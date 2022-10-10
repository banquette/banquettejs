/*!
 * Banquette Exception v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { SystemException } from '../system.exception.js';

/**
 * Exception thrown when an error relative to reading/writing files occurs.
 */
var IOException = /** @class */ (function (_super) {
    __extends(IOException, _super);
    function IOException() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.slug = 'io';
        return _this;
    }
    return IOException;
}(SystemException));

export { IOException };
