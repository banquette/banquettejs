/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../../_virtual/_tslib.js';
import { EventArg } from '@banquette/event/event-arg';

var ThemeVariantEvent = /** @class */ (function (_super) {
    __extends(ThemeVariantEvent, _super);
    function ThemeVariantEvent(variant) {
        var _this = _super.call(this) || this;
        _this.variant = variant;
        return _this;
    }
    return ThemeVariantEvent;
}(EventArg));

export { ThemeVariantEvent };
