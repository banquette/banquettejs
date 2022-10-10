/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate } from '../../_virtual/_tslib.js';
import { NotEmpty } from '@banquette/validation/type/not-empty';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { ValidatorComponent } from './validator.component.js';

var ValidateNotEmptyComponent = /** @class */ (function (_super) {
    __extends(ValidateNotEmptyComponent, _super);
    function ValidateNotEmptyComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateNotEmptyComponent.prototype.buildValidator = function () {
        return NotEmpty({ message: this.message, type: this.type, tags: this.tags, groups: this.groups });
    };
    ValidateNotEmptyComponent = __decorate([
        Component({ name: 'bt-validate-not-empty', template: false })
    ], ValidateNotEmptyComponent);
    return ValidateNotEmptyComponent;
}(ValidatorComponent));

export { ValidateNotEmptyComponent as default };
