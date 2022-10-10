/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var constant = require('@banquette/ui/_cjs/dev/table/pagination/constant');
var composable_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/composable.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var watch_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/watch.decorator');

var PaginationComposable = /** @class */ (function () {
    function PaginationComposable() {
    }
    PaginationComposable.prototype.syncPaginationConfigurationProps = function () {
        this.module.page = this.page;
        this.module.pageId = this.pageId;
        this.module.allowedItemsPerPage = this.allowedItemsPerPage;
        this.module.itemsPerPage = this.itemsPerPage;
        this.module.allowFirstPage = this.allowFirstPage;
        this.module.allowLastPage = this.allowLastPage;
        this.module.allowPageInput = this.allowPageInput;
        this.module.enabled = this.enabled;
        this.module.strategy = this.strategy;
        this.module.position = this.position;
        this.module.summary = this.summary;
        this.module.delta = this.delta;
        this.module.remote = this.remote;
    };
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: true }),
        _tslib.__metadata("design:type", Boolean)
    ], PaginationComposable.prototype, "enabled", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Number, default: 1 }),
        _tslib.__metadata("design:type", Number)
    ], PaginationComposable.prototype, "page", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ default: null }),
        _tslib.__metadata("design:type", Object)
    ], PaginationComposable.prototype, "pageId", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Number, default: 20 }),
        _tslib.__metadata("design:type", Number)
    ], PaginationComposable.prototype, "itemsPerPage", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Array, default: [10, 20, 30, 50, 100] }),
        _tslib.__metadata("design:type", Array)
    ], PaginationComposable.prototype, "allowedItemsPerPage", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: true }),
        _tslib.__metadata("design:type", Boolean)
    ], PaginationComposable.prototype, "allowFirstPage", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: true }),
        _tslib.__metadata("design:type", Boolean)
    ], PaginationComposable.prototype, "allowLastPage", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: true }),
        _tslib.__metadata("design:type", Boolean)
    ], PaginationComposable.prototype, "allowPageInput", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: constant.PaginationStrategy.Offset }),
        _tslib.__metadata("design:type", String)
    ], PaginationComposable.prototype, "strategy", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: constant.PaginationPosition.Top }),
        _tslib.__metadata("design:type", String)
    ], PaginationComposable.prototype, "position", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: true }),
        _tslib.__metadata("design:type", Boolean)
    ], PaginationComposable.prototype, "summary", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Number, default: 3 }),
        _tslib.__metadata("design:type", Number)
    ], PaginationComposable.prototype, "delta", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [Boolean, String], default: 'auto' }),
        _tslib.__metadata("design:type", Object)
    ], PaginationComposable.prototype, "remote", void 0);
    _tslib.__decorate([
        watch_decorator.Watch([
            'page',
            'pageId',
            'itemsPerPage',
            'allowedItemsPerPage',
            'allowFirstPage',
            'allowLastPage',
            'allowPageInput',
            'enabled',
            'strategy',
            'position',
            'summary',
            'delta',
            'remote'
        ], { immediate: watch_decorator.ImmediateStrategy.NextTick }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], PaginationComposable.prototype, "syncPaginationConfigurationProps", null);
    PaginationComposable = _tslib.__decorate([
        composable_decorator.Composable()
    ], PaginationComposable);
    return PaginationComposable;
}());

exports.PaginationComposable = PaginationComposable;
