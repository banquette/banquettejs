/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../_virtual/_tslib.js';
import { Max } from '@banquette/validation/type/max';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { ValidatorComponent } from './validator.component.js';

var ValidateMaxComponent = /** @class */ (function (_super) {
    __extends(ValidateMaxComponent, _super);
    function ValidateMaxComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateMaxComponent.prototype.buildValidator = function () {
        return Max(this.count, { treatAs: this.treatAs, message: this.message, type: this.type, tags: this.tags, groups: this.groups });
    };
    __decorate([
        Prop({ type: Number, required: true }),
        __metadata("design:type", Number)
    ], ValidateMaxComponent.prototype, "count", void 0);
    __decorate([
        Prop({ type: String, default: 'auto', transform: function (value) {
                if (['string', 'number', 'auto'].indexOf(value) < 0) {
                    return 'auto';
                }
                return value;
            } }),
        __metadata("design:type", String)
    ], ValidateMaxComponent.prototype, "treatAs", void 0);
    ValidateMaxComponent = __decorate([
        Component({ name: 'bt-validate-max', template: false })
    ], ValidateMaxComponent);
    return ValidateMaxComponent;
}(ValidatorComponent));

export { ValidateMaxComponent as default };
