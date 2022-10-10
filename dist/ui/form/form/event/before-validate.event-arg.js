/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../../../_virtual/_tslib.js';
import { EventArg } from '@banquette/event/event-arg';

var BeforeValidateEventArg = /** @class */ (function (_super) {
    __extends(BeforeValidateEventArg, _super);
    function BeforeValidateEventArg(source) {
        var _this = _super.call(this) || this;
        _this.source = source;
        return _this;
    }
    return BeforeValidateEventArg;
}(EventArg));

export { BeforeValidateEventArg };
