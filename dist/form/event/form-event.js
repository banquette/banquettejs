/*!
 * Banquette Form v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { EventArg } from '@banquette/event/event-arg';

var FormEvent = /** @class */ (function (_super) {
    __extends(FormEvent, _super);
    function FormEvent(source) {
        var _this = _super.call(this) || this;
        _this.source = source;
        return _this;
    }
    return FormEvent;
}(EventArg));

export { FormEvent };
