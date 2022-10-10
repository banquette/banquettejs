/*!
 * Banquette Form v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { FormEvent } from './form-event.js';

var ValidationEndFormEvent = /** @class */ (function (_super) {
    __extends(ValidationEndFormEvent, _super);
    function ValidationEndFormEvent(source, result) {
        var _this = _super.call(this, source) || this;
        _this.result = result;
        return _this;
    }
    return ValidationEndFormEvent;
}(FormEvent));

export { ValidationEndFormEvent };
