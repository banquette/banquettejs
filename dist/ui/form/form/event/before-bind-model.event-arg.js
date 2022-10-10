/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../../../_virtual/_tslib.js';
import { EventArg } from '@banquette/event/event-arg';

var BeforeBindModelEventArg = /** @class */ (function (_super) {
    __extends(BeforeBindModelEventArg, _super);
    function BeforeBindModelEventArg(model) {
        var _this = _super.call(this) || this;
        _this.model = model;
        return _this;
    }
    return BeforeBindModelEventArg;
}(EventArg));

export { BeforeBindModelEventArg };
