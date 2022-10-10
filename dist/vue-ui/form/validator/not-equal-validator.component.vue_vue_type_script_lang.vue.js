/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../_virtual/_tslib.js';
import { NotEqual } from '@banquette/validation/type/not-equal';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { ValidatorComponent } from './validator.component.js';

var ValidateNotEqualComponent = /** @class */ (function (_super) {
    __extends(ValidateNotEqualComponent, _super);
    function ValidateNotEqualComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateNotEqualComponent.prototype.buildValidator = function () {
        return NotEqual(this.value, this.strict, { message: this.message, type: this.type, tags: this.tags, groups: this.groups });
    };
    __decorate([
        Prop({ required: true }),
        __metadata("design:type", Object)
    ], ValidateNotEqualComponent.prototype, "value", void 0);
    __decorate([
        Prop({ type: Boolean, default: true }),
        __metadata("design:type", Boolean)
    ], ValidateNotEqualComponent.prototype, "strict", void 0);
    ValidateNotEqualComponent = __decorate([
        Component({ name: 'bt-validate-not-equal', template: false })
    ], ValidateNotEqualComponent);
    return ValidateNotEqualComponent;
}(ValidatorComponent));

export { ValidateNotEqualComponent as default };
