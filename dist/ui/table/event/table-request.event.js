/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../../_virtual/_tslib.js';
import { EventArg } from '@banquette/event/event-arg';

var TableRequestEvent = /** @class */ (function (_super) {
    __extends(TableRequestEvent, _super);
    function TableRequestEvent(result, state, httpEvent) {
        var _this = _super.call(this) || this;
        _this.result = result;
        _this.state = state;
        _this.httpEvent = httpEvent;
        return _this;
    }
    return TableRequestEvent;
}(EventArg));

export { TableRequestEvent };
