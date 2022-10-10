/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var max = require('@banquette/validation/_cjs/dev/type/max');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var validator_component = require('./validator.component.js');

var ValidateMaxComponent = /** @class */ (function (_super) {
    _tslib.__extends(ValidateMaxComponent, _super);
    function ValidateMaxComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateMaxComponent.prototype.buildValidator = function () {
        return max.Max(this.count, { treatAs: this.treatAs, message: this.message, type: this.type, tags: this.tags, groups: this.groups });
    };
    _tslib.__decorate([
        prop_decorator.Prop({ type: Number, required: true }),
        _tslib.__metadata("design:type", Number)
    ], ValidateMaxComponent.prototype, "count", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: 'auto', transform: function (value) {
                if (['string', 'number', 'auto'].indexOf(value) < 0) {
                    return 'auto';
                }
                return value;
            } }),
        _tslib.__metadata("design:type", String)
    ], ValidateMaxComponent.prototype, "treatAs", void 0);
    ValidateMaxComponent = _tslib.__decorate([
        component_decorator.Component({ name: 'bt-validate-max', template: false })
    ], ValidateMaxComponent);
    return ValidateMaxComponent;
}(validator_component.ValidatorComponent));

module.exports = ValidateMaxComponent;
