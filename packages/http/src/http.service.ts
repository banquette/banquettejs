import { SharedConfiguration } from "@banquette/config/config/shared-configuration";
import { Inject } from "@banquette/dependency-injection/decorator/inject.decorator";
import { Service } from "@banquette/dependency-injection/decorator/service.decorator";
import { Injector } from "@banquette/dependency-injection/injector";
import { DispatchResult } from "@banquette/event/dispatch-result";
import { EventDispatcherInterface } from "@banquette/event/event-dispatcher.interface";
import { EventDispatcherService } from "@banquette/event/event-dispatcher.service";
import { Exception } from "@banquette/exception/exception";
import { ExceptionFactory } from "@banquette/exception/exception.factory";
import { UsageException } from "@banquette/exception/usage.exception";
import { ObservablePromise } from "@banquette/promise/observable-promise";
import { RejectCallback, ResolveCallback, ProgressCallback } from "@banquette/promise/types";
import { noop } from "@banquette/utils-misc/noop";
import { proxy } from "@banquette/utils-misc/proxy";
import { isNonEmptyString } from "@banquette/utils-string/is-non-empty-string";
import { isNullOrUndefined } from "@banquette/utils-type/is-null-or-undefined";
import { isString } from "@banquette/utils-type/is-string";
import { Constructor, Primitive } from "@banquette/utils-type/types";
import { AdapterRequest } from "./adapter/adapter-request";
import { AdapterResponse } from "./adapter/adapter-response";
import { AdapterInterface } from "./adapter/adapter.interface";
import { HttpEvents, HttpMethod, HttpResponseStatus, NetworkEvents } from "./constants";
import { BeforeResponseEvent } from "./event/before-response.event";
import { NetworkAvailabilityChangeEvent } from "./event/network-availability-change.event";
import { RequestProgressEvent } from "./event/request-progress.event";
import { RequestEvent } from "./event/request.event";
import { ResponseEvent } from "./event/response.event";
import { AuthenticationException } from "./exception/authentication.exception";
import { NetworkException } from "./exception/network.exception";
import { RequestCanceledException } from "./exception/request-canceled.exception";
import { RequestException } from "./exception/request.exception";
import { HttpRequest } from "./http-request";
import { HttpRequestBuilder } from "./http-request.builder";
import { HttpResponse } from "./http-response";
import { NetworkWatcherService } from './network-watcher.service';
import { QueuedRequestInterface } from './queued-request.interface';
import { httpStatusToText } from "./utils";

@Service()
export class HttpService {
    /**
     * Array of requests waiting to be executed.
     */
    private readonly requestsQueue: QueuedRequestInterface<any>[] = [];

    /**
     * Id of the timeout that will process the queue.
     */
    private queueProcessTimeout: any = null;

    /**
     * Is the service initialized?
     */
    private initialized: boolean = false;

    /**
     * How many requests are currently running?
     */
    private runningRequestsCount: number = 0;

    /**
     * Identifier in the injector of the adapter in use.
     */
    private adapterIdentifier!: Constructor<AdapterInterface>;

