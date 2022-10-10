/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../_virtual/_tslib.js';
import { HttpResponseStatus, HttpMethod } from '@banquette/http/constants';
import { RemoteModule } from '@banquette/ui/misc/remote/remote.module';
import { ensureInEnum } from '@banquette/utils-array/ensure-in-enum';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Computed } from '@banquette/vue-typescript/decorator/computed.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Watch, ImmediateStrategy } from '@banquette/vue-typescript/decorator/watch.decorator';
import { Vue } from '@banquette/vue-typescript/vue';
import '../../progress/progress-circular/progress-circular.component.vue.js';
import ProgressCircularComponent from '../../progress/progress-circular/progress-circular.component.vue_vue_type_script_lang.vue.js';

var RemoteComponent = /** @class */ (function (_super) {
    __extends(RemoteComponent, _super);
    function RemoteComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.response = null;
        _this.bag = {};
        _this.remote = new RemoteModule();
        return _this;
    }
    Object.defineProperty(RemoteComponent.prototype, "waiting", {
        get: function () { return this.response === null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RemoteComponent.prototype, "fetching", {
        get: function () { return this.response !== null && this.response.status === HttpResponseStatus.Pending; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RemoteComponent.prototype, "error", {
        get: function () { return this.response !== null && this.response.status === HttpResponseStatus.Error; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RemoteComponent.prototype, "ready", {
        get: function () { return this.response !== null && this.response.status === HttpResponseStatus.Success; },
        enumerable: false,
        configurable: true
    });
    /**
     * Try to fetch remote data if available.
     */
    RemoteComponent.prototype.update = function () {
        var _this = this;
        if (!this.remote.isApplicable) {
            this.response = null;
        }
        else {
            this.response = this.remote.send();
            this.response.promise.finally(function () {
                _this.$forceUpdateComputed();
            });
        }
    };
    RemoteComponent.prototype.syncConfigurationProps = function () {
        this.remote.updateConfiguration({
            url: this.url,
            endpoint: this.endpoint,
            method: this.method,
            urlParams: this.urlParams,
            headers: this.headers,
            model: this.model
        });
        this.update();
    };
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], RemoteComponent.prototype, "url", void 0);
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], RemoteComponent.prototype, "endpoint", void 0);
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], RemoteComponent.prototype, "model", void 0);
    __decorate([
        Prop({ type: String, default: HttpMethod.GET, transform: function (value) { return ensureInEnum(value, HttpMethod, HttpMethod.GET); } }),
        __metadata("design:type", String)
    ], RemoteComponent.prototype, "method", void 0);
    __decorate([
        Prop({ type: Object, default: {} }),
        __metadata("design:type", Object)
    ], RemoteComponent.prototype, "urlParams", void 0);
    __decorate([
        Prop({ type: Object, default: {} }),
        __metadata("design:type", Object)
    ], RemoteComponent.prototype, "headers", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Object)
    ], RemoteComponent.prototype, "response", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Object)
    ], RemoteComponent.prototype, "bag", void 0);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], RemoteComponent.prototype, "waiting", null);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], RemoteComponent.prototype, "fetching", null);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], RemoteComponent.prototype, "error", null);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], RemoteComponent.prototype, "ready", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], RemoteComponent.prototype, "update", null);
    __decorate([
        Watch(['url', 'endpoint', 'method', 'model', 'urlParams', 'headers'], { immediate: ImmediateStrategy.NextTick, deep: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], RemoteComponent.prototype, "syncConfigurationProps", null);
    RemoteComponent = __decorate([
        Component({
            name: 'bt-remote',
            components: [ProgressCircularComponent]
        })
    ], RemoteComponent);
    return RemoteComponent;
}(Vue));

export { RemoteComponent as default };
