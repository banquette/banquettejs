/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../_virtual/_tslib.js';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import { Watch, ImmediateStrategy } from '@banquette/vue-typescript/decorator/watch.decorator';
import { BindThemeDirective } from '@banquette/vue-typescript/theme/bind-theme.directive';
import { Vue } from '@banquette/vue-typescript/vue';
import '../popover/popover.component.vue.js';
import '../popover/popover.directive.js';
import './dropdown-divider.component.vue.js';
import './dropdown-item.component.vue.js';
import { ThemeConfiguration } from './theme-configuration.js';
import DropdownItemComponent from './dropdown-item.component.vue_vue_type_script_lang.vue.js';
import DropdownDividerComponent from './dropdown-divider.component.vue_vue_type_script_lang.vue.js';
import PopoverComponent from '../popover/popover.component.vue_vue_type_script_lang.vue.js';

var DropdownComponent = /** @class */ (function (_super) {
    __extends(DropdownComponent, _super);
    function DropdownComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.realTarget = null;
        return _this;
    }
    DropdownComponent.prototype.onTargetChange = function () {
        this.realTarget = this.target ? this.target : this.$el.parentElement;
    };
    __decorate([
        Prop({ type: [Object, String], default: null }),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "target", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "realTarget", void 0);
    __decorate([
        Watch('target', { immediate: ImmediateStrategy.Mounted }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownComponent.prototype, "onTargetChange", null);
    DropdownComponent = __decorate([
        Themeable(ThemeConfiguration),
        Component({
            name: 'bt-dropdown',
            directives: [BindThemeDirective],
            components: [PopoverComponent, DropdownItemComponent, DropdownDividerComponent],
            inheritAttrs: false
        })
    ], DropdownComponent);
    return DropdownComponent;
}(Vue));

export { DropdownComponent as default };
