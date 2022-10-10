/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate } from '../../_virtual/_tslib.js';
import { Email } from '@banquette/validation/type/email';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { ValidatorComponent } from './validator.component.js';

var ValidateEmailComponent = /** @class */ (function (_super) {
    __extends(ValidateEmailComponent, _super);
    function ValidateEmailComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateEmailComponent.prototype.buildValidator = function () {
        return Email({ message: this.message, type: this.type, tags: this.tags, groups: this.groups });
    };
    ValidateEmailComponent = __decorate([
        Component({ name: 'bt-validate-email', template: false })
    ], ValidateEmailComponent);
    return ValidateEmailComponent;
}(ValidatorComponent));

export { ValidateEmailComponent as default };
