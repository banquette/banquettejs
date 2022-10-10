/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var empty = require('@banquette/validation/_cjs/dev/type/empty');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var validator_component = require('./validator.component.js');

var ValidateEmptyComponent = /** @class */ (function (_super) {
    _tslib.__extends(ValidateEmptyComponent, _super);
    function ValidateEmptyComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateEmptyComponent.prototype.buildValidator = function () {
        return empty.Empty({ message: this.message, type: this.type, tags: this.tags, groups: this.groups });
    };
    ValidateEmptyComponent = _tslib.__decorate([
        component_decorator.Component({ name: 'bt-validate-empty', template: false })
    ], ValidateEmptyComponent);
    return ValidateEmptyComponent;
}(validator_component.ValidatorComponent));

module.exports = ValidateEmptyComponent;
