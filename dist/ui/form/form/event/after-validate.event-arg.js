/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../../../_virtual/_tslib.js';
import { EventArg } from '@banquette/event/event-arg';

var AfterValidateEventArg = /** @class */ (function (_super) {
    __extends(AfterValidateEventArg, _super);
    function AfterValidateEventArg(source, result) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.result = result;
        return _this;
    }
    return AfterValidateEventArg;
}(EventArg));

export { AfterValidateEventArg };
