/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var expose_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/expose.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var themeable_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/themeable.decorator');
var watch_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/watch.decorator');
var bindTheme_directive = require('@banquette/vue-typescript/_cjs/dev/theme/bind-theme.directive');
var vue = require('@banquette/vue-typescript/_cjs/dev/vue');
require('../popover/popover.component.vue.js');
require('../popover/popover.directive.js');
require('./dropdown-divider.component.vue.js');
require('./dropdown-item.component.vue.js');
var themeConfiguration = require('./theme-configuration.js');
var dropdownItem_component_vue_vue_type_script_lang = require('./dropdown-item.component.vue_vue_type_script_lang.vue.js');
var dropdownDivider_component_vue_vue_type_script_lang = require('./dropdown-divider.component.vue_vue_type_script_lang.vue.js');
var popover_component_vue_vue_type_script_lang = require('../popover/popover.component.vue_vue_type_script_lang.vue.js');

var DropdownComponent = /** @class */ (function (_super) {
    _tslib.__extends(DropdownComponent, _super);
    function DropdownComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.realTarget = null;
        return _this;
    }
    DropdownComponent.prototype.onTargetChange = function () {
        this.realTarget = this.target ? this.target : this.$el.parentElement;
    };
    _tslib.__decorate([
        prop_decorator.Prop({ type: [Object, String], default: null }),
        _tslib.__metadata("design:type", Object)
    ], DropdownComponent.prototype, "target", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Object)
    ], DropdownComponent.prototype, "realTarget", void 0);
    _tslib.__decorate([
        watch_decorator.Watch('target', { immediate: watch_decorator.ImmediateStrategy.Mounted }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], DropdownComponent.prototype, "onTargetChange", null);
    DropdownComponent = _tslib.__decorate([
        themeable_decorator.Themeable(themeConfiguration.ThemeConfiguration),
        component_decorator.Component({
            name: 'bt-dropdown',
            directives: [bindTheme_directive.BindThemeDirective],
            components: [popover_component_vue_vue_type_script_lang, dropdownItem_component_vue_vue_type_script_lang, dropdownDivider_component_vue_vue_type_script_lang],
            inheritAttrs: false
        })
    ], DropdownComponent);
    return DropdownComponent;
}(vue.Vue));

module.exports = DropdownComponent;
