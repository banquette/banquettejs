/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __decorate, __metadata } from '../../_virtual/_tslib.js';
import { PaginationStrategy, PaginationPosition } from '@banquette/ui/table/pagination/constant';
import { Composable } from '@banquette/vue-typescript/decorator/composable.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Watch, ImmediateStrategy } from '@banquette/vue-typescript/decorator/watch.decorator';

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
    __decorate([
        Prop({ type: Boolean, default: true }),
        __metadata("design:type", Boolean)
    ], PaginationComposable.prototype, "enabled", void 0);
    __decorate([
        Prop({ type: Number, default: 1 }),
        __metadata("design:type", Number)
    ], PaginationComposable.prototype, "page", void 0);
    __decorate([
        Prop({ default: null }),
        __metadata("design:type", Object)
    ], PaginationComposable.prototype, "pageId", void 0);
    __decorate([
        Prop({ type: Number, default: 20 }),
        __metadata("design:type", Number)
    ], PaginationComposable.prototype, "itemsPerPage", void 0);
    __decorate([
        Prop({ type: Array, default: [10, 20, 30, 50, 100] }),
        __metadata("design:type", Array)
    ], PaginationComposable.prototype, "allowedItemsPerPage", void 0);
    __decorate([
        Prop({ type: Boolean, default: true }),
        __metadata("design:type", Boolean)
    ], PaginationComposable.prototype, "allowFirstPage", void 0);
    __decorate([
        Prop({ type: Boolean, default: true }),
        __metadata("design:type", Boolean)
    ], PaginationComposable.prototype, "allowLastPage", void 0);
    __decorate([
        Prop({ type: Boolean, default: true }),
        __metadata("design:type", Boolean)
    ], PaginationComposable.prototype, "allowPageInput", void 0);
    __decorate([
        Prop({ type: String, default: PaginationStrategy.Offset }),
        __metadata("design:type", String)
    ], PaginationComposable.prototype, "strategy", void 0);
    __decorate([
        Prop({ type: String, default: PaginationPosition.Top }),
        __metadata("design:type", String)
    ], PaginationComposable.prototype, "position", void 0);
    __decorate([
        Prop({ type: Boolean, default: true }),
        __metadata("design:type", Boolean)
    ], PaginationComposable.prototype, "summary", void 0);
    __decorate([
        Prop({ type: Number, default: 3 }),
        __metadata("design:type", Number)
    ], PaginationComposable.prototype, "delta", void 0);
    __decorate([
        Prop({ type: [Boolean, String], default: 'auto' }),
        __metadata("design:type", Object)
    ], PaginationComposable.prototype, "remote", void 0);
    __decorate([
        Watch([
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
        ], { immediate: ImmediateStrategy.NextTick }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PaginationComposable.prototype, "syncPaginationConfigurationProps", null);
    PaginationComposable = __decorate([
        Composable()
    ], PaginationComposable);
    return PaginationComposable;
}());

export { PaginationComposable };
