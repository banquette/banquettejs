/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var email = require('@banquette/validation/_cjs/dev/type/email');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var validator_component = require('./validator.component.js');

var ValidateEmailComponent = /** @class */ (function (_super) {
    _tslib.__extends(ValidateEmailComponent, _super);
    function ValidateEmailComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateEmailComponent.prototype.buildValidator = function () {
        return email.Email({ message: this.message, type: this.type, tags: this.tags, groups: this.groups });
    };
    ValidateEmailComponent = _tslib.__decorate([
        component_decorator.Component({ name: 'bt-validate-email', template: false })
    ], ValidateEmailComponent);
    return ValidateEmailComponent;
}(validator_component.ValidatorComponent));

module.exports = ValidateEmailComponent;
