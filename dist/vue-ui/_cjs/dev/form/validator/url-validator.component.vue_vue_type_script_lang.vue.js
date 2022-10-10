/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var url = require('@banquette/validation/_cjs/dev/type/url');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var validator_component = require('./validator.component.js');

var ValidateUrlComponent = /** @class */ (function (_super) {
    _tslib.__extends(ValidateUrlComponent, _super);
    function ValidateUrlComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateUrlComponent.prototype.buildValidator = function () {
        return url.Url({ message: this.message, type: this.type, tags: this.tags, groups: this.groups });
    };
    ValidateUrlComponent = _tslib.__decorate([
        component_decorator.Component({ name: 'bt-validate-url', template: false })
    ], ValidateUrlComponent);
    return ValidateUrlComponent;
}(validator_component.ValidatorComponent));

module.exports = ValidateUrlComponent;
