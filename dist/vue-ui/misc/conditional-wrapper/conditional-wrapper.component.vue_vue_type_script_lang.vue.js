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
import { renderSlot, h } from 'vue';

var ConditionalWrapperComponent = /** @class */ (function (_super) {
    __extends(ConditionalWrapperComponent, _super);
    function ConditionalWrapperComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConditionalWrapperComponent.prototype.render = function (context) {
        if (!this.enabled) {
            return renderSlot(context.$slots, 'default');
        }
        return h(this.type);
    };
    __decorate([
        Prop({ type: String, default: 'div' }),
        __metadata("design:type", String)
    ], ConditionalWrapperComponent.prototype, "type", void 0);
    __decorate([
        Prop({ type: Boolean, required: true }),
        __metadata("design:type", Boolean)
    ], ConditionalWrapperComponent.prototype, "enabled", void 0);
    __decorate([
        Render(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], ConditionalWrapperComponent.prototype, "render", null);
    ConditionalWrapperComponent = __decorate([
        Component('bt-conditional-wrapper')
    ], ConditionalWrapperComponent);
    return ConditionalWrapperComponent;
}(Vue));

export { ConditionalWrapperComponent as default };
