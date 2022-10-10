/*!
 * Banquette Form v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { FormEvent } from './form-event.js';

var ErrorsChangedFormEvent = /** @class */ (function (_super) {
    __extends(ErrorsChangedFormEvent, _super);
    function ErrorsChangedFormEvent(source, errors) {
        var _this = _super.call(this, source) || this;
        _this.errors = errors;
        return _this;
    }
    return ErrorsChangedFormEvent;
}(FormEvent));

export { ErrorsChangedFormEvent };
