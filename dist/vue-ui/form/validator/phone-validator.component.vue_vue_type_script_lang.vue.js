/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate } from '../../_virtual/_tslib.js';
import { Phone } from '@banquette/validation/type/phone';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { ValidatorComponent } from './validator.component.js';

var ValidatePhoneComponent = /** @class */ (function (_super) {
    __extends(ValidatePhoneComponent, _super);
    function ValidatePhoneComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidatePhoneComponent.prototype.buildValidator = function () {
        return Phone({ message: this.message, type: this.type, tags: this.tags, groups: this.groups });
    };
    ValidatePhoneComponent = __decorate([
        Component({ name: 'bt-validate-phone', template: false })
    ], ValidatePhoneComponent);
    return ValidatePhoneComponent;
}(ValidatorComponent));

export { ValidatePhoneComponent as default };
