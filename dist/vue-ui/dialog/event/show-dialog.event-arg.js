/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../../_virtual/_tslib.js';
import { EventArg } from '@banquette/event/event-arg';

var ShowDialogEventArg = /** @class */ (function (_super) {
    __extends(ShowDialogEventArg, _super);
    function ShowDialogEventArg(id, args) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.args = args;
        return _this;
    }
    return ShowDialogEventArg;
}(EventArg));

export { ShowDialogEventArg };
