/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata, __param } from '../../_virtual/_tslib.js';
import { ApiEndpoint } from '@banquette/api/api-endpoint';
import { ApiEndpointStorageService } from '@banquette/api/api-endpoint-storage.service';
import { Inject } from '@banquette/dependency-injection/decorator/inject.decorator';
import { Module } from '@banquette/dependency-injection/decorator/module.decorator';
import { Injector } from '@banquette/dependency-injection/injector';
import { UsageException } from '@banquette/exception/usage.exception';
import { HttpMethod } from '@banquette/http/constants';
import { HttpRequestFactory } from '@banquette/http/http-request.factory';
import { ensureInEnum } from '@banquette/utils-array/ensure-in-enum';
import { proxy } from '@banquette/utils-misc/proxy';
import { isObject } from '@banquette/utils-type/is-object';
import { Ajax, AutoPayloadSymbol } from '@banquette/validation/type/ajax';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { ValidatorComponent } from './validator.component.js';

var ValidateAjaxComponent = /** @class */ (function (_super) {
    __extends(ValidateAjaxComponent, _super);
    function ValidateAjaxComponent(api) {
        var _this = _super.call(this) || this;
        _this.api = api;
        return _this;
    }
    ValidateAjaxComponent_1 = ValidateAjaxComponent;
    /**
     * @inheritDoc
     */
    ValidateAjaxComponent.prototype.buildValidator = function () {
        var endpoint = null;
        if (this.endpoint) {
            endpoint = this.api.getEndpoint(this.endpoint);
        }
        else if (this.url) {
            endpoint = new ApiEndpoint({
                url: this.url,
                method: this.method
            });
        }
        if (!endpoint) {
            throw new UsageException('You must define an endpoint or a url to call.');
        }
        return Ajax(HttpRequestFactory.Create({
            url: endpoint.url,
            method: endpoint.method,
            params: this.urlParams,
            payload: AutoPayloadSymbol
        }), proxy(this.handleResponse, this), { message: this.message, type: this.type, tags: this.tags, groups: this.groups });
    };
    /**
     * Handle the server response.
     */
    ValidateAjaxComponent.prototype.handleResponse = function (response, result) {
        if (response.isCanceled) {
            return;
        }
        var valid = response.httpStatusCode === 200 || response.httpStatusCode === 202;
        if (this.responseProperty) {
            valid = isObject(response.result) && !!response.result[this.responseProperty];
        }
        if (!valid) {
            result.addViolation(this.type || 'ajax', this.message);
        }
    };
    var ValidateAjaxComponent_1;
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], ValidateAjaxComponent.prototype, "url", void 0);
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], ValidateAjaxComponent.prototype, "endpoint", void 0);
    __decorate([
        Prop({ type: Object, default: {} }),
        __metadata("design:type", Object)
    ], ValidateAjaxComponent.prototype, "urlParams", void 0);
    __decorate([
        Prop({ type: String, transform: function (value) { return ensureInEnum(value, HttpMethod, HttpMethod.POST); } }),
        __metadata("design:type", String)
    ], ValidateAjaxComponent.prototype, "method", void 0);
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], ValidateAjaxComponent.prototype, "responseProperty", void 0);
    ValidateAjaxComponent = ValidateAjaxComponent_1 = __decorate([
        Module(),
        Component({
            name: 'bt-validate-ajax',
            template: false,
            factory: function () { return Injector.Get(ValidateAjaxComponent_1); }
        }),
        __param(0, Inject(ApiEndpointStorageService)),
        __metadata("design:paramtypes", [ApiEndpointStorageService])
    ], ValidateAjaxComponent);
    return ValidateAjaxComponent;
}(ValidatorComponent));

export { ValidateAjaxComponent as default };
