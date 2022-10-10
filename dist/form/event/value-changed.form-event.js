/*!
 * Banquette Form v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { FormEvent } from './form-event.js';

var ValueChangedFormEvent = /** @class */ (function (_super) {
    __extends(ValueChangedFormEvent, _super);
    function ValueChangedFormEvent(source, oldValue, newValue) {
        var _this = _super.call(this, source) || this;
        _this.oldValue = oldValue;
        _this.newValue = newValue;
        return _this;
    }
    return ValueChangedFormEvent;
}(FormEvent));

export { ValueChangedFormEvent };
