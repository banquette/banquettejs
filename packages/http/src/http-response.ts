import { ObservablePromise } from "@banquette/promise";
import { HttpResponseStatus } from "./constants";
import { NetworkException } from "./exception/network.exception";
import { RequestException } from "./exception/request.exception";
import { HttpRequest } from "./http-request";

export class HttpResponse<T> {
    /**
     * Final URL of the response, may be different from the request url in case of redirects.
     */
    public url!: string|null;

    /**
     * Holds the status of the request.
     * It may be more convenient to use the flags instead.
     */
    public readonly status: HttpResponseStatus = HttpResponseStatus.Pending;

    /**
     * The HTTP status code as returned by the server.
     */
    public httpStatusCode!: number;

    /**
     * The HTTP status text as returned by the server.
     */
    public httpStatusText!: string;

    /**
     * HTTP headers returned by the server.
     * The name of each header has been normalized (slugified).
     *
     * For example: "Content-Type" will be "content-type".
     */
    public httpHeaders!: Record<string, string>;

    /**
     * True if status === HttpResponseStatus.Pending.
     */
    public isPending: boolean = true;

    /**
     * True if status === HttpResponseStatus.Success.
     */
    public isSuccess: boolean = false;

    /**
     * True if status === HttpResponseStatus.Error.
     */
    public isError: boolean = false;

    /**
     * True if status === HttpResponseStatus.Canceled.
     */
    public isCanceled: boolean = false;

    /**
     * Holds the error details in case the status becomes HttpResponseStatus.Error.
     */
    public error: RequestException|NetworkException|null = null;

    /**
     * The result of the request.
     * Will be undefined until the status is HttpResponseStatus.Success.
     */
    public result!: T;

    /**
     * The promise from the Http service.
     * Will resolve (or reject) depending on the status of the request.
     */
    public promise: ObservablePromise<HttpResponse<T>>|null = null;

    /**
     * The request associated with the response.
     */
    public readonly request: HttpRequest;

    public constructor(request: HttpRequest, status: HttpResponseStatus = HttpResponseStatus.Pending) {
        this.request = request;
        this.setStatus(status);
    }

    /**
     * Update the response's status.
     */
    public setStatus(status: HttpResponseStatus): void {
        (this as any).status = status;
        this.isPending = this.status === HttpResponseStatus.Pending;
        this.isSuccess = this.status === HttpResponseStatus.Success;
        this.isError = this.status === HttpResponseStatus.Error;
        this.isCanceled = this.status === HttpResponseStatus.Canceled;
    }

    /**
     * Copy the state of another response into this one, except the promise and the request.
     */
    public copyFrom(other: HttpResponse<T>) {
        this.setStatus(other.status);
        this.url = other.url;
        this.error = other.error;
        this.result = other.result;
        this.httpStatusText = other.httpStatusText;
        this.httpStatusCode = other.httpStatusCode;
    }
}
