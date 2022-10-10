/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../_virtual/_tslib.js';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Render } from '@banquette/vue-typescript/decorator/render.decorator';
import { Vue } from '@banquette/vue-typescript/vue';
import { renderSlot, openBlock, createElementBlock, createBlock, Teleport, createElementVNode } from 'vue';

var TeleportComponent = /** @class */ (function (_super) {
    __extends(TeleportComponent, _super);
    function TeleportComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wrapperId = '__bt-teleport-' + TeleportComponent_1.MaxId++;
        return _this;
    }
    TeleportComponent_1 = TeleportComponent;
    TeleportComponent.prototype.render = function (context) {
        if (this.disabled || !this.to) {
            return renderSlot(context.$slots, 'default');
        }
        return (openBlock(), createElementBlock('div', { id: this.wrapperId }, [
            (openBlock(), createBlock(Teleport, { to: context.to }, [
                createElementVNode('div', { 'data-teleported-from': this.wrapperId }, [
                    renderSlot(context.$slots, 'default')
                ], 8, ['data-teleported-from'])
            ], 8, ['to']))
        ], 8, ['id']));
    };
    var TeleportComponent_1;
    TeleportComponent.MaxId = 0;
    __decorate([
        Prop({ type: [Object, String], default: null }),
        __metadata("design:type", Object)
    ], TeleportComponent.prototype, "to", void 0);
    __decorate([
        Prop({ type: Boolean, default: false, required: true }),
        __metadata("design:type", Boolean)
    ], TeleportComponent.prototype, "disabled", void 0);
    __decorate([
        Render(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], TeleportComponent.prototype, "render", null);
    TeleportComponent = TeleportComponent_1 = __decorate([
        Component('bt-teleport')
    ], TeleportComponent);
    return TeleportComponent;
}(Vue));

export { TeleportComponent as default };
