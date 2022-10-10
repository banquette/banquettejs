/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var apiEndpoint = require('@banquette/api/_cjs/dev/api-endpoint');
var apiEndpointStorage_service = require('@banquette/api/_cjs/dev/api-endpoint-storage.service');
var inject_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/inject.decorator');
var module_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/module.decorator');
var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var constants = require('@banquette/http/_cjs/dev/constants');
var httpRequest_factory = require('@banquette/http/_cjs/dev/http-request.factory');
var ensureInEnum = require('@banquette/utils-array/_cjs/dev/ensure-in-enum');
var proxy = require('@banquette/utils-misc/_cjs/dev/proxy');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var ajax = require('@banquette/validation/_cjs/dev/type/ajax');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var validator_component = require('./validator.component.js');

var ValidateAjaxComponent = /** @class */ (function (_super) {
    _tslib.__extends(ValidateAjaxComponent, _super);
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
            endpoint = new apiEndpoint.ApiEndpoint({
                url: this.url,
                method: this.method
            });
        }
        if (!endpoint) {
            throw new usage_exception.UsageException('You must define an endpoint or a url to call.');
        }
        return ajax.Ajax(httpRequest_factory.HttpRequestFactory.Create({
            url: endpoint.url,
            method: endpoint.method,
            params: this.urlParams,
            payload: ajax.AutoPayloadSymbol
        }), proxy.proxy(this.handleResponse, this), { message: this.message, type: this.type, tags: this.tags, groups: this.groups });
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
            valid = isObject.isObject(response.result) && !!response.result[this.responseProperty];
        }
        if (!valid) {
            result.addViolation(this.type || 'ajax', this.message);
        }
    };
    var ValidateAjaxComponent_1;
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], ValidateAjaxComponent.prototype, "url", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], ValidateAjaxComponent.prototype, "endpoint", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Object, default: {} }),
        _tslib.__metadata("design:type", Object)
    ], ValidateAjaxComponent.prototype, "urlParams", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, transform: function (value) { return ensureInEnum.ensureInEnum(value, constants.HttpMethod, constants.HttpMethod.POST); } }),
        _tslib.__metadata("design:type", String)
    ], ValidateAjaxComponent.prototype, "method", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], ValidateAjaxComponent.prototype, "responseProperty", void 0);
    ValidateAjaxComponent = ValidateAjaxComponent_1 = _tslib.__decorate([
        module_decorator.Module(),
        component_decorator.Component({
            name: 'bt-validate-ajax',
            template: false,
            factory: function () { return injector.Injector.Get(ValidateAjaxComponent_1); }
        }),
        _tslib.__param(0, inject_decorator.Inject(apiEndpointStorage_service.ApiEndpointStorageService)),
        _tslib.__metadata("design:paramtypes", [apiEndpointStorage_service.ApiEndpointStorageService])
    ], ValidateAjaxComponent);
    return ValidateAjaxComponent;
}(validator_component.ValidatorComponent));

module.exports = ValidateAjaxComponent;
