/*!
 * Banquette Api v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { SystemException } from '@banquette/exception/system.exception';

/**
 * Exception thrown when an endpoint name cannot be found.
 */
var EndpointNotFoundException = /** @class */ (function (_super) {
    __extends(EndpointNotFoundException, _super);
    function EndpointNotFoundException(name, message, previous, extra) {
        var _this = _super.call(this, message, previous, extra) || this;
        _this.name = name;
        _this.slug = 'endpoint-not-found';
        return _this;
    }
    return EndpointNotFoundException;
}(SystemException));

export { EndpointNotFoundException };
