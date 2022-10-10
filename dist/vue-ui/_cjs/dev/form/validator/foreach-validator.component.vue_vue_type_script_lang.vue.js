/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var foreach = require('@banquette/validation/_cjs/dev/type/foreach');
var valid = require('@banquette/validation/_cjs/dev/type/valid');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var render_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/render.decorator');
var vue = require('vue');
var containerValidator_component = require('./container-validator.component.js');

var ValidateForeachComponent = /** @class */ (function (_super) {
    _tslib.__extends(ValidateForeachComponent, _super);
    function ValidateForeachComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateForeachComponent.prototype.buildValidator = function () {
        var children = this.children;
        if (children.length > 1) {
            throw new usage_exception.UsageException("\"validate-foreach\" can only have 1 child.");
        }
        if (children.length > 0) {
            return foreach.Foreach(children[0]);
        }
        return valid.Valid();
    };
    ValidateForeachComponent.prototype.render = function (context) {
        return vue.renderSlot(context.$slots, 'default');
    };
    _tslib.__decorate([
        render_decorator.Render(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Object]),
        _tslib.__metadata("design:returntype", Object)
    ], ValidateForeachComponent.prototype, "render", null);
    ValidateForeachComponent = _tslib.__decorate([
        component_decorator.Component('bt-validate-foreach')
    ], ValidateForeachComponent);
    return ValidateForeachComponent;
}(containerValidator_component.ContainerValidatorComponent));

module.exports = ValidateForeachComponent;
