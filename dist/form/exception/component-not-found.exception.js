/*!
 * Banquette Form v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { SystemException } from '@banquette/exception/system.exception';

/**
 * Exception thrown when a form component is not found in a group.
 */
var ComponentNotFoundException = /** @class */ (function (_super) {
    __extends(ComponentNotFoundException, _super);
    function ComponentNotFoundException(identifier, message, previous, extra) {
        var _this = _super.call(this, message, previous, extra) || this;
        _this.identifier = identifier;
        _this.slug = 'component-not-found';
        return _this;
    }
    return ComponentNotFoundException;
}(SystemException));

export { ComponentNotFoundException };
