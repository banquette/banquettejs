/*!
 * Banquette Http v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { EventArg } from '@banquette/event/event-arg';

var RequestEvent = /** @class */ (function (_super) {
    __extends(RequestEvent, _super);
    function RequestEvent(request) {
        var _this = _super.call(this) || this;
        _this.request = request;
        return _this;
    }
    return RequestEvent;
}(EventArg));

export { RequestEvent };
