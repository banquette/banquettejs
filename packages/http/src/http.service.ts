import { Exception, Injector, SharedConfiguration, SharedConfigurationSymbol, UsageException } from "@banquette/core";
import { EventDispatcherInterface, EventDispatcherServiceSymbol } from "@banquette/event";
import { isNullOrUndefined, isString, noop, Pojo, proxy } from '@banquette/utils';
import { inject, injectable } from "inversify";
import { AdapterRequest } from "./adapter/adapter-request";
import { AdapterResponse } from "./adapter/adapter-response";
import { AdapterInterface, AdapterInterfaceSymbol } from "./adapter/adapter.interface";
import { Events, HttpMethod, HttpResponseStatus, ResponseTypeAutoDetect } from "./constants";
import { ResponseTypeJson } from "./decoder/json.decoder";
import { PayloadTypeJson } from "./encoder/json.encoder";
import { NetworkAvailabilityChangeEvent } from "./event/network-availability-change.event";
import { RequestEvent } from "./event/request.event";
import { ResponseEvent } from "./event/response.event";
import { AuthenticationException } from "./exception/authentication.exception";
import { NetworkException } from "./exception/network.exception";
import { RequestException } from "./exception/request.exception";
import { HttpRequest } from "./http-request";
import { HttpRequestBuilder } from "./http-request.builder";
import { HttpResponse } from "./http-response";
import { NetworkWatcherService, NetworkWatcherServiceSymbol } from './network-watcher.service';
import { QueuedRequestInterface } from './queued-request.interface';
import { httpStatusToText } from "./utils";

@injectable()
export class HttpService {
    /**
     * Array of requests waiting to be executed.
     */
    private readonly requestsQueue: QueuedRequestInterface<any>[] = [];

    /**
     * Id of the timeout that will process the queue.
     */
    private queueProcessTimeout: any = null;

    private initialized: boolean = false;

    constructor(@inject(SharedConfigurationSymbol) private config: SharedConfiguration,
                @inject(EventDispatcherServiceSymbol) private eventDispatcher: EventDispatcherInterface,
                @inject(NetworkWatcherServiceSymbol) private networkWatcher: NetworkWatcherService) {
    }

    /**
     * Create a request builder to assist the creation of complex requests.
     */
    public build(): HttpRequestBuilder {
        return new HttpRequestBuilder();
    }

    /**
     * Do a GET request expecting a JSON response.
     */
    public get<T>(url: string, headers?: any): HttpResponse<T> {
        return this.send(this.build()
            .method(HttpMethod.GET)
            .url(url)
            .headers(headers)
            .responseType(ResponseTypeJson)
            .getRequest()
        );
    }

    /**
     * Do a POST request that sends a JSON payload and expect a JSON response.
     */
    public post<T>(url: string, body?: any, headers?: any): HttpResponse<T> {
        return this.send(this.build()
            .method(HttpMethod.POST)
            .url(url)
            .payload(body, PayloadTypeJson)
            .responseType(ResponseTypeJson)
            .headers(headers)
            .getRequest()
        );
    }

    /**
     * Do a PUT request that sends a JSON payload and expect a JSON response.
     */
    public put<T>(url: string, body?: any, headers?: any): HttpResponse<T> {
        return this.send(this.build()
            .method(HttpMethod.PUT)
            .url(url)
            .payload(body, PayloadTypeJson)
            .responseType(ResponseTypeJson)
            .headers(headers)
            .getRequest()
        );
    }

    /**
     * Do a DELETE request.
     */
    public delete<T>(url: string, headers?: any): HttpResponse<T> {
        return this.send(this.build()
            .method(HttpMethod.DELETE)
            .url(url)
            .responseType(ResponseTypeJson)
            .headers(headers)
            .getRequest()
        );
    }

    /**
     * Do a request.
     *
     * @deprecated Use HttpService::build() and HttpService::send() instead.
     */
    public request<T>(method: HttpMethod, url: string, body: Pojo|null, headers?: any): HttpResponse<T> {
        return this.send(new HttpRequest(
            method,
            url,
            body,
            PayloadTypeJson,
            ResponseTypeAutoDetect,
            headers,
            -1,
            {}
        ));
    }

