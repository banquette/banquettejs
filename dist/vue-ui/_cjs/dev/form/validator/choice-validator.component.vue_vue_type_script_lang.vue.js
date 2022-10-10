/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var ensureArray = require('@banquette/utils-type/_cjs/dev/ensure-array');
var choice = require('@banquette/validation/_cjs/dev/type/choice');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var validator_component = require('./validator.component.js');

var ValidateChoiceComponent = /** @class */ (function (_super) {
    _tslib.__extends(ValidateChoiceComponent, _super);
    function ValidateChoiceComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateChoiceComponent.prototype.buildValidator = function () {
        return choice.Choice(this.choices, { message: this.message, type: this.type, tags: this.tags, groups: this.groups });
    };
    _tslib.__decorate([
        prop_decorator.Prop({ type: Array, required: true, transform: function (value) { return ensureArray.ensureArray(value); } }),
        _tslib.__metadata("design:type", Array)
    ], ValidateChoiceComponent.prototype, "choices", void 0);
    ValidateChoiceComponent = _tslib.__decorate([
        component_decorator.Component({ name: 'bt-validate-choice', template: false })
    ], ValidateChoiceComponent);
    return ValidateChoiceComponent;
}(validator_component.ValidatorComponent));

module.exports = ValidateChoiceComponent;
