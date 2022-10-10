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

var FilteringComposable = /** @class */ (function () {
    function FilteringComposable() {
    }
    FilteringComposable.prototype.syncPaginationConfigurationProps = function () {
        this.module.updateFilters(this.filters);
        this.module.remote = this.remote;
    };
    _tslib.__decorate([
        prop_decorator.Prop({ type: Object, default: {} }),
        _tslib.__metadata("design:type", Object)
    ], FilteringComposable.prototype, "filters", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [Boolean, String], default: 'auto' }),
        _tslib.__metadata("design:type", Object)
    ], FilteringComposable.prototype, "remote", void 0);
    _tslib.__decorate([
        watch_decorator.Watch(['filters', 'remote'], { immediate: watch_decorator.ImmediateStrategy.NextTick }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], FilteringComposable.prototype, "syncPaginationConfigurationProps", null);
    FilteringComposable = _tslib.__decorate([
        composable_decorator.Composable()
    ], FilteringComposable);
    return FilteringComposable;
}());

exports.FilteringComposable = FilteringComposable;
