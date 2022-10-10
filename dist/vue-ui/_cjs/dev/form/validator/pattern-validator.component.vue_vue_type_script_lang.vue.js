/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var pattern = require('@banquette/validation/_cjs/dev/type/pattern');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var validator_component = require('./validator.component.js');

var ValidatePatternComponent = /** @class */ (function (_super) {
    _tslib.__extends(ValidatePatternComponent, _super);
    function ValidatePatternComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidatePatternComponent.prototype.buildValidator = function () {
        return pattern.Pattern(new RegExp(this.pattern, this.flags), { message: this.message, type: this.type, tags: this.tags, groups: this.groups });
    };
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, required: true }),
        _tslib.__metadata("design:type", String)
    ], ValidatePatternComponent.prototype, "pattern", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: undefined }),
        _tslib.__metadata("design:type", String)
    ], ValidatePatternComponent.prototype, "flags", void 0);
    ValidatePatternComponent = _tslib.__decorate([
        component_decorator.Component({ name: 'bt-validate-pattern', template: false })
    ], ValidatePatternComponent);
    return ValidatePatternComponent;
}(validator_component.ValidatorComponent));

module.exports = ValidatePatternComponent;
