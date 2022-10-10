/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../_virtual/_tslib.js';
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { Choice } from '@banquette/validation/type/choice';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { ValidatorComponent } from './validator.component.js';

var ValidateChoiceComponent = /** @class */ (function (_super) {
    __extends(ValidateChoiceComponent, _super);
    function ValidateChoiceComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateChoiceComponent.prototype.buildValidator = function () {
        return Choice(this.choices, { message: this.message, type: this.type, tags: this.tags, groups: this.groups });
    };
    __decorate([
        Prop({ type: Array, required: true, transform: function (value) { return ensureArray(value); } }),
        __metadata("design:type", Array)
    ], ValidateChoiceComponent.prototype, "choices", void 0);
    ValidateChoiceComponent = __decorate([
        Component({ name: 'bt-validate-choice', template: false })
    ], ValidateChoiceComponent);
    return ValidateChoiceComponent;
}(ValidatorComponent));

export { ValidateChoiceComponent as default };
