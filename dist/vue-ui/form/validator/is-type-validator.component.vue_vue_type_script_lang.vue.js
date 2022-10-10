/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../_virtual/_tslib.js';
import { UsageException } from '@banquette/exception/usage.exception';
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { ensureString } from '@banquette/utils-type/ensure-string';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { Type, IsType } from '@banquette/validation/type/is-type';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { ValidatorComponent } from './validator.component.js';

var TypesMap = {
    'string': Type.String,
    'number': Type.Number,
    'numeric': Type.Numeric,
    'boolean': Type.Boolean,
    'object': Type.Object,
    'array': Type.Array,
    'symbol': Type.Symbol,
    'undefined': Type.Undefined,
    'null': Type.Null
};
var ValidateIsTypeComponent = /** @class */ (function (_super) {
    __extends(ValidateIsTypeComponent, _super);
    function ValidateIsTypeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateIsTypeComponent.prototype.buildValidator = function () {
        return IsType(this.allowed, { message: this.message, type: this.type, tags: this.tags, groups: this.groups });
    };
    __decorate([
        Prop({ type: [String, Array], required: true, transform: function (value) {
                var output = 0;
                for (var _i = 0, _a = ensureArray(value); _i < _a.length; _i++) {
                    var type = _a[_i];
                    type = type.toLowerCase();
                    if (!isUndefined(TypesMap[type])) {
                        output |= TypesMap[type];
                    }
                }
                if (!output) {
                    throw new UsageException("Invalid type \"".concat(ensureString(value), "\", should be one of: ").concat(Object.keys(TypesMap).join(','), "."));
                }
                return output;
            } }),
        __metadata("design:type", Number)
    ], ValidateIsTypeComponent.prototype, "allowed", void 0);
    ValidateIsTypeComponent = __decorate([
        Component({ name: 'bt-validate-is-type', template: false })
    ], ValidateIsTypeComponent);
    return ValidateIsTypeComponent;
}(ValidatorComponent));

export { ValidateIsTypeComponent as default };
