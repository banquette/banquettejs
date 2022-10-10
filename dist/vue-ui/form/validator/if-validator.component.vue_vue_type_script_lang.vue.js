/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../_virtual/_tslib.js';
import { UsageException } from '@banquette/exception/usage.exception';
import { If } from '@banquette/validation/type/if';
import { Valid } from '@banquette/validation/type/valid';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Render } from '@banquette/vue-typescript/decorator/render.decorator';
import { renderSlot } from 'vue';
import { ContainerValidatorComponent } from './container-validator.component.js';

var ValidateIfComponent = /** @class */ (function (_super) {
    __extends(ValidateIfComponent, _super);
    function ValidateIfComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateIfComponent.prototype.buildValidator = function () {
        var children = this.children;
        if (children.length > 1) {
            throw new UsageException("\"validate-if\" can only have 1 child.");
        }
        if (children.length > 0) {
            return If(this.condition, children[0]);
        }
        return Valid();
    };
    ValidateIfComponent.prototype.render = function (context) {
        return renderSlot(context.$slots, 'default');
    };
    __decorate([
        Prop({ type: Function, required: true }),
        __metadata("design:type", Function)
    ], ValidateIfComponent.prototype, "condition", void 0);
    __decorate([
        Render(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], ValidateIfComponent.prototype, "render", null);
    ValidateIfComponent = __decorate([
        Component('bt-validate-if')
    ], ValidateIfComponent);
    return ValidateIfComponent;
}(ContainerValidatorComponent));

export { ValidateIfComponent as default };
