/*!
 * Banquette Event v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate } from './_virtual/_tslib.js';
import { Service } from '@banquette/dependency-injection/decorator/service.decorator';
import { EventDispatcher } from './event-dispatcher.js';

var EventDispatcherService = /** @class */ (function (_super) {
    __extends(EventDispatcherService, _super);
    function EventDispatcherService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventDispatcherService = __decorate([
        Service()
    ], EventDispatcherService);
    return EventDispatcherService;
}(EventDispatcher));

export { EventDispatcherService };
