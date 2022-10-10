/*!
 * Banquette Form v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { FormEvent } from './form-event.js';

var StateChangedFormEvent = /** @class */ (function (_super) {
    __extends(StateChangedFormEvent, _super);
    function StateChangedFormEvent(source, state, newValue) {
        var _this = _super.call(this, source) || this;
        _this.state = state;
        _this.newValue = newValue;
        return _this;
    }
    return StateChangedFormEvent;
}(FormEvent));

export { StateChangedFormEvent };
