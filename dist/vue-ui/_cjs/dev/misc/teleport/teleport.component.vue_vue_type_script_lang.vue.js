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

var TeleportComponent = /** @class */ (function (_super) {
    _tslib.__extends(TeleportComponent, _super);
    function TeleportComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wrapperId = '__bt-teleport-' + TeleportComponent_1.MaxId++;
        return _this;
    }
    TeleportComponent_1 = TeleportComponent;
    TeleportComponent.prototype.render = function (context) {
        if (this.disabled || !this.to) {
            return vue.renderSlot(context.$slots, 'default');
        }
        return (vue.openBlock(), vue.createElementBlock('div', { id: this.wrapperId }, [
            (vue.openBlock(), vue.createBlock(vue.Teleport, { to: context.to }, [
                vue.createElementVNode('div', { 'data-teleported-from': this.wrapperId }, [
                    vue.renderSlot(context.$slots, 'default')
                ], 8, ['data-teleported-from'])
            ], 8, ['to']))
        ], 8, ['id']));
    };
    var TeleportComponent_1;
    TeleportComponent.MaxId = 0;
    _tslib.__decorate([
        prop_decorator.Prop({ type: [Object, String], default: null }),
        _tslib.__metadata("design:type", Object)
    ], TeleportComponent.prototype, "to", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false, required: true }),
        _tslib.__metadata("design:type", Boolean)
    ], TeleportComponent.prototype, "disabled", void 0);
    _tslib.__decorate([
        render_decorator.Render(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Object]),
        _tslib.__metadata("design:returntype", Object)
    ], TeleportComponent.prototype, "render", null);
    TeleportComponent = TeleportComponent_1 = _tslib.__decorate([
        component_decorator.Component('bt-teleport')
    ], TeleportComponent);
    return TeleportComponent;
}(vue$1.Vue));

module.exports = TeleportComponent;
