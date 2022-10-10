/*!
 * Banquette ObjectObserver v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { EventArg } from '@banquette/event/event-arg';

var MutationsCollectionEvent = /** @class */ (function (_super) {
    __extends(MutationsCollectionEvent, _super);
    function MutationsCollectionEvent(mutations) {
        var _this = _super.call(this) || this;
        _this.mutations = mutations;
        return _this;
    }
    return MutationsCollectionEvent;
}(EventArg));

export { MutationsCollectionEvent };