    /**
     * Send an Http request.
     *
     * @note Use `HttpService::build()` to create a request object easily.
     */
    public send<T>(request: HttpRequest): HttpResponse<T> {
        this.initialize();
        const response = new HttpResponse<T>(request);
        request.setResponse(response);
        response.setStatus(HttpResponseStatus.Pending);
        response.promise = new Promise<HttpResponse<T>>((resolve, reject) => {
            this.queueRequest<T>(
                request,
                response,
                0,
                resolve,
                reject
            );
        });
        return response;
    }

    /**
     * Do a request.
     */
    private async executeQueuedRequest(queuedRequest: QueuedRequestInterface<any>): Promise<void> {
        // The request may have been canceled while in queue, in such a case simply ignore it.
        // The promise has already been resolved by the default "cancel()" callback inside the HttpResponse.
        if (queuedRequest.response.isCanceled) {
            return void this.removeFromQueue(queuedRequest);
        }
        try {
            const adapter = Injector.Get<AdapterInterface>(AdapterInterfaceSymbol);
            if (!queuedRequest.tryCount) {
                queuedRequest.request.setAdapter(adapter);
            }
            queuedRequest.isExecuting = true;
            await this.eventDispatcher.dispatch(Events.BeforeRequest, new RequestEvent(queuedRequest.request));
            if (!HttpService.IsValidPayload(queuedRequest.request.payload)) {
                return void this.handleRequestFailure(queuedRequest, new UsageException(
                    `Invalid body. Ensure that you have registered an encoder for this type of payload.`
                ));
            }
            queuedRequest.tryCount++;
            queuedRequest.request.incrementTryCount();
            const adapterResponse: AdapterResponse = await adapter.execute(queuedRequest.request as AdapterRequest);
            await this.eventDispatcher.dispatch(Events.BeforeResponse, new ResponseEvent(adapterResponse, queuedRequest.request as AdapterRequest));
            this.handleRequestResponse(adapterResponse, queuedRequest);
        } catch (e) {
            this.handleRequestFailure(queuedRequest, e);
        } finally {
            queuedRequest.isExecuting = false;
        }
    }

    /**
     * Do what needs to be done after a request succeeded (on a network level anyway).
     * The response can still be an error if the server responded with non 2xx status code.
     */
    private handleRequestResponse(response: AdapterResponse, queuedRequest: QueuedRequestInterface<any>): void {
        queuedRequest.response.httpStatusCode = response.status;
        queuedRequest.response.url = response.url;
        queuedRequest.response.httpHeaders = response.headers;
        queuedRequest.response.result = response.response;
        if (response.status.toString()[0] !== '2') {
            const statusText: string = httpStatusToText(response.status);
            const error: Exception = (response.status === 401 || response.status === 403) ? new AuthenticationException(statusText) : new RequestException(statusText);
            this.handleRequestFailure(queuedRequest, error);
            return ;
        }
        queuedRequest.response.setStatus(HttpResponseStatus.Success);
        queuedRequest.resolve(queuedRequest.response);
        this.eventDispatcher.dispatch(Events.RequestSuccess, new RequestEvent(queuedRequest.request));
        this.removeFromQueue(queuedRequest);
    }

    /**
     * Do what needs to be done after a request failed on the network level.
     */
    private handleRequestFailure(queuedRequest: QueuedRequestInterface<any>, error: Exception): void {
        if (error instanceof NetworkException && queuedRequest.triesLeft > 0) {
            queuedRequest.triesLeft--;
            queuedRequest.isExecuting = false;
            this.eventDispatcher.dispatch(Events.RequestQueued, new RequestEvent(queuedRequest.request));
            this.processQueue();
            return ;
        }
        queuedRequest.response.error = error;
        queuedRequest.response.setStatus(HttpResponseStatus.Error);
        queuedRequest.reject(queuedRequest.response);
        this.eventDispatcher.dispatch(Events.RequestFailure, new RequestEvent(queuedRequest.request));
        this.removeFromQueue(queuedRequest);
    }

