/*!
 * Banquette Api v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { EventArg } from '@banquette/event/event-arg';

var ApiRequestEvent = /** @class */ (function (_super) {
    __extends(ApiRequestEvent, _super);
    function ApiRequestEvent(apiRequest, httpEvent) {
        var _this = _super.call(this) || this;
        _this.apiRequest = apiRequest;
        _this.httpEvent = httpEvent;
        return _this;
    }
    return ApiRequestEvent;
}(EventArg));

export { ApiRequestEvent };
