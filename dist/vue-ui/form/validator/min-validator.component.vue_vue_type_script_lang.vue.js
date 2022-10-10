/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../_virtual/_tslib.js';
import { ensureNumber } from '@banquette/utils-type/ensure-number';
import { Min } from '@banquette/validation/type/min';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { ValidatorComponent } from './validator.component.js';

var ValidateMinComponent = /** @class */ (function (_super) {
    __extends(ValidateMinComponent, _super);
    function ValidateMinComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateMinComponent.prototype.buildValidator = function () {
        return Min(this.count, { treatAs: this.treatAs, message: this.message, type: this.type, tags: this.tags, groups: this.groups });
    };
    __decorate([
        Prop({ type: [Number, String], required: true, transform: function (input) { return ensureNumber(input); } }),
        __metadata("design:type", Number)
    ], ValidateMinComponent.prototype, "count", void 0);
    __decorate([
        Prop({ type: String, default: 'auto', transform: function (value) {
                if (['string', 'number', 'auto'].indexOf(value) < 0) {
                    return 'auto';
                }
                return value;
            } }),
        __metadata("design:type", String)
    ], ValidateMinComponent.prototype, "treatAs", void 0);
    ValidateMinComponent = __decorate([
        Component({ name: 'bt-validate-min', template: false })
    ], ValidateMinComponent);
    return ValidateMinComponent;
}(ValidatorComponent));

export { ValidateMinComponent as default };
