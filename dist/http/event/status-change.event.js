/*!
 * Banquette Http v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { RequestProgressEvent } from './request-progress.event.js';

/**
 * Separate type of event so it's easier to distinguish on the user side.
 */
var StatusChangeEvent = /** @class */ (function (_super) {
    __extends(StatusChangeEvent, _super);
    function StatusChangeEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StatusChangeEvent;
}(RequestProgressEvent));

export { StatusChangeEvent };
