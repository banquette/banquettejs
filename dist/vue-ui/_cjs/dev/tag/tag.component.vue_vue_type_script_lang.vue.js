/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var close = require('@banquette/vue-material-icons/_cjs/dev/close');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var computed_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/computed.decorator');
var expose_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/expose.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var themeable_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/themeable.decorator');
var bindTheme_directive = require('@banquette/vue-typescript/_cjs/dev/theme/bind-theme.directive');
var vue = require('@banquette/vue-typescript/_cjs/dev/vue');
var themeConfiguration = require('./theme-configuration.js');

var TagComponent = /** @class */ (function (_super) {
    _tslib.__extends(TagComponent, _super);
    function TagComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TagComponent.prototype, "tagName", {
        get: function () {
            return this.href !== null ? 'a' : 'span';
        },
        enumerable: false,
        configurable: true
    });
    TagComponent.prototype.close = function () {
        this.$emit('close');
    };
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], TagComponent.prototype, "href", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], TagComponent.prototype, "target", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], TagComponent.prototype, "closable", void 0);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", String),
        _tslib.__metadata("design:paramtypes", [])
    ], TagComponent.prototype, "tagName", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], TagComponent.prototype, "close", null);
    TagComponent = _tslib.__decorate([
        themeable_decorator.Themeable(themeConfiguration.ThemeConfiguration),
        component_decorator.Component({
            name: 'bt-tag',
            components: [close.IconMaterialClose],
            directives: [bindTheme_directive.BindThemeDirective],
            emits: ['close']
        })
    ], TagComponent);
    return TagComponent;
}(vue.Vue));

module.exports = TagComponent;
