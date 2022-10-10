/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var compose = require('@banquette/validation/_cjs/dev/type/compose');
var valid = require('@banquette/validation/_cjs/dev/type/valid');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var render_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/render.decorator');
var vue = require('vue');
var containerValidator_component = require('./container-validator.component.js');

var ValidateComposeComponent = /** @class */ (function (_super) {
    _tslib.__extends(ValidateComposeComponent, _super);
    function ValidateComposeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValidateComposeComponent.prototype.buildValidator = function () {
        var children = this.children;
        if (children.length > 0) {
            return compose.Compose.apply(null, children);
        }
        return valid.Valid();
    };
    ValidateComposeComponent.prototype.render = function (context) {
        return vue.renderSlot(context.$slots, 'default');
    };
    _tslib.__decorate([
        render_decorator.Render(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Object]),
        _tslib.__metadata("design:returntype", Object)
    ], ValidateComposeComponent.prototype, "render", null);
    ValidateComposeComponent = _tslib.__decorate([
        component_decorator.Component('bt-validate-compose')
    ], ValidateComposeComponent);
    return ValidateComposeComponent;
}(containerValidator_component.ContainerValidatorComponent));

module.exports = ValidateComposeComponent;
