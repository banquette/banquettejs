/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../_virtual/_tslib.js';
import { SameAs } from '@banquette/validation/type/same-as';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { ValidatorComponent } from './validator.component.js';

var ValidateSameAsComponent = /** @class */ (function (_super) {
    __extends(ValidateSameAsComponent, _super);
    function ValidateSameAsComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateSameAsComponent.prototype.buildValidator = function () {
        return SameAs(this.path, { message: this.message, type: this.type, tags: this.tags, groups: this.groups });
    };
    __decorate([
        Prop({ type: String, required: true }),
        __metadata("design:type", String)
    ], ValidateSameAsComponent.prototype, "path", void 0);
    ValidateSameAsComponent = __decorate([
        Component({ name: 'bt-validate-same-as', template: false })
    ], ValidateSameAsComponent);
    return ValidateSameAsComponent;
}(ValidatorComponent));

export { ValidateSameAsComponent as default };
