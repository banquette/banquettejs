/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../../_virtual/_tslib.js';
import { EventArg } from '@banquette/event/event-arg';

var TableResponseEvent = /** @class */ (function (_super) {
    __extends(TableResponseEvent, _super);
    function TableResponseEvent(result, state, httpEvent) {
        var _this = _super.call(this) || this;
        _this.result = result;
        _this.state = state;
        _this.httpEvent = httpEvent;
        return _this;
    }
    return TableResponseEvent;
}(EventArg));

export { TableResponseEvent };
