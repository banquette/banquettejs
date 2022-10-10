/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate } from '../../_virtual/_tslib.js';
import { Invalid } from '@banquette/validation/type/invalid';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { ValidatorComponent } from './validator.component.js';

var ValidateInvalidComponent = /** @class */ (function (_super) {
    __extends(ValidateInvalidComponent, _super);
    function ValidateInvalidComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateInvalidComponent.prototype.buildValidator = function () {
        return Invalid({ message: this.message, type: this.type, tags: this.tags, groups: this.groups });
    };
    ValidateInvalidComponent = __decorate([
        Component({ name: 'bt-validate-invalid', template: false })
    ], ValidateInvalidComponent);
    return ValidateInvalidComponent;
}(ValidatorComponent));

export { ValidateInvalidComponent as default };
