/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var help = require('@banquette/vue-material-icons/_cjs/dev/help');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var expose_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/expose.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var themeable_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/themeable.decorator');
var bindTheme_directive = require('@banquette/vue-typescript/_cjs/dev/theme/bind-theme.directive');
var vue = require('@banquette/vue-typescript/_cjs/dev/vue');
require('../dropdown/dropdown.component.vue.js');
require('../dropdown/dropdown-divider.component.vue.js');
require('../dropdown/dropdown-item.component.vue.js');
var themeConfiguration = require('./theme-configuration.js');
var dropdown_component_vue_vue_type_script_lang = require('../dropdown/dropdown.component.vue_vue_type_script_lang.vue.js');

var PopoverConfirmComponent = /** @class */ (function (_super) {
    _tslib.__extends(PopoverConfirmComponent, _super);
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
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: 'icon-help' }),
        _tslib.__metadata("design:type", String)
    ], PopoverConfirmComponent.prototype, "icon", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: 'Are you sure?' }),
        _tslib.__metadata("design:type", String)
    ], PopoverConfirmComponent.prototype, "message", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: 'Yes' }),
        _tslib.__metadata("design:type", String)
    ], PopoverConfirmComponent.prototype, "confirmText", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: 'No' }),
        _tslib.__metadata("design:type", String)
    ], PopoverConfirmComponent.prototype, "cancelText", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Boolean)
    ], PopoverConfirmComponent.prototype, "dropdownVisible", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], PopoverConfirmComponent.prototype, "showDropdown", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], PopoverConfirmComponent.prototype, "confirm", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], PopoverConfirmComponent.prototype, "cancel", null);
    PopoverConfirmComponent = _tslib.__decorate([
        themeable_decorator.Themeable(themeConfiguration.ThemeConfiguration),
        component_decorator.Component({
            name: 'bt-popover-confirm',
            components: [dropdown_component_vue_vue_type_script_lang, help.IconMaterialHelp],
            directives: [bindTheme_directive.BindThemeDirective],
            emits: ['confirm', 'cancel']
        })
    ], PopoverConfirmComponent);
    return PopoverConfirmComponent;
}(vue.Vue));

module.exports = PopoverConfirmComponent;
