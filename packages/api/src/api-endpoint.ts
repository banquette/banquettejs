import { UsageException } from "@banquette/exception";
import {
    HttpMethod,
    PayloadTypeJson,
    ResponseTypeJson,
    HttpRequest,
    HttpRequestBuilder,
    UrlParameterType
} from "@banquette/http";
import { extend } from "@banquette/utils-object/extend";
import { ensureObject } from "@banquette/utils-type/ensure-object";
import { ensureString } from "@banquette/utils-type/ensure-string";
import { isArray } from "@banquette/utils-type/is-array";
import { isFunction } from "@banquette/utils-type/is-function";
import { isObject } from "@banquette/utils-type/is-object";
import { isString } from "@banquette/utils-type/is-string";
import { isType } from "@banquette/utils-type/is-type";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Primitive } from "@banquette/utils-type/types";
import { ValidatorInterface } from "@banquette/validation";
import { ApiEndpointParameterInterface } from "./api-endpoint-parameter.interface";
import { ApiEndpointOptions, ApiEndpointParameterOptions } from "./api-endpoint.options";
import { InvalidParameterException } from "./exception/invalid-parameter.exception";
import { MissingRequiredParameterException } from "./exception/missing-required-parameter.exception";
import { UnsupportedParametersException } from "./exception/unsupported-parameters.exception";

interface ParametersBag {
    url: Record<string, string>;
    query: Record<string, string>;
}

export class ApiEndpoint {
    /**
     * The url of the endpoint.
     * The url can contain variables, surrounded by brackets "{" and "}":
     * e.g.: /user/{id}
     */
    public readonly url: string;

    /**
     * The HTTP method to use when calling the endpoint.
     *
     * Default method is GET.
     */
    public readonly method: HttpMethod;

    /**
     * Allowed url parameters.
     * Each parameter can have a validator associated with it to make it required or validate its value.
     *
     * If a parameter not present in the map is given as input when building the url, an exception
     * will be thrown.
     *
     * To allow any parameter you can use the wildcard ("*") parameter name.
     */
    public readonly parameters: Record<string, ApiEndpointParameterInterface>;

    /**
     * Headers to include when building the request.
     */
    public readonly headers: Record<string, string>;

    /**
     * Type of encoder to use when building the request.
     */
    public readonly payloadType: symbol;

    /**
     * Type of decoder to process the response.
     */
    public readonly responseType: symbol;

    public constructor(options: ApiEndpointOptions|string) {
        if (isString(options)) {
            options = {url: options};
        }
        this.url = this.normalizeUrl(options.url);
        this.method = options.method || HttpMethod.GET;
        this.headers = ensureObject(options.headers);
        this.parameters = extend(this.buildParametersFromUrl(this.url), this.normalizeParameters(options.parameters), true);
        this.payloadType = options.payloadType || PayloadTypeJson;
        this.responseType = options.responseType || ResponseTypeJson;
    }

    /**
     * Try to create an http request for the endpoint.
     */
    public buildRequest(payload: any = null, parameters: Record<string, Primitive> = {}): HttpRequest {
        const parametersBag = this.sortAndValidateParameters(parameters);
        return new HttpRequestBuilder()
            .url(this.url)
            .params(parametersBag.url, UrlParameterType.Url)
            .params(parametersBag.query, UrlParameterType.Query)
            .method(this.method)
            .payload(payload, this.payloadType)
            .responseType(this.responseType)
            .headers(this.headers)
            .getRequest();
    }

    /**
     * Search for parameters in the url and generate a default configuration for them.
     */
    private buildParametersFromUrl(url: string): Record<string, ApiEndpointParameterInterface> {
        const output: Record<string, ApiEndpointParameterInterface> = {};
        const reg: RegExp = new RegExp('{\s*([a-z0-9*._-]+)\s*}', 'gi');
        let matches: RegExpMatchArray|null;
        while ((matches = reg.exec(url)) !== null) {
            if (isArray(matches) && matches.length > 1) {
                output[matches[1]] = {
                    url: true,
                    required: true,
                    defaultValue: undefined,
                    validator: null
                };
            }
        }
        return output;
    }

