/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../../_virtual/_tslib.js';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Provide } from '@banquette/vue-typescript/decorator/provide.decorator';
import { Render } from '@banquette/vue-typescript/decorator/render.decorator';
import { Vue } from '@banquette/vue-typescript/vue';
import { renderSlot } from 'vue';

var ChoiceSlotWrapperComponent = /** @class */ (function (_super) {
    __extends(ChoiceSlotWrapperComponent, _super);
    function ChoiceSlotWrapperComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Renderless component, we forward the rendering to the default slot.
     */
    ChoiceSlotWrapperComponent.prototype.render = function (context) {
        return renderSlot(context.$slots, 'default');
    };
    __decorate([
        Provide(),
        Prop({ type: String, required: true }),
        __metadata("design:type", String)
    ], ChoiceSlotWrapperComponent.prototype, "position", void 0);
    __decorate([
        Render(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], ChoiceSlotWrapperComponent.prototype, "render", null);
    ChoiceSlotWrapperComponent = __decorate([
        Component({
            name: 'choice-slot-wrapper',
            group: null // We don't want this component in the VueBuilder.
        })
    ], ChoiceSlotWrapperComponent);
    return ChoiceSlotWrapperComponent;
}(Vue));

export { ChoiceSlotWrapperComponent as default };
