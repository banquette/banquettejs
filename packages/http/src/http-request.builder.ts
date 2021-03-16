import { UsageException } from "@banquette/core";
import { extend, isUndefined } from "@banquette/utils";
import { HttpMethod, ResponseTypeAutoDetect } from "./constants";
import { PayloadTypeFormData } from "./encoder/form-data.encoder";
import { HttpRequest } from "./http-request";
import { HttpRequestFactory } from "./http-request.factory";

export class HttpRequestBuilder {
    private _method: HttpMethod = HttpMethod.GET;
    private _url!: string;
    private _payload: any = null;
    private _payloadType: symbol = PayloadTypeFormData;
    private _responseType: symbol = ResponseTypeAutoDetect;
    private _headers: Record<string, string> = {};
    private _timeout: number = 30000;
    private _mimeType: string|null = null;
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
     * Set the whole headers object, removing all previously set headers.
     */
    public headers(headers: Record<string, string>): HttpRequestBuilder {
        this._headers = extend({}, headers);
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
     * Set the maximum time the request can take.
     */
    public timeout(timeout: number): HttpRequestBuilder {
        this._timeout = timeout;
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
     * Replace the current extra object by the one in parameter.
     * No copy is made so the actual reference you give will be stored in the request.
     */
    public extras(extras: Record<string, any>): HttpRequestBuilder {
        this._extras = extras;
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
     * Get the resulting request.
     */
    public getRequest(): HttpRequest {
        if (!this._url) {
            throw new UsageException('You must define an URL.');
        }
        return HttpRequestFactory.Create({
            method: this._method,
            url: this._url,
            payload: this._payload,
            payloadType: this._payloadType,
            responseType: this._responseType,
            headers: this._headers,
            timeout: this._timeout,
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
