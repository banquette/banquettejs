import { isArray, isUndefined, Primitive, StringEnum, } from '@banquette/utils-type';
import { HttpMethod, UrlParameterType } from './constants';
import { UrlParameterInterface } from './url-parameter.interface';

export abstract class AbstractRequestBuilder<ResultType> {
    protected _method?: StringEnum<HttpMethod>;
    protected _url?: string | null;
    protected _payload?: any;
    protected _payloadType?: symbol;
    protected _responseType?: symbol;
    protected _headers?: Record<string, Primitive>;
    protected _timeout?: number | null;
    protected _withCredentials?: boolean;
    protected _mimeType?: string | null;
    protected _retry?: number | null;
    protected _retryDelay?: number | 'auto' | null;
    protected _priority?: number;
    protected _params?: Record<string, UrlParameterInterface>;
    protected _tags?: symbol[];
    protected _extras?: Record<string, any>;
    protected _cacheInMemory: boolean = false;

    /**
     * Set the method to GET (the default value).
     */
    public get(): this {
        this._method = HttpMethod.GET;
        return this;
    }

    /**
     * Set the method to POST.
     */
    public post(): this {
        this._method = HttpMethod.POST;
        return this;
    }

    /**
     * Set the method to PUT.
     */
    public put(): this {
        this._method = HttpMethod.PUT;
        return this;
    }

    /**
     * Set the method to DELETE.
     */
    public delete(): this {
        this._method = HttpMethod.DELETE;
        return this;
    }

    /**
     * Set the HTTP method to use.
     */
    public method(method: StringEnum<HttpMethod>): this {
        this._method = method;
        return this;
    }

    /**
     * Set the url to call.
     */
    public url(url: string | null): this {
        this._url = url;
        return this;
    }

    /**
     * Add multiple url parameters.
     */
    public params(
        params: Record<string, Primitive>,
        type: UrlParameterType = UrlParameterType.Auto
    ): this {
        for (const name of Object.keys(params)) {
            this.param(name, params[name], type);
        }
        return this;
    }

    /**
     * Add a url parameter.
     */
    public param(
        name: string,
        value: Primitive,
        type: UrlParameterType = UrlParameterType.Auto
    ): this {
        if (isUndefined(this._params)) {
            this._params = {};
        }
        this._params[name] = { type, value: String(value) };
        return this;
    }

    /**
     * Remove all url parameters.
     */
    public clearParams(): this {
        this._params = {};
        return this;
    }

    /**
     * Merge multiple headers with the ones already set.
     */
    public headers(headers: Record<string, Primitive>): this {
        if (isUndefined(this._headers)) {
            this._headers = {};
        }
        Object.assign(this._headers, headers);
        return this;
    }

    /**
     * Set a header.
     */
    public header(name: string, value: Primitive): this {
        if (isUndefined(this._headers)) {
            this._headers = {};
        }
        this._headers[name] = value;
        return this;
    }
    /**
     * Remove all headers.
     */
    public clearHeaders(): this {
        this._headers = {};
        return this;
    }

    /**
     * Set a generic body for the request.
     */
    public payload(payload: any, type?: symbol): this {
        this._payload = !isUndefined(payload) ? payload : null;
        if (!isUndefined(type)) {
            this._payloadType = type;
        }
        return this;
    }

    /**
     * Set the expected format of the response.
     */
    public responseType(type?: symbol): this {
        this._responseType = type;
        return this;
    }

    /**
     * Set the maximum number of time the request can be replayed in case of a network error.
     */
    public retry(count: number | null): this {
        this._retry = count;
        return this;
    }

    /**
     * Time to wait (in ms) between each try.
     * If set to 'auto', an exponential backoff retry strategy is used.
     */
    public retryDelay(delay: number | 'auto' | null): this {
        this._retryDelay = delay;
        return this;
    }

    /**
     * The higher priority requests are executed first.
     */
    public priority(priority: number): this {
        this._priority = priority;
        return this;
    }

    /**
     * Set the maximum time the request can take.
     */
    public timeout(timeout: number | null): this {
        this._timeout = timeout;
        return this;
    }

    /**
     * If true, cookies and auth headers are included in the request.
     */
    public withCredentials(value: boolean): this {
        this._withCredentials = value;
        return this;
    }

    /**
     * Set the mime type of the payload.
     */
    public mimeType(mimeType: string | null): this {
        this._mimeType = mimeType;
        return this;
    }

    /**
     * Add multiple tags to the request.
     */
    public tags(tags: symbol[]): this {
        if (!isArray(this._tags)) {
            this._tags = [];
        }
        this._tags = this._tags.concat(tags);
        return this;
    }

    /**
     * Add a tag to the request.
     */
    public tag(tag: symbol): this {
        if (!isArray(this._tags)) {
            this._tags = [];
        }
        this._tags.push(tag);
        return this;
    }
    /**
     * Remove all tags.
     */
    public clearTags(): this {
        this._tags = [];
        return this;
    }

    /**
     * Merge an object of extra with the current one.
     */
    public extras(extras: Record<string, any>): this {
        if (isUndefined(this._extras)) {
            this._extras = {};
        }
        Object.assign(this._extras, extras);
        return this;
    }

    /**
     * Set an extra value that will not be used by the service but will still be accessible in the request.
     * You can use this to identify your request for example.
     */
    public extra(name: string, value: string): this {
        if (isUndefined(this._extras)) {
            this._extras = {};
        }
        this._extras[name] = value;
        return this;
    }

    /**
     * Remove all extras.
     */
    public clearExtras(): this {
        this._extras = {};
        return this;
    }

    /**
     * Set the url to call.
     */
    public cacheInMemory(cache: boolean): this {
        this._cacheInMemory = cache;
        return this;
    }

    /**
     * Get the resulting request.
     */
    public abstract getRequest(): ResultType;
}
