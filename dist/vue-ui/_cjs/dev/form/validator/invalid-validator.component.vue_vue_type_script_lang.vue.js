/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var invalid = require('@banquette/validation/_cjs/dev/type/invalid');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var validator_component = require('./validator.component.js');

var ValidateInvalidComponent = /** @class */ (function (_super) {
    _tslib.__extends(ValidateInvalidComponent, _super);
    function ValidateInvalidComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateInvalidComponent.prototype.buildValidator = function () {
        return invalid.Invalid({ message: this.message, type: this.type, tags: this.tags, groups: this.groups });
    };
    ValidateInvalidComponent = _tslib.__decorate([
        component_decorator.Component({ name: 'bt-validate-invalid', template: false })
    ], ValidateInvalidComponent);
    return ValidateInvalidComponent;
}(validator_component.ValidatorComponent));

module.exports = ValidateInvalidComponent;
