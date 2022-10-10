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

var OrderingComposable = /** @class */ (function () {
    function OrderingComposable() {
    }
    OrderingComposable.prototype.syncPaginationConfigurationProps = function () {
        this.module.columnName = this.name;
        this.module.direction = this.direction;
        this.module.remote = this.remote;
    };
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], OrderingComposable.prototype, "name", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], OrderingComposable.prototype, "direction", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [Boolean, String], default: 'auto' }),
        _tslib.__metadata("design:type", Object)
    ], OrderingComposable.prototype, "remote", void 0);
    _tslib.__decorate([
        watch_decorator.Watch(['name', 'direction', 'remote'], { immediate: watch_decorator.ImmediateStrategy.BeforeMount }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], OrderingComposable.prototype, "syncPaginationConfigurationProps", null);
    OrderingComposable = _tslib.__decorate([
        composable_decorator.Composable()
    ], OrderingComposable);
    return OrderingComposable;
}());

exports.OrderingComposable = OrderingComposable;
