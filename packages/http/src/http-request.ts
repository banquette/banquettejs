import { UsageException } from "@banquette/core";
import { AdapterInterface } from "./adapter/adapter.interface";
import { HttpMethod } from "./constants";
import { HttpResponse } from "./http-response";

export class HttpRequest {
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
     * Track if the request has been canceled BEFORE the adapter is set.
     */
    private canceled: boolean = false;

    /**
     * Create a Request object.
     *
     * @param method        HTTP method.
     * @param url           Ready to use url.
     * @param payload       Body of the request.
     * @param payloadType   Format of the payload.
     * @param responseType  Format of the response.
     * @param headers       Additional headers to send with the request.
     * @param timeout       Maximum duration of the request (in milliseconds)
     * @param extras        Any additional data you want to associated with the request.
     *                      This object will not be sent with the request.
     */
    public constructor(public method: HttpMethod,
                       public url: string,
                       public payload: any,
                       public payloadType: symbol,
                       public responseType: symbol,
                       public headers: Record<string, string>,
                       public timeout: number,
                       public extras: Record<string, any>) {

    }

    public incrementTryCount(): void {
        (this as any).tryCount = this.tryCount + 1;
    }

    /**
     * Set the adapter in use for this request.
     */
    public setAdapter(adapter: AdapterInterface): void {
        if (this.adapter) {
            throw new UsageException('An adapter has already been set.');
        }
        (this as any).adapter = adapter;
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
        (this as any).response = response;
    }

    /**
     * Cancel the request.
     */
    public cancel(): void {
        if (!this.adapter) {
            this.canceled = true;
            return ;
        }
        this.adapter.cancel();
    }
}
