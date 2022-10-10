/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../../../_virtual/_tslib.js';
import { EventArg } from '@banquette/event/event-arg';

var AfterBindModelEventArg = /** @class */ (function (_super) {
    __extends(AfterBindModelEventArg, _super);
    function AfterBindModelEventArg(model, binder) {
        var _this = _super.call(this) || this;
        _this.model = model;
        _this.binder = binder;
        return _this;
    }
    return AfterBindModelEventArg;
}(EventArg));

export { AfterBindModelEventArg };
