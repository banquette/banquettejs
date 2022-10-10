/*!
 * Banquette Form v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { FormEvent } from './form-event.js';

var ComponentRemovedFormEvent = /** @class */ (function (_super) {
    __extends(ComponentRemovedFormEvent, _super);
    function ComponentRemovedFormEvent(source, removed, identifier) {
        var _this = _super.call(this, source) || this;
        _this.removed = removed;
        _this.identifier = identifier;
        return _this;
    }
    return ComponentRemovedFormEvent;
}(FormEvent));

export { ComponentRemovedFormEvent };
