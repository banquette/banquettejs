/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var equal = require('@banquette/validation/_cjs/dev/type/equal');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var validator_component = require('./validator.component.js');

var ValidateEqualComponent = /** @class */ (function (_super) {
    _tslib.__extends(ValidateEqualComponent, _super);
    function ValidateEqualComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateEqualComponent.prototype.buildValidator = function () {
        return equal.Equal(this.value, this.strict, { message: this.message, type: this.type, tags: this.tags, groups: this.groups });
    };
    _tslib.__decorate([
        prop_decorator.Prop({ required: true }),
        _tslib.__metadata("design:type", Object)
    ], ValidateEqualComponent.prototype, "value", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: true }),
        _tslib.__metadata("design:type", Boolean)
    ], ValidateEqualComponent.prototype, "strict", void 0);
    ValidateEqualComponent = _tslib.__decorate([
        component_decorator.Component({ name: 'bt-validate-equal', template: false })
    ], ValidateEqualComponent);
    return ValidateEqualComponent;
}(validator_component.ValidatorComponent));

module.exports = ValidateEqualComponent;
