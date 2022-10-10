/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate } from '../../_virtual/_tslib.js';
import { Url } from '@banquette/validation/type/url';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { ValidatorComponent } from './validator.component.js';

var ValidateUrlComponent = /** @class */ (function (_super) {
    __extends(ValidateUrlComponent, _super);
    function ValidateUrlComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateUrlComponent.prototype.buildValidator = function () {
        return Url({ message: this.message, type: this.type, tags: this.tags, groups: this.groups });
    };
    ValidateUrlComponent = __decorate([
        Component({ name: 'bt-validate-url', template: false })
    ], ValidateUrlComponent);
    return ValidateUrlComponent;
}(ValidatorComponent));

export { ValidateUrlComponent as default };