    /**
     * Process available request and prepare the next process queue if the queue still contains request.
     */
    private processQueue(): void {
        const currentTime = (new Date()).getTime();
        for (const request of this.requestsQueue) {
            if (!request.isExecuting && request.executeAt <= currentTime) {
                // Will never reject, the catch is only here to calm tslint.
                this.executeQueuedRequest(request).catch(noop);
            }
        }
        this.scheduleQueueForProcess();
    }

    /**
     * Remove a request from the queue.
     */
    private removeFromQueue(request: QueuedRequestInterface<any>): void {
        for (let i = 0; i < this.requestsQueue.length; ++i) {
            if (this.requestsQueue[i] === request) {
                this.requestsQueue.splice(i, 1);
                return ;
            }
        }
    }

    /**
     * Queue a request for retry.
     */
    private queueRequest<T>(request: HttpRequest,
                            response: HttpResponse<T>,
                            executeAt: number,
                            resolve: (response: HttpResponse<T>) => void,
                            reject: (response: HttpResponse<T>) => void): void {
        this.networkWatcher.watch();
        this.requestsQueue.push({
            request,
            timeout: this.config.get('http.requestTimeout'),
            tryCount: 0,
            triesLeft: Math.max(1, this.config.get('http.requestErrorRetryCount')),
            executeAt,
            resolve,
            reject,
            isExecuting: false,
            isError: false,
            response
        });
        this.scheduleQueueForProcess();
        this.eventDispatcher.dispatch(Events.RequestQueued, new RequestEvent(request));
    }

    /**
     * Put a timeout to process the queue as soon as the less delayed request is available for retry.
     * A timeout will always be set even if no request ask for a delay.
     */
    private scheduleQueueForProcess(): void {
        if (this.queueProcessTimeout !== null || !this.requestsQueue.length) {
            return ;
        }
        const currentTime = (new Date()).getTime();
        let delay: number|null = null;
        for (const request of this.requestsQueue) {
            if (request.isExecuting) {
                continue ;
            }
            const delta: number = request.executeAt > 0 ? Math.max(0, request.executeAt - currentTime) : 0;
            if (delay === null || delay > delta) {
                delay = delta;
            }
        }
        if (delay !== null) {
            this.queueProcessTimeout = setTimeout(() => {
                this.queueProcessTimeout = null;
                this.processQueue();
            }, delay);
        }
    }

    /**
     * Called when the status on the internet connection changes.
     */
    private onNetworkAvailabilityChange(event: NetworkAvailabilityChangeEvent) {
        if (event.available) {
            for (const queuedRequest of this.requestsQueue) {
                if (queuedRequest.isError) {
                    queuedRequest.executeAt = 0;
                }
            }
            if (this.queueProcessTimeout !== null) {
                clearTimeout(this.queueProcessTimeout);
                this.queueProcessTimeout = null;
            }
            this.scheduleQueueForProcess();
        }
    }

    /**
     * Initialize stuff before the first http call.
     */
    private initialize(): void {
        if (this.initialized) {
            return ;
        }
        const adapter: AdapterInterface = this.config.get('http.adapter');
        if (isNullOrUndefined(adapter)) {
            throw new UsageException(
                'You must define a network adapter in the global configuration ' +
                'to use the Http service (key "http.adapter").'
            );
        }
        // Add the adapter to the container so it can inject dependencies of its own.
        Injector.RegisterModule(AdapterInterfaceSymbol, adapter);
        this.eventDispatcher.subscribe(Events.NetworkAvailabilityChange, proxy(this.onNetworkAvailabilityChange, this));
        this.initialized = true;
    }

    /**
     * Check the type of the payload to ensure it is compatible with what the xhr expects.
     */
    private static IsValidPayload(payload: any): boolean {
        return payload === null ||
            isString(payload) ||
            payload instanceof Blob ||
            payload instanceof FormData ||
            payload instanceof ArrayBuffer ||
            payload instanceof Uint8Array ||
            payload instanceof URLSearchParams;

    }
}
export const HttpServiceSymbol = Symbol("HttpService");
Injector.RegisterService(HttpServiceSymbol, HttpService);
