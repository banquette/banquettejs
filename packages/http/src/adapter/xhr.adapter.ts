import { proxy, UsageException } from "@banquette/core";
import { injectable } from "inversify";
import { NetworkException } from "../exception/network.exception";
import { RequestCanceledException } from "../exception/request-canceled.exception";
import { RequestTimeoutException } from "../exception/request-timeout.exception";
import { AdapterRequest } from "./adapter-request";
import { AdapterResponse } from "./adapter-response";
import { AdapterInterface } from "./adapter.interface";

@injectable()
export class XhrAdapter implements AdapterInterface {
    private xhr!: XMLHttpRequest;
    private promiseResolve!: (value: any) => void;
    private promiseReject!: (reason?: any) => void;
    private canceled: boolean = false;

    /**
     * @inheritDoc
     */
    public execute(request: AdapterRequest): Promise<AdapterResponse> {
        return new Promise<any>((resolve, reject) => {
            if (this.xhr) {
                return void reject(new UsageException(
                    'An XHR object is already defined.' +
                    'You must create a new instance of the adapter for each request.'
                ));
            }
            this.xhr = new XMLHttpRequest();

            this.promiseResolve = resolve;
            this.promiseReject = reject;

            // Bind
            this.xhr.onabort = proxy(this.onAbort, this);
            this.xhr.onerror = proxy(this.onError, this);
            this.xhr.onload = proxy(this.onComplete, this);
            this.xhr.ontimeout = proxy(this.onTimeout, this);

            // Configure
            this.xhr.open(request.method, request.url, true);
            this.xhr.timeout = request.timeout;
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
        this.promiseReject(new NetworkException());
    }

    /**
     * Called when the transaction is aborted.
     */
    private onAbort(): void {
        this.promiseReject(new RequestCanceledException());
    }

    /**
     * Called when the transaction duration reached the timeout.
     */
    private onTimeout(): void {
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
}
