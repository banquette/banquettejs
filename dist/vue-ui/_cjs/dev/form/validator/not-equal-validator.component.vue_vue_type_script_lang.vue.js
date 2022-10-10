/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var notEqual = require('@banquette/validation/_cjs/dev/type/not-equal');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var validator_component = require('./validator.component.js');

var ValidateNotEqualComponent = /** @class */ (function (_super) {
    _tslib.__extends(ValidateNotEqualComponent, _super);
    function ValidateNotEqualComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateNotEqualComponent.prototype.buildValidator = function () {
        return notEqual.NotEqual(this.value, this.strict, { message: this.message, type: this.type, tags: this.tags, groups: this.groups });
    };
    _tslib.__decorate([
        prop_decorator.Prop({ required: true }),
        _tslib.__metadata("design:type", Object)
    ], ValidateNotEqualComponent.prototype, "value", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: true }),
        _tslib.__metadata("design:type", Boolean)
    ], ValidateNotEqualComponent.prototype, "strict", void 0);
    ValidateNotEqualComponent = _tslib.__decorate([
        component_decorator.Component({ name: 'bt-validate-not-equal', template: false })
    ], ValidateNotEqualComponent);
    return ValidateNotEqualComponent;
}(validator_component.ValidatorComponent));

module.exports = ValidateNotEqualComponent;
