/*!
 * Banquette Http v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { EventArg } from '@banquette/event/event-arg';

var NetworkAvailabilityChangeEvent = /** @class */ (function (_super) {
    __extends(NetworkAvailabilityChangeEvent, _super);
    function NetworkAvailabilityChangeEvent(available) {
        var _this = _super.call(this) || this;
        _this.available = available;
        return _this;
    }
    return NetworkAvailabilityChangeEvent;
}(EventArg));

export { NetworkAvailabilityChangeEvent };