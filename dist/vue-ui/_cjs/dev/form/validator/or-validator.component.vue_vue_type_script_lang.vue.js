/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var or = require('@banquette/validation/_cjs/dev/type/or');
var valid = require('@banquette/validation/_cjs/dev/type/valid');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var render_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/render.decorator');
var vue = require('vue');
var containerValidator_component = require('./container-validator.component.js');

var ValidateOrComponent = /** @class */ (function (_super) {
    _tslib.__extends(ValidateOrComponent, _super);
    function ValidateOrComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateOrComponent.prototype.buildValidator = function () {
        var children = this.children;
        if (children.length > 0) {
            return or.Or.apply(null, children);
        }
        return valid.Valid();
    };
    ValidateOrComponent.prototype.render = function (context) {
        return vue.renderSlot(context.$slots, 'default');
    };
    _tslib.__decorate([
        render_decorator.Render(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Object]),
        _tslib.__metadata("design:returntype", Object)
    ], ValidateOrComponent.prototype, "render", null);
    ValidateOrComponent = _tslib.__decorate([
        component_decorator.Component('bt-validate-or')
    ], ValidateOrComponent);
    return ValidateOrComponent;
}(containerValidator_component.ContainerValidatorComponent));

module.exports = ValidateOrComponent;
