import { ObservablePromise } from "@banquette/promise/observable-promise";
import { HttpResponseStatus } from "./constants";
import { NetworkException } from "./exception/network.exception";
import { RequestException } from "./exception/request.exception";
import { HttpRequest } from "./http-request";
export declare class HttpResponse<T> {
    private static MaxId;
    /**
     * Unique id of the response.
     */
    readonly id: number;
    /**
     * Final URL of the response, may be different from the request url in case of redirects.
     */
    url: string | null;
    /**
     * Holds the status of the request.
     * It may be more convenient to use the flags instead.
     */
    readonly status: HttpResponseStatus;
    /**
     * The HTTP status code as returned by the server.
     */
    httpStatusCode: number;
    /**
     * The HTTP status text as returned by the server.
     */
    httpStatusText: string;
    /**
     * HTTP headers returned by the server.
     * The name of each header has been normalized (slugified).
     *
     * For example: "Content-Type" will be "content-type".
     */
    httpHeaders: Record<string, string>;
    /**
     * True if status === HttpResponseStatus.Pending.
     */
    isPending: boolean;
    /**
     * True if status === HttpResponseStatus.Success.
     */
    isSuccess: boolean;
    /**
     * True if status === HttpResponseStatus.Error.
     */
    isError: boolean;
    /**
     * True if status === HttpResponseStatus.Canceled.
     */
    isCanceled: boolean;
    /**
     * Holds the error details in case the status becomes HttpResponseStatus.Error.
     */
    error: RequestException | NetworkException | null;
    /**
     * The result of the request.
     * Will be undefined until the status is HttpResponseStatus.Success.
     */
    result: T;
    /**
     * The promise from the Http service.
     * Will resolve (or reject) depending on the status of the request.
     */
    promise: ObservablePromise<HttpResponse<T>>;
    /**
     * The request associated with the response.
     */
    readonly request: HttpRequest;
    constructor(request: HttpRequest, status: HttpResponseStatus | undefined, promise: ObservablePromise<HttpResponse<T>>);
    /**
     * Update the response's status.
     */
    setStatus(status: HttpResponseStatus): void;
    /**
     * Copy the state of another response into this one, except the promise and the request.
     */
    copyFrom(other: HttpResponse<T>): void;
}