    constructor(@Inject(SharedConfiguration) private config: SharedConfiguration,
                @Inject(EventDispatcherService) private eventDispatcher: EventDispatcherInterface,
                @Inject(NetworkWatcherService) private networkWatcher: NetworkWatcherService) {
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
    public get<T>(url: string, params?: Record<string, Primitive>): HttpResponse<T> {
        return this.send(this.build()
            .method(HttpMethod.GET)
            .url(url)
            .params(params || {})
            .getRequest()
        );
    }

    /**
     * Do a POST request that sends a JSON payload and expect a JSON response.
     */
    public post<T>(url: string, body?: any, params?: Record<string, Primitive>): HttpResponse<T> {
        return this.send(this.build()
            .method(HttpMethod.POST)
            .url(url)
            .payload(body)
            .params(params || {})
            .getRequest()
        );
    }

    /**
     * Do a PUT request that sends a JSON payload and expect a JSON response.
     */
    public put<T>(url: string, body?: any, params?: Record<string, Primitive>): HttpResponse<T> {
        return this.send(this.build()
            .method(HttpMethod.PUT)
            .url(url)
            .payload(body)
            .params(params || {})
            .getRequest()
        );
    }

    /**
     * Do a PATCH request that sends a JSON payload and expect a JSON response.
     */
    public patch<T>(url: string, body?: any, params?: Record<string, Primitive>): HttpResponse<T> {
        return this.send(this.build()
            .method(HttpMethod.PATCH)
            .url(url)
            .payload(body)
            .params(params || {})
            .getRequest()
        );
    }

    /**
     * Do a DELETE request.
     */
    public delete<T>(url: string, params?: Record<string, Primitive>): HttpResponse<T> {
        return this.send(this.build()
            .method(HttpMethod.DELETE)
            .url(url)
            .params(params || {})
            .getRequest()
        );
    }

    /**
     * Send an Http request.
     *
     * @note Use `HttpService::build()` to create a request object easily.
     */
    public send<T>(request: HttpRequest): HttpResponse<T> {
        this.initialize();
        let promiseResolve: ResolveCallback<HttpResponse<T>>;
        let promiseReject: RejectCallback;
        let promiseProgress: ProgressCallback;
        const response = new HttpResponse<T>(request, HttpResponseStatus.Pending, new ObservablePromise<HttpResponse<T>>((resolve, reject, progress) => {
            promiseResolve = resolve;
            promiseReject = reject;
            promiseProgress = progress;
        }));
        request.setResponse(response);
        this.queueRequest<T>(
            request,
            response,
            0,
            //
            // These are guaranteed to be set before being used.
            // It's a little tricky because both the response AND the promise's callbacks are need to queue the request.
            //
            // @ts-ignore
            promiseResolve,
            // @ts-ignore
            promiseReject,
            // @ts-ignore
            promiseProgress
        );
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
            const adapter = Injector.Get(this.adapterIdentifier);
            if (!queuedRequest.tryCount) {
                queuedRequest.request.setAdapter(adapter);
            }
            queuedRequest.triesLeft--;
            queuedRequest.isExecuting = true;
            this.runningRequestsCount++;

            // Before request.
            await this.ensureDispatchSucceeded(this.eventDispatcher.dispatchWithErrorHandling(
                HttpEvents.BeforeRequest,
                new RequestEvent(queuedRequest.request),
                true,
                queuedRequest.request.tags
            ));
            HttpService.EnsureValidRequest(queuedRequest.request);
            queuedRequest.tryCount++;
            queuedRequest.request.incrementTryCount();
            const adapterPromise: ObservablePromise = adapter.execute(queuedRequest.request as AdapterRequest);
            adapterPromise.progress(queuedRequest.progress);
            const adapterResponse: AdapterResponse = await adapterPromise;

            // Before response.
            await this.ensureDispatchSucceeded(this.eventDispatcher.dispatchWithErrorHandling(
                HttpEvents.BeforeResponse,
                new BeforeResponseEvent(adapterResponse, queuedRequest.request as AdapterRequest),
                true,
                queuedRequest.request.tags
            ));
            this.handleRequestResponse(adapterResponse, queuedRequest);
        } catch (e) {
            this.handleRequestFailure(queuedRequest, ExceptionFactory.EnsureException(e));
        } finally {
            queuedRequest.isExecuting = false;
            this.runningRequestsCount--;
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
        this.eventDispatcher.dispatchWithErrorHandling(HttpEvents.RequestSuccess, new ResponseEvent(queuedRequest.request, queuedRequest.response), true, queuedRequest.request.tags);
        this.removeFromQueue(queuedRequest);
    }

    /**
     * Do what needs to be done after a request failed on the network level.
     */
    private handleRequestFailure(queuedRequest: QueuedRequestInterface<any>, error: Exception): void {
        if (error instanceof NetworkException && error.retryable && queuedRequest.triesLeft > 0) {
            queuedRequest.executeAt = HttpService.CalculateNextTryTime(queuedRequest);
            queuedRequest.isExecuting = false;
            this.eventDispatcher.dispatchWithErrorHandling(HttpEvents.RequestQueued, new RequestEvent(queuedRequest.request), true, queuedRequest.request.tags);
            if (this.networkWatcher.isOnline()) {
                this.processQueue();
            }
            return ;
        }
        queuedRequest.response.error = error;
        queuedRequest.response.setStatus(error instanceof RequestCanceledException ? HttpResponseStatus.Canceled : HttpResponseStatus.Error);
        queuedRequest.reject(queuedRequest.response);
        this.eventDispatcher.dispatchWithErrorHandling(HttpEvents.RequestFailure, new ResponseEvent(queuedRequest.request, queuedRequest.response), true, queuedRequest.request.tags);
        this.removeFromQueue(queuedRequest);
    }

    /**
     * Process available request and prepare the next process queue if the queue still contains request.
     */
    private processQueue(): void {
        const currentTime = (new Date()).getTime();
        const maxSimultaneousRequestsCount: number = this.config.get('http.maxSimultaneousRequests');
        for (const request of this.requestsQueue) {
            if (!request.isExecuting && request.executeAt <= currentTime && this.runningRequestsCount < maxSimultaneousRequestsCount) {
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
                            reject: (response: HttpResponse<T>) => void,
                            progress: (value: RequestProgressEvent) => void): void {
        let i = 0;
        const queueRequest: QueuedRequestInterface<any> = {
            request,
            timeout: this.config.get('http.requestTimeout'),
            tryCount: 0,
            triesLeft: 1 + Math.max(0, request.retry !== null ? request.retry : this.config.get('http.requestRetryCount')),
            retryDelay: request.retryDelay !== null ? request.retryDelay : this.config.get('http.requestRetryDelay'),
            executeAt,
            resolve,
            reject,
            progress,
            isExecuting: false,
            isError: false,
            response
        };
        this.networkWatcher.watch();
        for (; i < this.requestsQueue.length && this.requestsQueue[i].request.priority >= request.priority; ++i);
        this.requestsQueue.splice(i, 0, queueRequest);
        request.setCancelCallback(() => {
            this.handleRequestFailure(queueRequest, new RequestCanceledException());
        });
        this.scheduleQueueForProcess();
        this.eventDispatcher.dispatchWithErrorHandling(HttpEvents.RequestQueued, new RequestEvent(request), true, request.tags);
    }

    /**
     * Put a timeout to process the queue as soon as the less delayed request is available for retry.
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
        this.adapterIdentifier = this.config.get('http.adapter');
        if (isNullOrUndefined(this.adapterIdentifier)) {
            throw new UsageException(
                'You must define a network adapter in the global configuration ' +
                'to use the Http service (key "http.adapter").'
            );
        }
        if (!Injector.Has(this.adapterIdentifier)) {
            throw new UsageException('You must register your adapter into the injector using the "@Module()" decorator.');
        }
        this.eventDispatcher.subscribe(NetworkEvents.AvailabilityChange, proxy(this.onNetworkAvailabilityChange, this));
        this.initialized = true;
    }

    /**
     * Wait for a DispatchResult to settle and throw the error found in it if it failed.
     */
    private async ensureDispatchSucceeded(result: DispatchResult): Promise<void> {
        if (result.promise !== null) {
            await result.promise;
        }
        if (result.error) {
            throw result.errorDetail;
        }
    }

    /**
     * Calculate the timestamp at which the request should be executed again.
     */
    private static CalculateNextTryTime(request: QueuedRequestInterface<any>): number {
        const now = (new Date()).getTime();
        if (request.retryDelay !== 'auto') {
            return now + request.retryDelay;
        }
        return now + Math.min(30000, 10 ** request.tryCount);
    }

    /**
     * Check if a request seems valid and throw a UsageException if not.
     */
    private static EnsureValidRequest(request: HttpRequest): void {
        if (!isNonEmptyString(request.url)) {
            throw new UsageException('You must define a valid url.');
        }
        HttpService.EnsureValidPayload(request.payload);
    }

    /**
     * Check the type of the payload to ensure it is compatible with what the xhr expects.
     * Throw a UsageException if not.
     */
    private static EnsureValidPayload(payload: any): void {
        if (payload === null ||
            isString(payload) ||
            payload instanceof Blob ||
            payload instanceof FormData ||
            payload instanceof ArrayBuffer ||
            payload instanceof Uint8Array ||
            payload instanceof URLSearchParams) {
            return ;
        }
        throw new UsageException(`Invalid body. Ensure that you have registered an encoder for this type of payload.`);
    }
}
