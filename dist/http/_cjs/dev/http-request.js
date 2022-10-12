/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var configuration_service = require('@banquette/config/_cjs/dev/config/configuration.service');
var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var cloneDeep = require('@banquette/utils-object/_cjs/dev/clone-deep');
var extend = require('@banquette/utils-object/_cjs/dev/extend');
var replaceStringVariables = require('@banquette/utils-string/_cjs/dev/format/replace-string-variables');
var config = require('./config.js');
var constants = require('./constants.js');
var headersBag = require('./headers-bag.js');
var qs = require('qs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var qs__default = /*#__PURE__*/_interopDefaultLegacy(qs);

var Configuration = null;
var HttpRequest = /** @class */ (function () {
    /**
     * Create a Request object.
     *
     * @param method            HTTP method.
     * @param url               Base url.
     * @param params            Url parameters.
     * @param payload           Body of the request.
     * @param payloadType       Format of the payload.
     * @param responseType      Format of the response.
     * @param headers           Headers to send with the request.
     * @param timeout           Maximum duration of the request (in milliseconds).
     * @param retry             Maximum number of tries allowed for the request.
     * @param retryDelay        Time to wait before trying again in case of error.
     * @param priority          The higher the priority the sooner the request will be executed when the queue contains multiple requests.
     * @param withCredentials   If true, cookies and auth headers are included in the request.
     * @param mimeType          MimeType of the payload.
     * @param tags              Tags that will be sent with emitted events.
     * @param extras            Any additional data you want to associated with the request.
     *                          This object will not be sent with the request.
     */
    function HttpRequest(method, url, params, payload, payloadType, responseType, headers, timeout, retry, retryDelay, priority, withCredentials, mimeType, tags, extras) {
        this.method = method;
        this.url = url;
        this.params = params;
        this.payload = payload;
        this.payloadType = payloadType;
        this.responseType = responseType;
        this.timeout = timeout;
        this.retry = retry;
        this.retryDelay = retryDelay;
        this.priority = priority;
        this.withCredentials = withCredentials;
        this.mimeType = mimeType;
        this.tags = tags;
        this.extras = extras;
        /**
         * Unique id of the response.
         */
        this.id = ++HttpRequest.MaxId;
        /**
         * Number of times the request tried to execute.
         */
        this.tryCount = 0;
        /**
         * Track if the request has been canceled BEFORE the adapter is set.
         */
        this.canceled = false;
        this.cancelCallback = null;
        this.headers = headers instanceof headersBag.HeadersBag ? headers : headersBag.HeadersBag.FromMap(headers);
    }
    Object.defineProperty(HttpRequest.prototype, "staticUrl", {
        /**
         * The static url is the finalize version of the url, including all parameters.
         * This is the url ready to be used.
         */
        get: function () {
            var paramsNames = Object.keys(this.params);
            if (!paramsNames.length) {
                return this.url;
            }
            var queryParams = {};
            var urlParams = {};
            var urlVars = this.extractUrlVariables(this.url);
            for (var _i = 0, paramsNames_1 = paramsNames; _i < paramsNames_1.length; _i++) {
                var paramName = paramsNames_1[_i];
                var param = this.params[paramName];
                if (param.type === constants.UrlParameterType.Auto) {
                    param.type = urlVars.indexOf(paramName) > -1 ? constants.UrlParameterType.Url : constants.UrlParameterType.Query;
                }
                if (param.type === constants.UrlParameterType.Url) {
                    urlParams[paramName] = param.value;
                }
                else {
                    queryParams[paramName] = param.value;
                }
            }
            var url = replaceStringVariables.replaceStringVariables(this.url, urlParams, '{', '}');
            if (Object.keys(queryParams).length > 0) {
                if (url.indexOf('?') > -1) {
                    var existingParams = qs__default["default"].parse(url.substring(url.indexOf('?') + 1));
                    queryParams = extend.extend({}, [existingParams, queryParams]);
                    url = url.substring(0, url.indexOf('?'));
                }
                url += '?' + qs__default["default"].stringify(queryParams, HttpRequest.GetConfiguration().queryString);
            }
            return url;
        },
        enumerable: false,
        configurable: true
    });
    HttpRequest.prototype.incrementTryCount = function () {
        this.tryCount = this.tryCount + 1;
    };
    /**
     * Set the adapter in use for this request.
     */
    HttpRequest.prototype.setAdapter = function (adapter) {
        if (this.adapter) {
            throw new usage_exception.UsageException('An adapter has already been set.');
        }
        this.adapter = adapter;
        if (this.canceled) {
            adapter.cancel();
        }
    };
    /**
     * Set the response object for this request.
     */
    HttpRequest.prototype.setResponse = function (response) {
        if (this.response) {
            throw new usage_exception.UsageException('A response has already been set.');
        }
        this.response = response;
    };
    /**
     * Set an url parameter.
     */
    HttpRequest.prototype.setParam = function (name, value, type) {
        if (type === void 0) { type = constants.UrlParameterType.Auto; }
        this.params[name] = { type: type, value: String(value) };
    };
    /**
     * A callback that is called when the request is canceled.
     */
    HttpRequest.prototype.setCancelCallback = function (callback) {
        this.cancelCallback = callback;
    };
    /**
     * Cancel the request.
     */
    HttpRequest.prototype.cancel = function () {
        if (!this.adapter) {
            if (this.cancelCallback) {
                this.cancelCallback();
            }
            this.canceled = true;
            return;
        }
        this.adapter.cancel();
    };
    /**
     * Create a new HttpRequest object with the same parameters as the current one,
     * ready to be sent to the HttpService.
     *
     * This is useful if you want to make the same request again, as you cannot use the same HttpRequest object.
     */
    HttpRequest.prototype.clone = function () {
        return new HttpRequest(this.method, this.url, Object.assign({}, this.params), cloneDeep.cloneDeep(this.payload), this.payloadType, this.responseType, Object.assign({}, this.headers), this.timeout, this.retry, this.retryDelay, this.priority, this.withCredentials, this.mimeType, this.tags, cloneDeep.cloneDeep(this.extras));
    };
    /**
     * Extract variables names from a url.
     */
    HttpRequest.prototype.extractUrlVariables = function (url) {
        var output = [], matches;
        var reg = new RegExp('{([a-z0-9*._-]+)}', 'gi');
        while ((matches = reg.exec(url)) !== null) {
            output.push(matches[1]);
        }
        return output;
    };
    /**
     * Get the configuration.
     * Not injected in the constructor to keep the creation of endpoints out of the injector.
     */
    HttpRequest.GetConfiguration = function () {
        if (Configuration === null) {
            Configuration = injector.Injector.Get(configuration_service.ConfigurationService).get(config.HttpConfigurationSymbol);
        }
        return Configuration;
    };
    HttpRequest.MaxId = 0;
    return HttpRequest;
}());

exports.HttpRequest = HttpRequest;