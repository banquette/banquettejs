/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var notEmpty = require('@banquette/validation/_cjs/dev/type/not-empty');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var validator_component = require('./validator.component.js');

var ValidateNotEmptyComponent = /** @class */ (function (_super) {
    _tslib.__extends(ValidateNotEmptyComponent, _super);
    function ValidateNotEmptyComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateNotEmptyComponent.prototype.buildValidator = function () {
        return notEmpty.NotEmpty({ message: this.message, type: this.type, tags: this.tags, groups: this.groups });
    };
    ValidateNotEmptyComponent = _tslib.__decorate([
        component_decorator.Component({ name: 'bt-validate-not-empty', template: false })
    ], ValidateNotEmptyComponent);
    return ValidateNotEmptyComponent;
}(validator_component.ValidatorComponent));

module.exports = ValidateNotEmptyComponent;
