/*!
 * Banquette Form v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { FormEvent } from './form-event.js';

var BeforeValueChangeFormEvent = /** @class */ (function (_super) {
    __extends(BeforeValueChangeFormEvent, _super);
    function BeforeValueChangeFormEvent(source, oldValue, newValue) {
        var _this = _super.call(this, source) || this;
        _this.oldValue = oldValue;
        _this.newValue = newValue;
        _this.changeAccepted = true;
        return _this;
    }
    /**
     * Refuse the change and keep the old value.
     */
    BeforeValueChangeFormEvent.prototype.refuse = function () {
        this.changeAccepted = false;
    };
    return BeforeValueChangeFormEvent;
}(FormEvent));

export { BeforeValueChangeFormEvent };
