/*!
 * Banquette ObjectObserver v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { EventArg } from '@banquette/event/event-arg';

var MutationEvent = /** @class */ (function (_super) {
    __extends(MutationEvent, _super);
    function MutationEvent(mutation) {
        var _this = _super.call(this) || this;
        _this.mutation = mutation;
        return _this;
    }
    return MutationEvent;
}(EventArg));

export { MutationEvent };
