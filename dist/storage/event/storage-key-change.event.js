/*!
 * Banquette Storage v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { EventArg } from '@banquette/event/event-arg';

/**
 * Event emitted when a value changes in a storage.
 *
 * `newValue` should be `undefined` when the key is removed.
 * `oldValue` should be `undefined` when the key is new.
 */
var StorageKeyChangeEvent = /** @class */ (function (_super) {
    __extends(StorageKeyChangeEvent, _super);
    function StorageKeyChangeEvent(key, newValue, oldValue) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.newValue = newValue;
        _this.oldValue = oldValue;
        return _this;
    }
    return StorageKeyChangeEvent;
}(EventArg));

export { StorageKeyChangeEvent };
