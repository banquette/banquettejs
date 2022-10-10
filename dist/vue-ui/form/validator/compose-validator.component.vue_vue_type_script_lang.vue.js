/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../_virtual/_tslib.js';
import { Compose } from '@banquette/validation/type/compose';
import { Valid } from '@banquette/validation/type/valid';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Render } from '@banquette/vue-typescript/decorator/render.decorator';
import { renderSlot } from 'vue';
import { ContainerValidatorComponent } from './container-validator.component.js';

var ValidateComposeComponent = /** @class */ (function (_super) {
    __extends(ValidateComposeComponent, _super);
    function ValidateComposeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateComposeComponent.prototype.buildValidator = function () {
        var children = this.children;
        if (children.length > 0) {
            return Compose.apply(null, children);
        }
        return Valid();
    };
    ValidateComposeComponent.prototype.render = function (context) {
        return renderSlot(context.$slots, 'default');
    };
    __decorate([
        Render(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], ValidateComposeComponent.prototype, "render", null);
    ValidateComposeComponent = __decorate([
        Component('bt-validate-compose')
    ], ValidateComposeComponent);
    return ValidateComposeComponent;
}(ContainerValidatorComponent));

export { ValidateComposeComponent as default };