    /**
     * Separate the parameters given as input into url and query parameters and validate them.
     */
    private sortAndValidateParameters(parameters: Record<string, Primitive>): ParametersBag {
        // Make a copy of the parameters so we don't modify the object given by the user.
        const parametersClone = Object.assign({}, parameters);
        const output: ParametersBag = {url: {}, query: {}};
        const processItem = (name: string, userValue: any, conf: ApiEndpointParameterInterface): string|undefined => {
            if (isUndefined(userValue)) {
                if (!isUndefined(conf.defaultValue)) {
                    userValue = conf.defaultValue;
                } else if (conf.required) {
                    throw new MissingRequiredParameterException(name);
                } else {
                    return ;
                }
            }
            userValue = ensureString(userValue);
            if (conf.validator !== null) {
                const validationResult = conf.validator.validate(userValue);
                if (validationResult.waiting) {
                    throw new UsageException('Asynchronous validators are not supported in parameters.');
                } else if (!validationResult.valid) {
                    throw new InvalidParameterException(
                        name, validationResult.getViolationsArray().join(', ')
                    );
                }
            }
            return userValue;
        };
        let wildcard: ApiEndpointParameterInterface|null = null;
        for (const paramName of Object.keys(this.parameters)) {
            if (paramName === '*') {
                wildcard = this.parameters[paramName];
                continue ;
            }
            const conf = this.parameters[paramName];
            const processed = processItem(paramName, parametersClone[paramName], conf);
            if (!isUndefined(processed)) {
                output[conf.url ? 'url' : 'query'][paramName] = encodeURIComponent(processed);
                delete parametersClone[paramName];
            }
        }
        const remainingParametersNames = Object.keys(parametersClone);
        if (remainingParametersNames.length > 0) {
            if (wildcard === null) {
                throw new UnsupportedParametersException(
                    remainingParametersNames,
                    `The following parameters have not been defined for this endpoint: ${remainingParametersNames.join(', ')}.
                    You can use a wildcard parameter (name it '*') to accept any parameter.`
                );
            }
            for (const paramName of Object.keys(parametersClone)) {
                const processed = processItem(paramName, parametersClone[paramName], wildcard);
                if (!isUndefined(processed)) {
                    output.query[paramName] = processed;
                }
            }
        }
        return output;
    }

    /**
     * Do some basic processing to remove common mistakes in the url.
     */
    private normalizeUrl(url: string): string {
        if (!url.length) {
            return '/';
        }
        url = url.replace(/\\/g, "/").replace(/([^:])(\/\/+)/g, "$1/");
        if (url[0] !== '/' && !url.match(/^[a-z]+:\/\//i)) {
            url = '//' + url;
        }
        return url;
    }

    /**
     * Convert ApiEndpointParameterOptions into ApiEndpointParameterInterface.
     */
    private normalizeParameters(parameters?: Record<string, ApiEndpointParameterOptions>): Record<string, ApiEndpointParameterInterface> {
        if (isUndefined(parameters)) {
            return {};
        }
        const output: Record<string, ApiEndpointParameterInterface> = {};
        for (const key of Object.keys(parameters)) {
            let config = parameters[key];
            if (config === true) {
                config = {required: true};
            } else if (config === null) {
                config = {};
            } else if (isType<ApiEndpointParameterOptions>(config, isObject)) {
                if (isType<ValidatorInterface>(config, (i) => isFunction(i.validate))) {
                    config = {validator: config};
                }
            }
            const inUrl = this.url.match(new RegExp(`{${key}}`)) !== null;
            if (isUndefined(config.required)) {
                config.required = inUrl;
            }
            output[key] = extend({}, [{
                required: false,
                defaultValue: undefined,
                validator: null
            }, config, {
                url: inUrl
            }]);
        }
        return output;
    }
}
