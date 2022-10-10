/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var constants = require('@banquette/http/_cjs/dev/constants');
var remote_module = require('@banquette/ui/_cjs/dev/misc/remote/remote.module');
var ensureInEnum = require('@banquette/utils-array/_cjs/dev/ensure-in-enum');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var computed_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/computed.decorator');
var expose_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/expose.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var watch_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/watch.decorator');
var vue = require('@banquette/vue-typescript/_cjs/dev/vue');
require('../../progress/progress-circular/progress-circular.component.vue.js');
var progressCircular_component_vue_vue_type_script_lang = require('../../progress/progress-circular/progress-circular.component.vue_vue_type_script_lang.vue.js');

var RemoteComponent = /** @class */ (function (_super) {
    _tslib.__extends(RemoteComponent, _super);
    function RemoteComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.response = null;
        _this.bag = {};
        _this.remote = new remote_module.RemoteModule();
        return _this;
    }
    Object.defineProperty(RemoteComponent.prototype, "waiting", {
        get: function () { return this.response === null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RemoteComponent.prototype, "fetching", {
        get: function () { return this.response !== null && this.response.status === constants.HttpResponseStatus.Pending; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RemoteComponent.prototype, "error", {
        get: function () { return this.response !== null && this.response.status === constants.HttpResponseStatus.Error; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RemoteComponent.prototype, "ready", {
        get: function () { return this.response !== null && this.response.status === constants.HttpResponseStatus.Success; },
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
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], RemoteComponent.prototype, "url", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], RemoteComponent.prototype, "endpoint", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], RemoteComponent.prototype, "model", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: constants.HttpMethod.GET, transform: function (value) { return ensureInEnum.ensureInEnum(value, constants.HttpMethod, constants.HttpMethod.GET); } }),
        _tslib.__metadata("design:type", String)
    ], RemoteComponent.prototype, "method", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Object, default: {} }),
        _tslib.__metadata("design:type", Object)
    ], RemoteComponent.prototype, "urlParams", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Object, default: {} }),
        _tslib.__metadata("design:type", Object)
    ], RemoteComponent.prototype, "headers", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Object)
    ], RemoteComponent.prototype, "response", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Object)
    ], RemoteComponent.prototype, "bag", void 0);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], RemoteComponent.prototype, "waiting", null);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], RemoteComponent.prototype, "fetching", null);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], RemoteComponent.prototype, "error", null);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], RemoteComponent.prototype, "ready", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], RemoteComponent.prototype, "update", null);
    _tslib.__decorate([
        watch_decorator.Watch(['url', 'endpoint', 'method', 'model', 'urlParams', 'headers'], { immediate: watch_decorator.ImmediateStrategy.NextTick, deep: true }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], RemoteComponent.prototype, "syncConfigurationProps", null);
    RemoteComponent = _tslib.__decorate([
        component_decorator.Component({
            name: 'bt-remote',
            components: [progressCircular_component_vue_vue_type_script_lang]
        })
    ], RemoteComponent);
    return RemoteComponent;
}(vue.Vue));

module.exports = RemoteComponent;
