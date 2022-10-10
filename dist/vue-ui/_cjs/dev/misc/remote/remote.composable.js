/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var constants = require('@banquette/http/_cjs/dev/constants');
var ensureInEnum = require('@banquette/utils-array/_cjs/dev/ensure-in-enum');
var composable_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/composable.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var watch_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/watch.decorator');

/**
 * VueJS bridge to RemoteModule.
 */
var RemoteComposable = /** @class */ (function () {
    function RemoteComposable() {
    }
    RemoteComposable.prototype.syncConfigurationProps = function () {
        this.module.updateConfiguration({
            url: this.url,
            endpoint: this.endpoint,
            method: this.method,
            urlParams: this.urlParams,
            headers: this.headers,
            model: this.model
        });
    };
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], RemoteComposable.prototype, "url", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], RemoteComposable.prototype, "endpoint", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], RemoteComposable.prototype, "model", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: constants.HttpMethod.GET, transform: function (value) { return ensureInEnum.ensureInEnum(value, constants.HttpMethod, constants.HttpMethod.GET); } }),
        _tslib.__metadata("design:type", String)
    ], RemoteComposable.prototype, "method", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Object, default: {} }),
        _tslib.__metadata("design:type", Object)
    ], RemoteComposable.prototype, "urlParams", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Object, default: {} }),
        _tslib.__metadata("design:type", Object)
    ], RemoteComposable.prototype, "headers", void 0);
    _tslib.__decorate([
        watch_decorator.Watch(['url', 'endpoint', 'method', 'model', 'urlParams', 'headers'], { immediate: watch_decorator.ImmediateStrategy.BeforeMount }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], RemoteComposable.prototype, "syncConfigurationProps", null);
    RemoteComposable = _tslib.__decorate([
        composable_decorator.Composable()
    ], RemoteComposable);
    return RemoteComposable;
}());

exports.RemoteComposable = RemoteComposable;
