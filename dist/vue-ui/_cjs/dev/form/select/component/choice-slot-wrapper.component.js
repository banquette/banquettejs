/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../../_virtual/_tslib.js');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var provide_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/provide.decorator');
var render_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/render.decorator');
var vue$1 = require('@banquette/vue-typescript/_cjs/dev/vue');
var vue = require('vue');

var ChoiceSlotWrapperComponent = /** @class */ (function (_super) {
    _tslib.__extends(ChoiceSlotWrapperComponent, _super);
    function ChoiceSlotWrapperComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Renderless component, we forward the rendering to the default slot.
     */
    ChoiceSlotWrapperComponent.prototype.render = function (context) {
        return vue.renderSlot(context.$slots, 'default');
    };
    _tslib.__decorate([
        provide_decorator.Provide(),
        prop_decorator.Prop({ type: String, required: true }),
        _tslib.__metadata("design:type", String)
    ], ChoiceSlotWrapperComponent.prototype, "position", void 0);
    _tslib.__decorate([
        render_decorator.Render(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Object]),
        _tslib.__metadata("design:returntype", Object)
    ], ChoiceSlotWrapperComponent.prototype, "render", null);
    ChoiceSlotWrapperComponent = _tslib.__decorate([
        component_decorator.Component({
            name: 'choice-slot-wrapper',
            group: null // We don't want this component in the VueBuilder.
        })
    ], ChoiceSlotWrapperComponent);
    return ChoiceSlotWrapperComponent;
}(vue$1.Vue));

module.exports = ChoiceSlotWrapperComponent;
