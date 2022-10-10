/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var render_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/render.decorator');
var vue$1 = require('@banquette/vue-typescript/_cjs/dev/vue');
var vue = require('vue');

var ConditionalWrapperComponent = /** @class */ (function (_super) {
    _tslib.__extends(ConditionalWrapperComponent, _super);
    function ConditionalWrapperComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConditionalWrapperComponent.prototype.render = function (context) {
        if (!this.enabled) {
            return vue.renderSlot(context.$slots, 'default');
        }
        return vue.h(this.type);
    };
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: 'div' }),
        _tslib.__metadata("design:type", String)
    ], ConditionalWrapperComponent.prototype, "type", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, required: true }),
        _tslib.__metadata("design:type", Boolean)
    ], ConditionalWrapperComponent.prototype, "enabled", void 0);
    _tslib.__decorate([
        render_decorator.Render(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Object]),
        _tslib.__metadata("design:returntype", Object)
    ], ConditionalWrapperComponent.prototype, "render", null);
    ConditionalWrapperComponent = _tslib.__decorate([
        component_decorator.Component('bt-conditional-wrapper')
    ], ConditionalWrapperComponent);
    return ConditionalWrapperComponent;
}(vue$1.Vue));

module.exports = ConditionalWrapperComponent;
