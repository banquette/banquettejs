/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __decorate, __metadata } from '../../_virtual/_tslib.js';
import { HttpMethod } from '@banquette/http/constants';
import { ensureInEnum } from '@banquette/utils-array/ensure-in-enum';
import { Composable } from '@banquette/vue-typescript/decorator/composable.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Watch, ImmediateStrategy } from '@banquette/vue-typescript/decorator/watch.decorator';

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
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], RemoteComposable.prototype, "url", void 0);
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], RemoteComposable.prototype, "endpoint", void 0);
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], RemoteComposable.prototype, "model", void 0);
    __decorate([
        Prop({ type: String, default: HttpMethod.GET, transform: function (value) { return ensureInEnum(value, HttpMethod, HttpMethod.GET); } }),
        __metadata("design:type", String)
    ], RemoteComposable.prototype, "method", void 0);
    __decorate([
        Prop({ type: Object, default: {} }),
        __metadata("design:type", Object)
    ], RemoteComposable.prototype, "urlParams", void 0);
    __decorate([
        Prop({ type: Object, default: {} }),
        __metadata("design:type", Object)
    ], RemoteComposable.prototype, "headers", void 0);
    __decorate([
        Watch(['url', 'endpoint', 'method', 'model', 'urlParams', 'headers'], { immediate: ImmediateStrategy.BeforeMount }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], RemoteComposable.prototype, "syncConfigurationProps", null);
    RemoteComposable = __decorate([
        Composable()
    ], RemoteComposable);
    return RemoteComposable;
}());

export { RemoteComposable };
