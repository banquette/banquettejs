/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var computed_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/computed.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var themeVar_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/theme-var.decorator');
var themeable_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/themeable.decorator');
var watch_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/watch.decorator');
var bindTheme_directive = require('@banquette/vue-typescript/_cjs/dev/theme/bind-theme.directive');
var vue = require('@banquette/vue-typescript/_cjs/dev/vue');
var themeConfiguration = require('./theme-configuration.js');

var OverlayComponent = /** @class */ (function (_super) {
    _tslib.__extends(OverlayComponent, _super);
    function OverlayComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.zIndexIncrement = 0;
        return _this;
    }
    OverlayComponent_1 = OverlayComponent;
    Object.defineProperty(OverlayComponent.prototype, "zIndex", {
        get: function () {
            return this.zIndexCssVar + this.zIndexIncrement;
        },
        enumerable: false,
        configurable: true
    });
    OverlayComponent.prototype.unmounted = function () {
        --OverlayComponent_1.zIndexIncrement;
    };
    OverlayComponent.prototype.onVisibilityChange = function () {
        if (this.visible) {
            this.zIndexIncrement = ++OverlayComponent_1.zIndexIncrement;
        }
        else {
            --OverlayComponent_1.zIndexIncrement;
        }
    };
    var OverlayComponent_1;
    OverlayComponent.zIndexIncrement = 0;
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: 'fixed', transform: function (value) { return value === 'absolute' ? value : 'fixed'; } }),
        _tslib.__metadata("design:type", String)
    ], OverlayComponent.prototype, "position", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: true }),
        _tslib.__metadata("design:type", Boolean)
    ], OverlayComponent.prototype, "visible", void 0);
    _tslib.__decorate([
        themeVar_decorator.ThemeVar({ name: 'overlay-z-index', defaultValue: 2000 }),
        _tslib.__metadata("design:type", Number)
    ], OverlayComponent.prototype, "zIndexCssVar", void 0);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Number),
        _tslib.__metadata("design:paramtypes", [])
    ], OverlayComponent.prototype, "zIndex", null);
    _tslib.__decorate([
        watch_decorator.Watch('visible', { immediate: watch_decorator.ImmediateStrategy.BeforeMount }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], OverlayComponent.prototype, "onVisibilityChange", null);
    OverlayComponent = OverlayComponent_1 = _tslib.__decorate([
        themeable_decorator.Themeable(themeConfiguration.ThemeConfiguration),
        component_decorator.Component({
            name: 'bt-overlay',
            directives: [bindTheme_directive.BindThemeDirective],
            emits: ['update:visible']
        })
    ], OverlayComponent);
    return OverlayComponent;
}(vue.Vue));

module.exports = OverlayComponent;
