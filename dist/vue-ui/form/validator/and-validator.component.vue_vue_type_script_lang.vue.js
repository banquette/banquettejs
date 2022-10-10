/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../_virtual/_tslib.js';
import { And } from '@banquette/validation/type/and';
import { Valid } from '@banquette/validation/type/valid';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Render } from '@banquette/vue-typescript/decorator/render.decorator';
import { renderSlot } from 'vue';
import { ContainerValidatorComponent } from './container-validator.component.js';

var ValidateAndComponent = /** @class */ (function (_super) {
    __extends(ValidateAndComponent, _super);
    function ValidateAndComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateAndComponent.prototype.buildValidator = function () {
        var children = this.children;
        if (children.length > 0) {
            return And.apply(null, children);
        }
        return Valid();
    };
    ValidateAndComponent.prototype.render = function (context) {
        return renderSlot(context.$slots, 'default');
    };
    __decorate([
        Render(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], ValidateAndComponent.prototype, "render", null);
    ValidateAndComponent = __decorate([
        Component('bt-validate-and')
    ], ValidateAndComponent);
    return ValidateAndComponent;
}(ContainerValidatorComponent));

export { ValidateAndComponent as default };
