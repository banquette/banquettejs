import { UsageException } from "@banquette/exception";
import { HttpResponse, HttpResponseStatus, RequestException, NetworkException, HttpRequest } from "@banquette/http";
import { ObservablePromise, ResolveCallback, RejectCallback, ProgressCallback } from "@banquette/promise";
import { isPromiseLike } from "@banquette/utils-type/is-promise-like";
import { isType } from "@banquette/utils-type/is-type";
import { Writeable } from "@banquette/utils-type/types";

/**
 * A proxy to HttpResponse<T> making the request nullable.
 * This is required because the creation of http requests can be asynchronous when done through the ModelApiService.
 *
 * @see ModelApiService::buildRequest
 */
export class ApiResponse<T> {
    public readonly httpResponse: HttpResponse<T>|null = null;

    /**
     * HttpResponse proxies.
     */
    public get url(): string|null { return this.getFromHttpResponse('url', null) }
    public get status(): HttpResponseStatus { return this.getFromHttpResponse('status', HttpResponseStatus.Pending) }
    public get httpStatusCode(): number|undefined { return this.getFromHttpResponse('httpStatusCode', undefined) }
    public get httpStatusText(): string|undefined { return this.getFromHttpResponse('httpStatusText', undefined) }
    public get httpHeaders(): Record<string, string> { return this.getFromHttpResponse('httpHeaders', {}) }
    public get isPending(): boolean { return this.getFromHttpResponse('isPending', this.status === HttpResponseStatus.Pending) }
    public get isSuccess(): boolean { return this.getFromHttpResponse('isSuccess', this.status === HttpResponseStatus.Success) }
    public get isError(): boolean { return this.getFromHttpResponse('isError', this.status === HttpResponseStatus.Error) }
    public get isCanceled(): boolean { return this.getFromHttpResponse('isCanceled', this.status === HttpResponseStatus.Canceled) }
    public get error(): RequestException|NetworkException|null { return this.getFromHttpResponse('error', null) }
    public get result(): T|undefined { return this.getFromHttpResponse('result', undefined) }
    public get request(): HttpRequest|null { return this.getFromHttpResponse('request', null) }

    /**
     * Promise that will wrap both the request and http promises.
     */
    public promise: ObservablePromise<HttpResponse<T>>|null = null;
    private promiseResolve!: ResolveCallback<HttpResponse<T>>;
    private promiseReject!: RejectCallback;
    private promiseProgress!: ProgressCallback;

    public constructor(requestOrPromise: HttpRequest|Promise<HttpRequest>) {
        this.promise = new ObservablePromise((resolve, reject, progress) => {
            this.promiseResolve = resolve;
            this.promiseReject = reject;
            this.promiseProgress = progress;
        });
        // If we get a promise instead of a request, we must handle the case it fails.
        // If it succeeds we have nothing to do, setHttpResponse() will be called and we will react to that.
        if (isType<Promise<any>>(requestOrPromise, isPromiseLike)) {
            requestOrPromise.catch(this.promiseReject);
        }
    }


    /**
     * Set the http response.
     */
    public setHttpResponse(response: HttpResponse<T>): void {
        if (this.httpResponse !== null) {
            throw new UsageException('The http response can only be set once.');
        }
        (this as Writeable<ApiResponse<T>>).httpResponse = response;
        response.promise.progress(this.promiseProgress).then(this.promiseResolve).catch(this.promiseReject);
    }

    /**
     * Try to get a value from the real http response.
     */
    private getFromHttpResponse<V, D>(property: keyof HttpResponse<T>, defaultValue: D): V|D {
        if (this.httpResponse !== null) {
            return this.httpResponse[property] as any;
        }
        return defaultValue;
    }
}
