/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../../_virtual/_tslib.js';
import { EventArg } from '@banquette/event/event-arg';

var ThemeComponentChangedEvent = /** @class */ (function (_super) {
    __extends(ThemeComponentChangedEvent, _super);
    function ThemeComponentChangedEvent(theme, componentName) {
        var _this = _super.call(this) || this;
        _this.theme = theme;
        _this.componentName = componentName;
        return _this;
    }
    return ThemeComponentChangedEvent;
}(EventArg));

export { ThemeComponentChangedEvent };
