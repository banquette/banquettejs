/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var constants = require('@banquette/http/_cjs/dev/constants');
var json_decoder = require('@banquette/http/_cjs/dev/decoder/json.decoder');
var json_encoder = require('@banquette/http/_cjs/dev/encoder/json.encoder');
var httpRequest_builder = require('@banquette/http/_cjs/dev/http-request.builder');
var extend = require('@banquette/utils-object/_cjs/dev/extend');
var ensureObject = require('@banquette/utils-type/_cjs/dev/ensure-object');
var ensureString = require('@banquette/utils-type/_cjs/dev/ensure-string');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isFunction = require('@banquette/utils-type/_cjs/dev/is-function');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var isType = require('@banquette/utils-type/_cjs/dev/is-type');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var apiEndpointOverride = require('./api-endpoint-override.js');
var invalidParameter_exception = require('./exception/invalid-parameter.exception.js');
var missingRequiredParameter_exception = require('./exception/missing-required-parameter.exception.js');
var unsupportedParameters_exception = require('./exception/unsupported-parameters.exception.js');

var ApiEndpoint = /** @class */ (function () {
    function ApiEndpoint(options) {
        /**
         * Maximum duration of the request (in milliseconds).
         */
        this.timeout = null;
        /**
         * If true, cookies and auth headers are included in the request.
         */
        this.withCredentials = false;
        /**
         * MimeType of the payload.
         */
        this.mimeType = null;
        /**
         * Maximum number of tries allowed for the request.
         */
        this.retry = null;
        /**
         * Time to wait before trying again in case of error.
         */
        this.retryDelay = null;
        /**
         * The higher the priority the sooner the request will be executed when the queue contains multiple requests.
         */
        this.priority = null;
        /**
         * Tags that will be sent with emitted events.
         */
        this.tags = [];
        /**
         * Any additional data that will be added to the request.
         */
        this.extras = {};
        if (isString.isString(options)) {
            options = { url: options };
        }
        this.url = this.normalizeUrl(options.url);
        this.method = options.method || constants.HttpMethod.GET;
        this.headers = ensureObject.ensureObject(options.headers);
        this.params = extend.extend(this.buildParametersFromUrl(this.url), this.normalizeParameters(options.params), true);
        this.payloadType = options.payloadType || json_encoder.PayloadTypeJson;
        this.responseType = options.responseType || json_decoder.ResponseTypeJson;
    }
    ApiEndpoint.prototype.buildRequest = function (payload, paramsOrConfiguration) {
        var optionsOverrides = paramsOrConfiguration instanceof apiEndpointOverride.ApiEndpointOverride ? paramsOrConfiguration : null;
        var swap = function (key, defaultValue) {
            return optionsOverrides !== null && !isUndefined.isUndefined(optionsOverrides[key]) ? optionsOverrides[key] : defaultValue;
        };
        var finalParameters = swap('params', optionsOverrides === null ? paramsOrConfiguration : {});
        // Try to inject missing parameters from the payload.
        if (isObject.isObject(payload)) {
            for (var _i = 0, _a = Object.keys(payload); _i < _a.length; _i++) {
                var prop = _a[_i];
                if (!isUndefined.isUndefined(this.params[prop]) && isUndefined.isUndefined(finalParameters[prop])) {
                    finalParameters[prop] = payload[prop];
                }
            }
        }
        var parametersBag = this.sortAndValidateParameters(finalParameters);
        return new httpRequest_builder.HttpRequestBuilder()
            .url(this.url)
            .params(parametersBag.url, constants.UrlParameterType.Url)
            .params(parametersBag.query, constants.UrlParameterType.Query)
            .method(swap('method', this.method))
            .payload(payload, swap('payloadType', this.payloadType))
            .responseType(swap('responseType', this.responseType))
            .timeout(swap('timeout', this.timeout))
            .withCredentials(swap('withCredentials', this.withCredentials))
            .mimeType(swap('mimeType', this.mimeType))
            .retry(swap('retry', this.retry))
            .retryDelay(swap('retryDelay', this.retryDelay))
            .headers(swap('headers', this.headers))
            .tags(swap('tags', this.tags))
            .extras(swap('extras', this.extras))
            .getRequest();
    };
    /**
     * Search for parameters in the url and generate a default configuration for them.
     */
    ApiEndpoint.prototype.buildParametersFromUrl = function (url) {
        var output = {};
        var reg = new RegExp('{\\s*([a-z0-9*._-]+)\\s*}', 'gi');
        var matches;
        while ((matches = reg.exec(url)) !== null) {
            if (isArray.isArray(matches) && matches.length > 1) {
                output[matches[1]] = {
                    url: true,
                    required: true,
                    defaultValue: undefined,
                    validator: null
                };
            }
        }
        return output;
    };
    /**
     * Separate the parameters given as input into url and query parameters and validate them.
     *
     * @throws UsageException
     * @throws InvalidParameterException
     * @throws UnsupportedParametersException
     * @throws MissingRequiredParameterException
     */
    ApiEndpoint.prototype.sortAndValidateParameters = function (parameters) {
        // Make a copy of the parameters so we don't modify the object given by the user.
        var parametersClone = Object.assign({}, parameters);
        var output = { url: {}, query: {} };
        var processItem = function (name, userValue, conf) {
            if (isUndefined.isUndefined(userValue)) {
                if (!isUndefined.isUndefined(conf.defaultValue)) {
                    userValue = conf.defaultValue;
                }
                else if (conf.required) {
                    throw new missingRequiredParameter_exception.MissingRequiredParameterException(name);
                }
                else {
                    return;
                }
            }
            userValue = ensureString.ensureString(userValue);
            if (conf.validator !== null) {
                var validationResult = conf.validator.validate(userValue);
                if (validationResult.waiting) {
                    throw new usage_exception.UsageException('Asynchronous validators are not supported in parameters.');
                }
                else if (!validationResult.valid) {
                    throw new invalidParameter_exception.InvalidParameterException(name, validationResult.getViolationsArray().join(', '));
                }
            }
            return userValue;
        };
        var wildcard = null;
        for (var _i = 0, _a = Object.keys(this.params); _i < _a.length; _i++) {
            var paramName = _a[_i];
            if (paramName === '*') {
                wildcard = this.params[paramName];
                continue;
            }
            var conf = this.params[paramName];
            var processed = processItem(paramName, parametersClone[paramName], conf);
            if (!isUndefined.isUndefined(processed)) {
                output[conf.url ? 'url' : 'query'][paramName] = encodeURIComponent(processed);
                delete parametersClone[paramName];
            }
        }
        var remainingParametersNames = Object.keys(parametersClone);
        if (remainingParametersNames.length > 0) {
            if (wildcard === null) {
                throw new unsupportedParameters_exception.UnsupportedParametersException(remainingParametersNames, "The following parameters have not been defined for this endpoint: ".concat(remainingParametersNames.join(', '), ".\n                    You can use a wildcard parameter (name it '*') to accept any parameter."));
            }
            for (var _b = 0, _c = Object.keys(parametersClone); _b < _c.length; _b++) {
                var paramName = _c[_b];
                var processed = processItem(paramName, parametersClone[paramName], wildcard);
                if (!isUndefined.isUndefined(processed)) {
                    output.query[paramName] = processed;
                }
            }
        }
        return output;
    };
    /**
     * Do some basic processing to remove common mistakes in the url.
     */
    ApiEndpoint.prototype.normalizeUrl = function (url) {
        if (!url.length) {
            return '/';
        }
        url = url.replace(/\\/g, "/").replace(/([^:])(\/\/+)/g, "$1/");
        if (url[0] !== '/' && !url.match(/^[a-z]+:\/\//i)) {
            url = '//' + url;
        }
        return url;
    };
    /**
     * Convert ApiEndpointParameterOptions into ApiEndpointParameterInterface.
     */
    ApiEndpoint.prototype.normalizeParameters = function (parameters) {
        if (isUndefined.isUndefined(parameters)) {
            return {};
        }
        var output = {};
        for (var _i = 0, _a = Object.keys(parameters); _i < _a.length; _i++) {
            var key = _a[_i];
            var config = parameters[key];
            if (config === true) {
                config = { required: true };
            }
            else if (config === null) {
                config = {};
            }
            else if (isType.isType(config, isObject.isObject)) {
                if (isType.isType(config, function (i) { return isFunction.isFunction(i.validate); })) {
                    config = { validator: config };
                }
            }
            var inUrl = this.url.match(new RegExp("{".concat(key, "}"))) !== null;
            if (isUndefined.isUndefined(config.required)) {
                config.required = inUrl;
            }
            output[key] = extend.extend({}, [{
                    required: false,
                    defaultValue: undefined,
                    validator: null
                }, config, {
                    url: inUrl
                }]);
        }
        return output;
    };
    return ApiEndpoint;
}());

exports.ApiEndpoint = ApiEndpoint;
