/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../_virtual/_tslib.js';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Computed } from '@banquette/vue-typescript/decorator/computed.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import { BindThemeDirective } from '@banquette/vue-typescript/theme/bind-theme.directive';
import '../../popover/popover.component.vue.js';
import { PopoverDirective } from '../../popover/popover.directive.js';
import { AbstractProgressComponent } from '../abstract-progress.component.js';
import { ThemeConfiguration } from './theme-configuration.js';
import PopoverComponent from '../../popover/popover.component.vue_vue_type_script_lang.vue.js';

var ProgressHorizontalComponent = /** @class */ (function (_super) {
    __extends(ProgressHorizontalComponent, _super);
    function ProgressHorizontalComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ProgressHorizontalComponent.prototype, "width", {
        get: function () {
            var p = this.progressPercent();
            return p !== null ? "".concat(p, "%") : '100%';
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Computed(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], ProgressHorizontalComponent.prototype, "width", null);
    ProgressHorizontalComponent = __decorate([
        Themeable(ThemeConfiguration),
        Component({
            name: 'bt-progress-horizontal',
            components: [PopoverComponent],
            directives: [PopoverDirective, BindThemeDirective]
        })
    ], ProgressHorizontalComponent);
    return ProgressHorizontalComponent;
}(AbstractProgressComponent));

export { ProgressHorizontalComponent as default };
