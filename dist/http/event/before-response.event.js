/*!
 * Banquette Http v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { EventArg } from '@banquette/event/event-arg';

var BeforeResponseEvent = /** @class */ (function (_super) {
    __extends(BeforeResponseEvent, _super);
    function BeforeResponseEvent(response, request) {
        var _this = _super.call(this) || this;
        _this.response = response;
        _this.request = request;
        return _this;
    }
    return BeforeResponseEvent;
}(EventArg));

export { BeforeResponseEvent };
