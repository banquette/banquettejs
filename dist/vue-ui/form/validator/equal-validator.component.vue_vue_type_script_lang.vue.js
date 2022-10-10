/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../_virtual/_tslib.js';
import { Equal } from '@banquette/validation/type/equal';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { ValidatorComponent } from './validator.component.js';

var ValidateEqualComponent = /** @class */ (function (_super) {
    __extends(ValidateEqualComponent, _super);
    function ValidateEqualComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateEqualComponent.prototype.buildValidator = function () {
        return Equal(this.value, this.strict, { message: this.message, type: this.type, tags: this.tags, groups: this.groups });
    };
    __decorate([
        Prop({ required: true }),
        __metadata("design:type", Object)
    ], ValidateEqualComponent.prototype, "value", void 0);
    __decorate([
        Prop({ type: Boolean, default: true }),
        __metadata("design:type", Boolean)
    ], ValidateEqualComponent.prototype, "strict", void 0);
    ValidateEqualComponent = __decorate([
        Component({ name: 'bt-validate-equal', template: false })
    ], ValidateEqualComponent);
    return ValidateEqualComponent;
}(ValidatorComponent));

export { ValidateEqualComponent as default };
