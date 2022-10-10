/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var composable_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/composable.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var watch_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/watch.decorator');

var BaseInputComposable = /** @class */ (function () {
    function BaseInputComposable() {
        this.viewData = {};
    }
    BaseInputComposable.prototype.setViewData = function (viewData) {
        this.viewData = viewData;
        this.syncConfigurationProps();
    };
    /**
     * Copy applicable props into the view data.
     */
    BaseInputComposable.prototype.syncConfigurationProps = function () {
        this.viewData.label = this.label;
        this.viewData.placeholder = this.placeholder;
        this.viewData.help = this.help;
        this.viewData.floatingLabel = this.floatingLabel;
        this.viewData.floatingErrors = this.floatingErrors;
        this.viewData.floatingHelp = this.floatingHelp;
        this.viewData.required = this.required;
        this.viewData.showDebug = this.debug;
    };
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], BaseInputComposable.prototype, "label", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], BaseInputComposable.prototype, "placeholder", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], BaseInputComposable.prototype, "help", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: true }),
        _tslib.__metadata("design:type", Boolean)
    ], BaseInputComposable.prototype, "floatingLabel", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: true }),
        _tslib.__metadata("design:type", Boolean)
    ], BaseInputComposable.prototype, "floatingErrors", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], BaseInputComposable.prototype, "floatingHelp", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], BaseInputComposable.prototype, "required", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], BaseInputComposable.prototype, "debug", void 0);
    _tslib.__decorate([
        watch_decorator.Watch(['label', 'placeholder', 'help', 'floatingLabel', 'floatingErrors', 'floatingHelp', 'required', 'debug'], { immediate: watch_decorator.ImmediateStrategy.BeforeMount }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], BaseInputComposable.prototype, "syncConfigurationProps", null);
    BaseInputComposable = _tslib.__decorate([
        composable_decorator.Composable()
    ], BaseInputComposable);
    return BaseInputComposable;
}());

exports.BaseInputComposable = BaseInputComposable;
