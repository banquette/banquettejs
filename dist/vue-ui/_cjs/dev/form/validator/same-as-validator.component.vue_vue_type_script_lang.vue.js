/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var sameAs = require('@banquette/validation/_cjs/dev/type/same-as');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var validator_component = require('./validator.component.js');

var ValidateSameAsComponent = /** @class */ (function (_super) {
    _tslib.__extends(ValidateSameAsComponent, _super);
    function ValidateSameAsComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateSameAsComponent.prototype.buildValidator = function () {
        return sameAs.SameAs(this.path, { message: this.message, type: this.type, tags: this.tags, groups: this.groups });
    };
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, required: true }),
        _tslib.__metadata("design:type", String)
    ], ValidateSameAsComponent.prototype, "path", void 0);
    ValidateSameAsComponent = _tslib.__decorate([
        component_decorator.Component({ name: 'bt-validate-same-as', template: false })
    ], ValidateSameAsComponent);
    return ValidateSameAsComponent;
}(validator_component.ValidatorComponent));

module.exports = ValidateSameAsComponent;
