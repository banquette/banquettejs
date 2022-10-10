/*!
 * Banquette Storage v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { EventArg } from '@banquette/event/event-arg';

/**
 * Event emitted when the whole storage is cleared.
 */
var StorageClearEvent = /** @class */ (function (_super) {
    __extends(StorageClearEvent, _super);
    function StorageClearEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StorageClearEvent;
}(EventArg));

export { StorageClearEvent };
