/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var computed_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/computed.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var themeable_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/themeable.decorator');
var bindTheme_directive = require('@banquette/vue-typescript/_cjs/dev/theme/bind-theme.directive');
var abstractProgress_component = require('../abstract-progress.component.js');
var themeConfiguration = require('./theme-configuration.js');

var ProgressCircularComponent = /** @class */ (function (_super) {
    _tslib.__extends(ProgressCircularComponent, _super);
    function ProgressCircularComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ProgressCircularComponent.prototype, "viewBox", {
        get: function () {
            return "0 0 ".concat(32 + this.strokeWidth, " ").concat(32 + this.strokeWidth);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProgressCircularComponent.prototype, "d", {
        get: function () {
            return "M ".concat(15.9155 + this.strokeWidth / 2, " ").concat(this.strokeWidth / 2, " a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProgressCircularComponent.prototype, "strokeDasharray", {
        get: function () {
            return this.progressPercent() !== null ? "".concat(this.progressPercent(), ", 100") : '';
        },
        enumerable: false,
        configurable: true
    });
    _tslib.__decorate([
        prop_decorator.Prop({ type: [Number, String], default: 3.5, transform: function (v) { return parseFloat(v); } }),
        _tslib.__metadata("design:type", Number)
    ], ProgressCircularComponent.prototype, "strokeWidth", void 0);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", String),
        _tslib.__metadata("design:paramtypes", [])
    ], ProgressCircularComponent.prototype, "viewBox", null);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", String),
        _tslib.__metadata("design:paramtypes", [])
    ], ProgressCircularComponent.prototype, "d", null);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", String),
        _tslib.__metadata("design:paramtypes", [])
    ], ProgressCircularComponent.prototype, "strokeDasharray", null);
    ProgressCircularComponent = _tslib.__decorate([
        themeable_decorator.Themeable(themeConfiguration.ThemeConfiguration),
        component_decorator.Component({
            name: 'bt-progress-circular',
            directives: [bindTheme_directive.BindThemeDirective]
        })
    ], ProgressCircularComponent);
    return ProgressCircularComponent;
}(abstractProgress_component.AbstractProgressComponent));

module.exports = ProgressCircularComponent;
