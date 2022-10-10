/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var ensureArray = require('@banquette/utils-type/_cjs/dev/ensure-array');
var ensureString = require('@banquette/utils-type/_cjs/dev/ensure-string');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var isType = require('@banquette/validation/_cjs/dev/type/is-type');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var validator_component = require('./validator.component.js');

var TypesMap = {
    'string': isType.Type.String,
    'number': isType.Type.Number,
    'numeric': isType.Type.Numeric,
    'boolean': isType.Type.Boolean,
    'object': isType.Type.Object,
    'array': isType.Type.Array,
    'symbol': isType.Type.Symbol,
    'undefined': isType.Type.Undefined,
    'null': isType.Type.Null
};
var ValidateIsTypeComponent = /** @class */ (function (_super) {
    _tslib.__extends(ValidateIsTypeComponent, _super);
    function ValidateIsTypeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateIsTypeComponent.prototype.buildValidator = function () {
        return isType.IsType(this.allowed, { message: this.message, type: this.type, tags: this.tags, groups: this.groups });
    };
    _tslib.__decorate([
        prop_decorator.Prop({ type: [String, Array], required: true, transform: function (value) {
                var output = 0;
                for (var _i = 0, _a = ensureArray.ensureArray(value); _i < _a.length; _i++) {
                    var type = _a[_i];
                    type = type.toLowerCase();
                    if (!isUndefined.isUndefined(TypesMap[type])) {
                        output |= TypesMap[type];
                    }
                }
                if (!output) {
                    throw new usage_exception.UsageException("Invalid type \"".concat(ensureString.ensureString(value), "\", should be one of: ").concat(Object.keys(TypesMap).join(','), "."));
                }
                return output;
            } }),
        _tslib.__metadata("design:type", Number)
    ], ValidateIsTypeComponent.prototype, "allowed", void 0);
    ValidateIsTypeComponent = _tslib.__decorate([
        component_decorator.Component({ name: 'bt-validate-is-type', template: false })
    ], ValidateIsTypeComponent);
    return ValidateIsTypeComponent;
}(validator_component.ValidatorComponent));

module.exports = ValidateIsTypeComponent;
