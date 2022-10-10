/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __decorate, __metadata } from '../../_virtual/_tslib.js';
import { Composable } from '@banquette/vue-typescript/decorator/composable.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Watch, ImmediateStrategy } from '@banquette/vue-typescript/decorator/watch.decorator';

var OrderingComposable = /** @class */ (function () {
    function OrderingComposable() {
    }
    OrderingComposable.prototype.syncPaginationConfigurationProps = function () {
        this.module.columnName = this.name;
        this.module.direction = this.direction;
        this.module.remote = this.remote;
    };
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], OrderingComposable.prototype, "name", void 0);
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], OrderingComposable.prototype, "direction", void 0);
    __decorate([
        Prop({ type: [Boolean, String], default: 'auto' }),
        __metadata("design:type", Object)
    ], OrderingComposable.prototype, "remote", void 0);
    __decorate([
        Watch(['name', 'direction', 'remote'], { immediate: ImmediateStrategy.BeforeMount }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], OrderingComposable.prototype, "syncPaginationConfigurationProps", null);
    OrderingComposable = __decorate([
        Composable()
    ], OrderingComposable);
    return OrderingComposable;
}());

export { OrderingComposable };
