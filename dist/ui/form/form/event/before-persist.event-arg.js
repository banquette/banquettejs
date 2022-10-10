/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../../../_virtual/_tslib.js';
import { EventArg } from '@banquette/event/event-arg';

var BeforePersistEventArg = /** @class */ (function (_super) {
    __extends(BeforePersistEventArg, _super);
    function BeforePersistEventArg(payload) {
        var _this = _super.call(this) || this;
        _this.payload = payload;
        return _this;
    }
    return BeforePersistEventArg;
}(EventArg));

export { BeforePersistEventArg };
