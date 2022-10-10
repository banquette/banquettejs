/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var computed_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/computed.decorator');
var themeable_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/themeable.decorator');
var bindTheme_directive = require('@banquette/vue-typescript/_cjs/dev/theme/bind-theme.directive');
require('../../popover/popover.component.vue.js');
var popover_directive = require('../../popover/popover.directive.js');
var abstractProgress_component = require('../abstract-progress.component.js');
var themeConfiguration = require('./theme-configuration.js');
var popover_component_vue_vue_type_script_lang = require('../../popover/popover.component.vue_vue_type_script_lang.vue.js');

var ProgressHorizontalComponent = /** @class */ (function (_super) {
    _tslib.__extends(ProgressHorizontalComponent, _super);
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
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", String),
        _tslib.__metadata("design:paramtypes", [])
    ], ProgressHorizontalComponent.prototype, "width", null);
    ProgressHorizontalComponent = _tslib.__decorate([
        themeable_decorator.Themeable(themeConfiguration.ThemeConfiguration),
        component_decorator.Component({
            name: 'bt-progress-horizontal',
            components: [popover_component_vue_vue_type_script_lang],
            directives: [popover_directive.PopoverDirective, bindTheme_directive.BindThemeDirective]
        })
    ], ProgressHorizontalComponent);
    return ProgressHorizontalComponent;
}(abstractProgress_component.AbstractProgressComponent));

module.exports = ProgressHorizontalComponent;
