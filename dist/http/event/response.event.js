/*!
 * Banquette Http v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { EventArg } from '@banquette/event/event-arg';

var ResponseEvent = /** @class */ (function (_super) {
    __extends(ResponseEvent, _super);
    function ResponseEvent(request, response) {
        var _this = _super.call(this) || this;
        _this.request = request;
        _this.response = response;
        return _this;
    }
    return ResponseEvent;
}(EventArg));

export { ResponseEvent };
