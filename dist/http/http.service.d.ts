import { ConfigurationService } from "@banquette/config/config/configuration.service";
import { EventDispatcherInterface } from "@banquette/event/event-dispatcher.interface";
import { Primitive } from "@banquette/utils-type/types";
import { HttpRequest } from "./http-request";
import { HttpRequestBuilder } from "./http-request.builder";
import { HttpResponse } from "./http-response";
import { NetworkWatcherService } from './network-watcher.service';
export declare class HttpService {
    private config;
    private eventDispatcher;
    private networkWatcher;
    /**
     * Array of requests waiting to be executed.
     */
    private readonly requestsQueue;
    /**
     * Id of the timeout that will process the queue.
     */
    private queueProcessTimeout;
    /**
     * Is the service initialized?
     */
    private initialized;
    /**
     * How many requests are currently running?
     */
    private runningRequestsCount;
    /**
     * Identifier in the injector of the adapter in use.
     */
    private adapterIdentifier;
    constructor(config: ConfigurationService, eventDispatcher: EventDispatcherInterface, networkWatcher: NetworkWatcherService);
    /**
     * Create a request builder to assist the creation of complex requests.
     */
    build(): HttpRequestBuilder;
    /**
     * Do a GET request expecting a JSON response.
     */
    get<T>(url: string, params?: Record<string, Primitive>): HttpResponse<T>;
    /**
     * Do a POST request that sends a JSON payload and expect a JSON response.
     */
    post<T>(url: string, body?: any, params?: Record<string, Primitive>): HttpResponse<T>;
    /**
     * Do a PUT request that sends a JSON payload and expect a JSON response.
     */
    put<T>(url: string, body?: any, params?: Record<string, Primitive>): HttpResponse<T>;
    /**
     * Do a PATCH request that sends a JSON payload and expect a JSON response.
     */
    patch<T>(url: string, body?: any, params?: Record<string, Primitive>): HttpResponse<T>;
    /**
     * Do a DELETE request.
     */
    delete<T>(url: string, params?: Record<string, Primitive>): HttpResponse<T>;
    /**
     * Send a Http request.
     *
     * @note Use `HttpService::build()` to create a request object easily.
     */
    send<T>(request: HttpRequest): HttpResponse<T>;
    /**
     * Do a request.
     */
    private executeQueuedRequest;
    /**
     * Do what needs to be done after a request succeeded (on a network level anyway).
     * The response can still be an error if the server responded with non 2xx status code.
     */
    private handleRequestResponse;
    /**
     * Do what needs to be done after a request failed on the network level.
     */
    private handleRequestFailure;
    /**
     * Process available request and prepare the next process queue if the queue still contains request.
     */
    private processQueue;
    /**
     * Remove a request from the queue.
     */
    private removeFromQueue;
    /**
     * Queue a request for retry.
     */
    private queueRequest;
    /**
     * Put a timeout to process the queue as soon as the less delayed request is available for retry.
     */
    private scheduleQueueForProcess;
    /**
     * Called when the status on the internet connection changes.
     */
    private onNetworkAvailabilityChange;
    /**
     * Initialize stuff before the first http call.
     */
    private initialize;
    /**
     * Wait for a DispatchResult to settle and throw the error found in it if it failed.
     */
    private ensureDispatchSucceeded;
    /**
     * Calculate the timestamp at which the request should be executed again.
     */
    private static CalculateNextTryTime;
    /**
     * Check if a request seems valid and throw a UsageException if not.
     */
    private static EnsureValidRequest;
    /**
     * Check the type of the payload to ensure it is compatible with what the xhr expects.
     * Throw a UsageException if not.
     */
    private static EnsureValidPayload;
}
