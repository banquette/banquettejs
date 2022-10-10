/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate } from '../../_virtual/_tslib.js';
import { Empty } from '@banquette/validation/type/empty';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { ValidatorComponent } from './validator.component.js';

var ValidateEmptyComponent = /** @class */ (function (_super) {
    __extends(ValidateEmptyComponent, _super);
    function ValidateEmptyComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateEmptyComponent.prototype.buildValidator = function () {
        return Empty({ message: this.message, type: this.type, tags: this.tags, groups: this.groups });
    };
    ValidateEmptyComponent = __decorate([
        Component({ name: 'bt-validate-empty', template: false })
    ], ValidateEmptyComponent);
    return ValidateEmptyComponent;
}(ValidatorComponent));

export { ValidateEmptyComponent as default };
