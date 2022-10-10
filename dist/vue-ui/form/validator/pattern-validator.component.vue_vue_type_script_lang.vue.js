/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../_virtual/_tslib.js';
import { Pattern } from '@banquette/validation/type/pattern';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { ValidatorComponent } from './validator.component.js';

var ValidatePatternComponent = /** @class */ (function (_super) {
    __extends(ValidatePatternComponent, _super);
    function ValidatePatternComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidatePatternComponent.prototype.buildValidator = function () {
        return Pattern(new RegExp(this.pattern, this.flags), { message: this.message, type: this.type, tags: this.tags, groups: this.groups });
    };
    __decorate([
        Prop({ type: String, required: true }),
        __metadata("design:type", String)
    ], ValidatePatternComponent.prototype, "pattern", void 0);
    __decorate([
        Prop({ type: String, default: undefined }),
        __metadata("design:type", String)
    ], ValidatePatternComponent.prototype, "flags", void 0);
    ValidatePatternComponent = __decorate([
        Component({ name: 'bt-validate-pattern', template: false })
    ], ValidatePatternComponent);
    return ValidatePatternComponent;
}(ValidatorComponent));

export { ValidatePatternComponent as default };
