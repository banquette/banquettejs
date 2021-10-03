import { Module } from "@banquette/dependency-injection";
import { UsageException } from "@banquette/exception";
import { ObservablePromise } from "@banquette/promise";
import { isUndefined } from "@banquette/utils-type";
import { proxy } from "@banquette/utils-misc";
import { HttpRequestProgressStatus } from "../constants";
import { StatusChangeEvent } from "../event/status-change.event";
import { TransferProgressEvent } from "../event/transfer-progress.event";
import { NetworkException } from "../exception/network.exception";
import { RequestCanceledException } from "../exception/request-canceled.exception";
import { RequestTimeoutException } from "../exception/request-timeout.exception";
import { HttpRequest } from "../http-request";
import { AdapterRequest } from "./adapter-request";
import { AdapterResponse } from "./adapter-response";
import { AdapterInterface } from "./adapter.interface";

@Module()
export class XhrAdapter implements AdapterInterface {
    private xhr!: XMLHttpRequest;
    private request!: HttpRequest;
    private promiseResolve!: (value: any) => void;
    private promiseReject!: (reason?: any) => void;
    private promiseProgress!: (value?: any) => void;
    private requestProgressStatus!: HttpRequestProgressStatus;
    private canceled: boolean = false;

    /**
     * @inheritDoc
     */
    public execute(request: AdapterRequest): ObservablePromise<AdapterResponse> {
        return new ObservablePromise<any>((resolve, reject, progress) => {
            if (this.xhr) {
                return void reject(new UsageException(
                    'An XHR object is already defined.' +
                    'You must create a new instance of the adapter for each request.'
                ));
            }
            // Init
            this.request = request as HttpRequest;
            this.promiseResolve = resolve;
            this.promiseReject = reject;
            this.promiseProgress = progress;
            this.updateProgressStatus(HttpRequestProgressStatus.Preparing);

            // Create xhr
            this.xhr = new XMLHttpRequest();

            // Bind
            this.xhr.addEventListener('abort', proxy(this.onAbort, this));
            this.xhr.addEventListener('error', proxy(this.onError, this));
            this.xhr.addEventListener('load', proxy(this.onComplete, this));
            this.xhr.addEventListener('timeout', proxy(this.onTimeout, this));
            this.xhr.addEventListener('progress', proxy(this.onProgress, this));

            this.xhr.upload.addEventListener('loadstart', proxy(this.onProgress, this));
            this.xhr.upload.addEventListener('progress', proxy(this.onProgress, this));
            this.xhr.upload.addEventListener('load', proxy(this.onProgress, this));

            // Configure
            this.xhr.open(request.method, request.url, true);
            this.xhr.timeout = request.timeout;
            this.xhr.withCredentials = request.withCredentials;
            if (request.mimeType !== null) {
                this.xhr.overrideMimeType(request.mimeType);
            }
            for (const headerName of Object.keys(request.headers)) {
                this.xhr.setRequestHeader(headerName, request.headers[headerName]);
            }

            // Send
            this.xhr.send(request.payload);

            // In case the request has been canceled immediately
            if (this.canceled) {
                this.cancel();
            }
        });
    }

    /**
     * @inheritDoc
     */
    public cancel(): void {
        if (this.xhr) {
            this.xhr.abort();
        } else {
            this.canceled = true;
        }
    }

    /**
     * Called when the transaction has completed with success.
     * The server could still be on error, this only means the network request succeeded.
     */
    private onComplete(): void {
        this.updateProgressStatus(HttpRequestProgressStatus.Closed);
        this.promiseResolve(new AdapterResponse(
            this.xhr.status,
            this.xhr.responseURL,
            this.xhr.responseText || null,
            this.xhr.responseType,
            this.convertHeadersStringToObject(this.xhr.getAllResponseHeaders())
        ));
    }

    /**
     * Called when and error occurred at the network level (the transaction failed).
     */
    private onError(): void {
        this.updateProgressStatus(HttpRequestProgressStatus.Closed);
        this.promiseReject(new NetworkException());
    }

    /**
     * Called when and error occurred at the network level (the transaction failed).
     */
    private onProgress(event: ProgressEvent): void {
        if (event.type === 'loadstart') {
            this.updateProgressStatus(HttpRequestProgressStatus.Uploading);
        } else if (event.type === 'load') {
            this.updateProgressStatus(HttpRequestProgressStatus.Downloading);
        }
        if (event.lengthComputable) {
            const transferEvent = new TransferProgressEvent(
                this.request,
                this.requestProgressStatus,
                event.loaded,
                event.total,
                Math.round(event.loaded / event.total * 10000) * 0.01
            );
            this.promiseProgress(transferEvent);
        }
    }

    /**
     * Called when the transaction is aborted.
     */
    private onAbort(): void {
        this.updateProgressStatus(HttpRequestProgressStatus.Closed);
        this.promiseReject(new RequestCanceledException());
    }

    /**
     * Called when the transaction duration reached the timeout.
     */
    private onTimeout(): void {
        this.updateProgressStatus(HttpRequestProgressStatus.Closed);
        this.promiseReject(new RequestTimeoutException(this.xhr.timeout));
    }

    /**
     * Convert the raw string of headers returned by the server into a map.
     */
    private convertHeadersStringToObject(rawHeaders: string): Record<string, string> {
        const map: Record<string, string> = {};
        rawHeaders.trim().split(/[\r\n]+/).forEach(function (line) {
            const parts = line.split(': ');
            map[parts.shift() as string] = parts.join(': ');
        });
        return map;
    }

    /**
     * Notify the promise of a status change.
     */
    private updateProgressStatus(status: HttpRequestProgressStatus): void {
        if (isUndefined(this.requestProgressStatus) || status > this.requestProgressStatus) {
            this.promiseProgress(new StatusChangeEvent(this.request, status));
            this.requestProgressStatus = status;
        }
    }
}
