import { SharedConfiguration } from "@banquette/config/config/shared-configuration";
import { Injector } from "@banquette/dependency-injection/injector";
import { UsageException } from "@banquette/exception/usage.exception";
import { cloneDeep } from "@banquette/utils-object/clone-deep";
import { extend } from "@banquette/utils-object/extend";
import { replaceStringVariables } from "@banquette/utils-string/format/replace-string-variables";
import { Writeable, Primitive, VoidCallback } from "@banquette/utils-type/types";
import { AdapterInterface } from "./adapter/adapter.interface";
import { HttpConfigurationSymbol } from "./config";
import { HttpMethod, UrlParameterType } from "./constants";
import { HeadersBag } from "./headers-bag";
import { HttpConfigurationInterface } from "./http-configuration.interface";
import { HttpResponse } from "./http-response";
import { UrlParameterInterface } from "./url-parameter.interface";
import qs from 'qs';

let Configuration: HttpConfigurationInterface|null = null;

export class HttpRequest {
    private static MaxId = 0;

    /**
     * Unique id of the response.
     */
    public readonly id =  ++HttpRequest.MaxId;

    /**
     * The adapter in use to make the actual HTTP call.
     */
    public readonly adapter!: AdapterInterface;

    /**
     * The response of the request.
     */
    public readonly response!: HttpResponse<any>;

    /**
     * Number of times the request tried to execute.
     */
    public readonly tryCount: number = 0;

    /**
     * Headers to send with the request.
     */
    public readonly headers: HeadersBag;

    /**
     * The static url is the finalize version of the url, including all parameters.
     * This is the url ready to be used.
     */
    public get staticUrl(): string {
        const paramsNames = Object.keys(this.params);
        if (!paramsNames.length) {
            return this.url;
        }
        let queryParams: Record<string, string> = {};
        const urlParams: Record<string, string> = {};
        const urlVars = this.extractUrlVariables(this.url);
        for (const paramName of paramsNames) {
            const param = this.params[paramName];
            if (param.type === UrlParameterType.Auto) {
                param.type = urlVars.indexOf(paramName) > -1 ? UrlParameterType.Url : UrlParameterType.Query;
            }
            if (param.type === UrlParameterType.Url) {
                urlParams[paramName] = param.value;
            } else {
                queryParams[paramName] = param.value;
            }
        }
        let url = replaceStringVariables(this.url, urlParams, '{', '}');
        if (Object.keys(queryParams).length > 0) {
            if (url.indexOf('?') > -1) {
                const existingParams = qs.parse(url.substring(url.indexOf('?') + 1));
                queryParams = extend({}, [existingParams, queryParams]);
                url = url.substring(0, url.indexOf('?'));
            }
            url += '?' + qs.stringify(queryParams, HttpRequest.GetConfiguration().queryString);
        }
        return url;
    }

    /**
     * Track if the request has been canceled BEFORE the adapter is set.
     */
    private canceled: boolean = false;
    private cancelCallback: VoidCallback|null = null;

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
    public constructor(public method: HttpMethod,
                       public url: string,
                       public params: Record<string, UrlParameterInterface>,
                       public payload: any,
                       public payloadType: symbol,
                       public responseType: symbol,
                       headers: HeadersBag|Record<string, Primitive>,
                       public timeout: number|null,
                       public retry: number|null,
                       public retryDelay: number|'auto'|null,
                       public priority: number,
                       public withCredentials: boolean,
                       public mimeType: string|null,
                       public tags: symbol[],
                       public extras: Record<string, any>) {
        this.headers = headers instanceof HeadersBag ? headers : HeadersBag.FromMap(headers);
    }

    public incrementTryCount(): void {
        (this as Writeable<HttpRequest>).tryCount = this.tryCount + 1;
    }

    /**
     * Set the adapter in use for this request.
     */
    public setAdapter(adapter: AdapterInterface): void {
        if (this.adapter) {
            throw new UsageException('An adapter has already been set.');
        }
        (this as Writeable<HttpRequest>).adapter = adapter;
        if (this.canceled) {
            adapter.cancel();
        }
    }

    /**
     * Set the response object for this request.
     */
    public setResponse(response: HttpResponse<any>): void {
        if (this.response) {
            throw new UsageException('A response has already been set.');
        }
        (this as Writeable<HttpRequest>).response = response;
    }

    /**
     * Set an url parameter.
     */
    public setParam(name: string, value: Primitive, type: UrlParameterType = UrlParameterType.Auto): void {
        this.params[name] = {type, value: String(value)};
    }

    /**
     * A callback that is called when the request is canceled.
     */
    public setCancelCallback(callback: VoidCallback): void {
        this.cancelCallback = callback;
    }

    /**
     * Cancel the request.
     */
    public cancel(): void {
        if (!this.adapter) {
            if (this.cancelCallback) {
                this.cancelCallback();
            }
            this.canceled = true;
            return ;
        }
        this.adapter.cancel();
    }

    /**
     * Create a new HttpRequest object with the same parameters as the current one,
     * ready to be sent to the HttpService.
     *
     * This is useful if you want to make the same request again, as you cannot use the same HttpRequest object.
     */
    public clone(): HttpRequest {
        return new HttpRequest(
            this.method,
            this.url,
            Object.assign({}, this.params),
            cloneDeep(this.payload),
            this.payloadType,
            this.responseType,
            Object.assign({}, this.headers),
            this.timeout,
            this.retry,
            this.retryDelay,
            this.priority,
            this.withCredentials,
            this.mimeType,
            this.tags,
            cloneDeep(this.extras)
        );
    }

    /**
     * Extract variables names from a url.
     */
    private extractUrlVariables(url: string): string[] {
        let output: string[] = [], matches;
        const reg = new RegExp('{([a-z0-9*._-]+)}', 'gi');
        while ((matches = reg.exec(url)) !== null) {
            output.push(matches[1]);
        }
        return output;
    }

    /**
     * Get the configuration.
     * Not injected in the constructor to keep the creation of endpoints out of the injector.
     */
    private static GetConfiguration(): HttpConfigurationInterface {
        if (Configuration === null) {
            Configuration = Injector.Get(SharedConfiguration).get<HttpConfigurationInterface>(HttpConfigurationSymbol);
        }
        return Configuration;
    }
}
