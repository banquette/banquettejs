/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var phone = require('@banquette/validation/_cjs/dev/type/phone');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var validator_component = require('./validator.component.js');

var ValidatePhoneComponent = /** @class */ (function (_super) {
    _tslib.__extends(ValidatePhoneComponent, _super);
    function ValidatePhoneComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidatePhoneComponent.prototype.buildValidator = function () {
        return phone.Phone({ message: this.message, type: this.type, tags: this.tags, groups: this.groups });
    };
    ValidatePhoneComponent = _tslib.__decorate([
        component_decorator.Component({ name: 'bt-validate-phone', template: false })
    ], ValidatePhoneComponent);
    return ValidatePhoneComponent;
}(validator_component.ValidatorComponent));

module.exports = ValidatePhoneComponent;
