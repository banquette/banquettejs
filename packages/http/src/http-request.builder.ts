import { UsageException } from "@banquette/exception";
import { isUndefined, Primitive } from "@banquette/utils-type";
import { HttpMethod, UrlParameterType } from "./constants";
import { ResponseTypeAutoDetect } from "./decoder/auto-detect.decoder";
import { PayloadTypeFormData } from "./encoder/form-data.encoder";
import { HttpRequest } from "./http-request";
import { HttpRequestFactory } from "./http-request.factory";
import { UrlParameterInterface } from "./url-parameter.interface";

export class HttpRequestBuilder {
    private _method: HttpMethod = HttpMethod.GET;
    private _url!: string;
    private _payload: any = null;
    private _payloadType: symbol = PayloadTypeFormData;
    private _responseType: symbol = ResponseTypeAutoDetect;
    private _headers: Record<string, string> = {};
    private _timeout: number|null = null;
    private _withCredentials: boolean|null = null;
    private _mimeType: string|null = null;
    private _retry: number|null = null;
    private _retryDelay: number|'auto'|null = null;
    private _priority: number|null = null;
    private _params: Record<string, UrlParameterInterface> = {};
    private _extras: Record<string, any> = {};

    /**
     * Set the method to GET (the default value).
     */
    public get(): HttpRequestBuilder {
        this._method = HttpMethod.GET;
        return this;
    }

    /**
     * Set the method to POST.
     */
    public post(): HttpRequestBuilder {
        this._method = HttpMethod.POST;
        return this;
    }

    /**
     * Set the method to PUT.
     */
    public put(): HttpRequestBuilder {
        this._method = HttpMethod.POST;
        return this;
    }

    /**
     * Set the method to DELETE.
     */
    public delete(): HttpRequestBuilder {
        this._method = HttpMethod.DELETE;
        return this;
    }

    /**
     * Set the HTTP method to use.
     */
    public method(method: HttpMethod): HttpRequestBuilder {
        this._method = method;
        return this;
    }

    /**
     * Set the url to call.
     */
    public url(url: string): HttpRequestBuilder {
        this._url = url;
        return this;
    }

    /**
     * Add multiple url parameters.
     */
    public params(params: Record<string, Primitive>, type: UrlParameterType = UrlParameterType.Auto): HttpRequestBuilder {
        for (const name of Object.keys(params)) {
            this.param(name, params[name], type);
        }
        return this;
    }

    /**
     * Add a url parameter.
     */
    public param(name: string, value: Primitive, type: UrlParameterType = UrlParameterType.Auto): HttpRequestBuilder {
        this._params[name] = {type, value: String(value)};
        return this;
    }

    /**
     * Remove all url parameters.
     */
    public clearParams(): HttpRequestBuilder {
        this._params = {};
        return this;
    }

    /**
     * Merge multiple headers with the ones already set.
     */
    public headers(headers: Record<string, string>): HttpRequestBuilder {
        Object.assign(this._headers, headers);
        return this;
    }

    /**
     * Set a header.
     */
    public header(name: string, value: string): HttpRequestBuilder {
        this._headers[name] = value;
        return this;
    }
    /**
     * Remove all headers.
     */
    public clearHeaders(): HttpRequestBuilder {
        this._headers = {};
        return this;
    }


    /**
     * Set a generic body for the request.
     */
    public payload(payload: any, type?: symbol): HttpRequestBuilder {
        this._payload = !isUndefined(payload) ? payload : null;
        if (!isUndefined(type)) {
            this._payloadType = type;
        }
        return this;
    }

    /**
     * Set the expected format of the response.
     */
    public responseType(type: symbol): HttpRequestBuilder {
        this._responseType = type;
        return this;
    }

    /**
     * Set the maximum number of time the request can be replayed in case of a network error.
     */
    public retry(count: number|null): HttpRequestBuilder {
        this._retry = count;
        return this;
    }

    /**
     * Time to wait (in ms) between each try.
     * If set to 'auto', an exponential backoff retry strategy is used.
     */
    public retryDelay(delay: number|'auto'|null): HttpRequestBuilder {
        this._retryDelay = delay;
        return this;
    }

    /**
     * The higher priority requests are executed first.
     */
    public priority(priority: number): HttpRequestBuilder {
        this._priority = priority;
        return this;
    }

    /**
     * Set the maximum time the request can take.
     */
    public timeout(timeout: number): HttpRequestBuilder {
        this._timeout = timeout;
        return this;
    }

    /**
     * If true, cookies and auth headers are included in the request.
     */
    public withCredentials(value: boolean): HttpRequestBuilder {
        this._withCredentials = value;
        return this;
    }

    /**
     * Set the mime type of the payload.
     */
    public mimeType(mimeType: string|null): HttpRequestBuilder {
        this._mimeType = mimeType;
        return this;
    }

    /**
     * Merge an object of extra with the current one.
     */
    public extras(extras: Record<string, any>): HttpRequestBuilder {
        Object.assign(this._extras, extras);
        return this;
    }

    /**
     * Set an extra value that will not be used by the service but will still be accessible in the request.
     * You can use this to identify your request for example.
     */
    public extra(name: string, value: string): HttpRequestBuilder {
        this._extras[name] = value;
        return this;
    }

    /**
     * Remove all extras.
     */
    public clearExtras(): HttpRequestBuilder {
        this._extras = {};
        return this;
    }

    /**
     * Get the resulting request.
     */
    public getRequest(): HttpRequest {
        if (!this._url) {
            throw new UsageException('You must define an URL.');
        }
        return HttpRequestFactory.Create({
            method: this._method,
            url: this._url,
            params: this._params,
            payload: this._payload,
            payloadType: this._payloadType,
            responseType: this._responseType,
            headers: this._headers,
            timeout: this._timeout,
            retry: this._retry,
            retryDelay: this._retryDelay,
            priority: this._priority,
            withCredentials: this._withCredentials,
            mimeType: this._mimeType,
            extras: this._extras
        });
    }

    /**
     * Create a new instance of the builder.
     */
    public static Create(): HttpRequestBuilder {
        return new HttpRequestBuilder();
    }
}
