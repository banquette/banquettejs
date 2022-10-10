/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../../../_virtual/_tslib.js';
import { EventArg } from '@banquette/event/event-arg';

var BeforeLoadEventArg = /** @class */ (function (_super) {
    __extends(BeforeLoadEventArg, _super);
    function BeforeLoadEventArg(vm) {
        var _this = _super.call(this) || this;
        _this.vm = vm;
        return _this;
    }
    return BeforeLoadEventArg;
}(EventArg));

export { BeforeLoadEventArg };
