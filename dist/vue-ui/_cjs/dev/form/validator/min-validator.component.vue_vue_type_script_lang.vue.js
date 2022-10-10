/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var ensureNumber = require('@banquette/utils-type/_cjs/dev/ensure-number');
var min = require('@banquette/validation/_cjs/dev/type/min');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var validator_component = require('./validator.component.js');

var ValidateMinComponent = /** @class */ (function (_super) {
    _tslib.__extends(ValidateMinComponent, _super);
    function ValidateMinComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateMinComponent.prototype.buildValidator = function () {
        return min.Min(this.count, { treatAs: this.treatAs, message: this.message, type: this.type, tags: this.tags, groups: this.groups });
    };
    _tslib.__decorate([
        prop_decorator.Prop({ type: [Number, String], required: true, transform: function (input) { return ensureNumber.ensureNumber(input); } }),
        _tslib.__metadata("design:type", Number)
    ], ValidateMinComponent.prototype, "count", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: 'auto', transform: function (value) {
                if (['string', 'number', 'auto'].indexOf(value) < 0) {
                    return 'auto';
                }
                return value;
            } }),
        _tslib.__metadata("design:type", String)
    ], ValidateMinComponent.prototype, "treatAs", void 0);
    ValidateMinComponent = _tslib.__decorate([
        component_decorator.Component({ name: 'bt-validate-min', template: false })
    ], ValidateMinComponent);
    return ValidateMinComponent;
}(validator_component.ValidatorComponent));

module.exports = ValidateMinComponent;
