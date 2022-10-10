/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var and = require('@banquette/validation/_cjs/dev/type/and');
var valid = require('@banquette/validation/_cjs/dev/type/valid');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var render_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/render.decorator');
var vue = require('vue');
var containerValidator_component = require('./container-validator.component.js');

var ValidateAndComponent = /** @class */ (function (_super) {
    _tslib.__extends(ValidateAndComponent, _super);
    function ValidateAndComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateAndComponent.prototype.buildValidator = function () {
        var children = this.children;
        if (children.length > 0) {
            return and.And.apply(null, children);
        }
        return valid.Valid();
    };
    ValidateAndComponent.prototype.render = function (context) {
        return vue.renderSlot(context.$slots, 'default');
    };
    _tslib.__decorate([
        render_decorator.Render(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Object]),
        _tslib.__metadata("design:returntype", Object)
    ], ValidateAndComponent.prototype, "render", null);
    ValidateAndComponent = _tslib.__decorate([
        component_decorator.Component('bt-validate-and')
    ], ValidateAndComponent);
    return ValidateAndComponent;
}(containerValidator_component.ContainerValidatorComponent));

module.exports = ValidateAndComponent;
