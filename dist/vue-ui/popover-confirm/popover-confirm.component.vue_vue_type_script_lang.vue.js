/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../_virtual/_tslib.js';
import { IconMaterialHelp } from '@banquette/vue-material-icons/help';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import { BindThemeDirective } from '@banquette/vue-typescript/theme/bind-theme.directive';
import { Vue } from '@banquette/vue-typescript/vue';
import '../dropdown/dropdown.component.vue.js';
import '../dropdown/dropdown-divider.component.vue.js';
import '../dropdown/dropdown-item.component.vue.js';
import { ThemeConfiguration } from './theme-configuration.js';
import DropdownComponent from '../dropdown/dropdown.component.vue_vue_type_script_lang.vue.js';

var PopoverConfirmComponent = /** @class */ (function (_super) {
    __extends(PopoverConfirmComponent, _super);
    function PopoverConfirmComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dropdownVisible = false;
        return _this;
    }
    PopoverConfirmComponent.prototype.showDropdown = function () {
        this.dropdownVisible = true;
    };
    /**
     * Confirm the action.
     */
    PopoverConfirmComponent.prototype.confirm = function () {
        this.dropdownVisible = false;
        this.$emit('confirm');
    };
    /**
     * Cancel the action.
     */
    PopoverConfirmComponent.prototype.cancel = function () {
        this.dropdownVisible = false;
        this.$emit('cancel');
    };
    __decorate([
        Prop({ type: String, default: 'icon-help' }),
        __metadata("design:type", String)
    ], PopoverConfirmComponent.prototype, "icon", void 0);
    __decorate([
        Prop({ type: String, default: 'Are you sure?' }),
        __metadata("design:type", String)
    ], PopoverConfirmComponent.prototype, "message", void 0);
    __decorate([
        Prop({ type: String, default: 'Yes' }),
        __metadata("design:type", String)
    ], PopoverConfirmComponent.prototype, "confirmText", void 0);
    __decorate([
        Prop({ type: String, default: 'No' }),
        __metadata("design:type", String)
    ], PopoverConfirmComponent.prototype, "cancelText", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Boolean)
    ], PopoverConfirmComponent.prototype, "dropdownVisible", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PopoverConfirmComponent.prototype, "showDropdown", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PopoverConfirmComponent.prototype, "confirm", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PopoverConfirmComponent.prototype, "cancel", null);
    PopoverConfirmComponent = __decorate([
        Themeable(ThemeConfiguration),
        Component({
            name: 'bt-popover-confirm',
            components: [DropdownComponent, IconMaterialHelp],
            directives: [BindThemeDirective],
            emits: ['confirm', 'cancel']
        })
    ], PopoverConfirmComponent);
    return PopoverConfirmComponent;
}(Vue));

export { PopoverConfirmComponent as default };
