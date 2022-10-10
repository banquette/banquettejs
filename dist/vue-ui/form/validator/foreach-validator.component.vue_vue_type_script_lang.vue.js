/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../_virtual/_tslib.js';
import { UsageException } from '@banquette/exception/usage.exception';
import { Foreach } from '@banquette/validation/type/foreach';
import { Valid } from '@banquette/validation/type/valid';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Render } from '@banquette/vue-typescript/decorator/render.decorator';
import { renderSlot } from 'vue';
import { ContainerValidatorComponent } from './container-validator.component.js';

var ValidateForeachComponent = /** @class */ (function (_super) {
    __extends(ValidateForeachComponent, _super);
    function ValidateForeachComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateForeachComponent.prototype.buildValidator = function () {
        var children = this.children;
        if (children.length > 1) {
            throw new UsageException("\"validate-foreach\" can only have 1 child.");
        }
        if (children.length > 0) {
            return Foreach(children[0]);
        }
        return Valid();
    };
    ValidateForeachComponent.prototype.render = function (context) {
        return renderSlot(context.$slots, 'default');
    };
    __decorate([
        Render(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], ValidateForeachComponent.prototype, "render", null);
    ValidateForeachComponent = __decorate([
        Component('bt-validate-foreach')
    ], ValidateForeachComponent);
    return ValidateForeachComponent;
}(ContainerValidatorComponent));

export { ValidateForeachComponent as default };
