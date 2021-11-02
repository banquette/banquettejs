import { HttpMethod, PayloadTypeJson, ResponseTypeJson, HttpRequest, HttpRequestBuilder } from "@banquette/http";
import { ApiEndpointParameterInterface } from "./api-endpoint-parameter.interface";
import { ensureObject, isObject, isUndefined, isFunction, isString, ensureString, isType } from "@banquette/utils-type";
import { ApiEndpointOptions, ApiEndpointParameterOptions } from "./api-endpoint.options";
import { ValidatorInterface } from "@banquette/validation";
import { MissingRequiredParameterException } from "./exception/missing-required-parameter.exception";
import { extend } from "@banquette/utils-object";
import { UsageException } from "@banquette/exception";
import { InvalidParameterException } from "./exception/invalid-parameter.exception";
import { replaceStringVariables } from "@banquette/utils-string";
import { UnsupportedParametersException } from "./exception/unsupported-parameters.exception";
import { ApiEndpointsConfigurationInterface } from "./api-endpoints-configuration.interface";
import { Injector } from "@banquette/dependency-injection";
import { SharedConfiguration } from "@banquette/config";
import { ApiConfigurationSymbol } from "./config";
import { ApiConfigurationInterface } from "./api-configuration.interface";
import qs from 'qs';

interface ParametersBag {
    url: Record<string, string>;
    query: Record<string, string>;
}

export class ApiEndpoint {
    private static Configuration: ApiEndpointsConfigurationInterface|null = null;

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
        this.parameters = this.normalizeParameters(options.parameters);
        this.payloadType = options.payloadType || PayloadTypeJson;
        this.responseType = options.responseType || ResponseTypeJson;
    }

    /**
     * Try to create an http request for the endpoint.
     */
    public buildRequest(payload: any = null, urlParameters: Record<string, string> = {}): HttpRequest {
        return new HttpRequestBuilder()
            .url(this.buildUrl(urlParameters))
            .method(this.method)
            .payload(payload, this.payloadType)
            .responseType(this.responseType)
            .headers(this.headers)
            .getRequest();
    }

    /**
     * Try to generate a final url for this endpoint by integrating the parameters given as input.
     * This method may throw if parameters are missing or don't obey set rules.
     */
    public buildUrl(parameters: Record<string, string>): string {
        let url = this.url;
        const parametersBag = this.sortAndValidateParameters(parameters);
        if (Object.keys(parametersBag.url).length > 0) {
            url = replaceStringVariables(url, parametersBag.url, '{', '}');
        }
        if (Object.keys(parametersBag.query).length > 0) {
            if (url.indexOf('?') > -1) {
                const existingParams = qs.parse(url.substring(url.indexOf('?') + 1));
                parametersBag.query = extend({}, [existingParams, parametersBag.query]);
                url = url.substring(0, url.indexOf('?'));
            }
            url += '?' + qs.stringify(parametersBag.query, ApiEndpoint.GetConfiguration().queryString);
        }
        return url;
    }

    /**
     * Separate the parameters given as input into url and query parameters and validate them.
     */
    private sortAndValidateParameters(parameters: Record<string, string>): ParametersBag {
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

    /**
     * Get the configuration.
     * Not injected in the constructor to keep the creation of endpoints out of the injector.
     */
    private static GetConfiguration(): ApiEndpointsConfigurationInterface {
        if (ApiEndpoint.Configuration === null) {
            ApiEndpoint.Configuration = Injector.Get(SharedConfiguration)
                .get<ApiConfigurationInterface>(ApiConfigurationSymbol).endpoints;
        }
        return ApiEndpoint.Configuration;
    }
}
