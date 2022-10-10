/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __decorate, __metadata } from '../../_virtual/_tslib.js';
import { Composable } from '@banquette/vue-typescript/decorator/composable.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Watch, ImmediateStrategy } from '@banquette/vue-typescript/decorator/watch.decorator';

var FilteringComposable = /** @class */ (function () {
    function FilteringComposable() {
    }
    FilteringComposable.prototype.syncPaginationConfigurationProps = function () {
        this.module.updateFilters(this.filters);
        this.module.remote = this.remote;
    };
    __decorate([
        Prop({ type: Object, default: {} }),
        __metadata("design:type", Object)
    ], FilteringComposable.prototype, "filters", void 0);
    __decorate([
        Prop({ type: [Boolean, String], default: 'auto' }),
        __metadata("design:type", Object)
    ], FilteringComposable.prototype, "remote", void 0);
    __decorate([
        Watch(['filters', 'remote'], { immediate: ImmediateStrategy.NextTick }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FilteringComposable.prototype, "syncPaginationConfigurationProps", null);
    FilteringComposable = __decorate([
        Composable()
    ], FilteringComposable);
    return FilteringComposable;
}());

export { FilteringComposable };
