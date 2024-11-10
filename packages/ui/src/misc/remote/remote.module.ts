import { ApiService, RemoteException } from "@banquette/api";
import { Injector } from "@banquette/dependency-injection";
import { EventArg, EventDispatcher, UnsubscribeFunction } from "@banquette/event";
import { HttpMethod, HttpResponse } from "@banquette/http";
import { ModelExtendedIdentifier } from "@banquette/model";
import { areEqual } from "@banquette/utils-misc";
import { extend } from "@banquette/utils-object";
import { isNonEmptyString } from "@banquette/utils-string";
import { isObject, isUndefined, Primitive, StringEnum } from "@banquette/utils-type";
import { RemoteModuleEvents, RealTimeStrategy } from "./constant";
import { RemoteConfigurationInterface } from "./remote-configuration.interface";
import { RemoteModuleRequestEventArg } from "./event/remote-module-request.event-arg";
import { RemoteModuleResponseEventArg } from "./event/remote-module-response.event-arg";
import { UsageException } from "@banquette/exception";

/**
 * Offer an easy way for UI components to make HTTP calls without having to worry about what parameters
 * are defined and what services are involved depending on the configuration.
 *
 * Being a module also has the advantage (over a service) to keep the configuration internally
 * so it can be configured once and then consumed as many times as needed.
 */
export class RemoteModule {
    /**
     * A static URL to call.
     */
    public readonly url: string | null = null;

    /**
     * The name of an ApiEndpoint.
     */
    public readonly endpoint: string | null = null;

    /**
     * The HTTP method to use when doing the request.
     * Will be overridden by the endpoint if you're using one.
     */
    public readonly method: StringEnum<HttpMethod> = HttpMethod.GET;

    /**
     * A model identifier that will define two things:
     *
     *   - the collection in which to find the endpoint (if "endpoint" is defined),
     *   - the type of entity the payload/response should be transformed from/into.
     */
    public readonly model: ModelExtendedIdentifier | null = null;

    /**
     * The parameters to replace in the URL or add in the query string.
     */
    public readonly urlParams!: Record<string, Primitive>;

    /**
     * Headers to add to every request done by the module.
     */
    public readonly headers!: Record<string, Primitive>;

    /**
     * Set the expected format of the payload.
     */
    public readonly payloadType?: symbol;

    /**
     * Set the expected format of the response.
     */
    public readonly responseType?: symbol;

    /**
     * If `false`, cancel any running request when `send()` is called.
     */
    private allowMultiple: boolean = false;

    /**
     * If `true`, and if a GET request, a given URL will only be called once, and its response will be stored in memory.
     */
    private cacheInMemory: boolean = false;

    /**
     * Response generated from the last call to send().
     */
    private response: HttpResponse<any> | null = null;

    private api: ApiService = Injector.Get(ApiService);
    private eventDispatcher: EventDispatcher = new EventDispatcher();

    /**
     * The strategy to use for real-time updates.
     */
    public realTimeStrategy: RealTimeStrategy = RealTimeStrategy.None;

    /**
     * The endpoint to check for the last update timestamp (used in TimestampPolling strategy).
     */
    public realTimeEndpoint: string | null = null;

    /**
     * The unique name referencing the data endpoint for subscription (used in TimestampPolling strategy).
     */
    public subscriptionName: string | null = null;

    /**
     * Polling interval in milliseconds.
     */
    public pollingInterval: number = 5000; // Default to 5 seconds

    /**
     * Stores the last known update timestamp (used in TimestampPolling strategy).
     */
    private lastUpdateTimestamp: string | null = null;

    /**
     * Timer reference for the polling loop.
     */
    private pollingTimer: any = null;

    private lastSendParams: {
        payload?: any,
        urlParams: Record<string, Primitive>,
        headers: Record<string, Primitive>,
        tags: symbol[]
    }|null = null;

    /**
     * Check if the module is usable in the current configuration.
     */
    public get isApplicable(): boolean {
        return this.endpoint !== null || this.url !== null;
    }

    /**
     * Check if a request is pending.
     */
    public get pending(): boolean {
        return this.response !== null && this.response.isPending;
    }

    public dispose(): void {
        this.stopRealTimeUpdates();
    }

    /**
     * Update the configuration and notify of the change.
     */
    public updateConfiguration(configuration: Partial<RemoteConfigurationInterface>): void {
        let changed = false;
        for (const prop of [
            'url',
            'endpoint',
            'method',
            'model',
            'urlParams',
            'headers',
            'payloadType',
            'responseType',
            'allowMultiple',
            'cacheInMemory',
            'realTimeStrategy',
            'realTimeEndpoint',
            'subscriptionName',
            'pollingInterval',
        ]) {
            const newValue = !isUndefined((configuration as any)[prop]) ? (configuration as any)[prop] : (this as any)[prop];
            if (!changed && !areEqual((this as any)[prop], newValue)) {
                changed = true;
            }
            (this as any)[prop] = newValue;
        }
        if (changed) {
            this.eventDispatcher.dispatchWithErrorHandling(RemoteModuleEvents.ConfigurationChange);
            this.restartRealTimeUpdates();
        }
    }

    /**
     * Call the server using the current configuration and process the results.
     */
    public send<T = any>(
        payload?: any,
        urlParams: Record<string, Primitive> = {},
        headers: Record<string, Primitive> = {},
        tags: symbol[] = []
    ): HttpResponse<T> {
        this.lastSendParams = { payload, urlParams, headers, tags };
        if (this.response !== null && this.response.isPending && !this.allowMultiple) {
            this.response.request.cancel();
        }
        const request = this.api
            .build()
            .url(this.url)
            .endpoint(this.endpoint)
            .model(this.model)
            .method(this.method)
            .params(extend({}, [this.urlParams, urlParams]))
            .headers(extend({}, [this.headers, headers]))
            .payload(payload, this.payloadType)
            .responseType(this.responseType)
            .cacheInMemory(this.cacheInMemory)
            .tags(tags)
            .getRequest();
        this.eventDispatcher.dispatchWithErrorHandling(RemoteModuleEvents.BeforeRequest, new RemoteModuleRequestEventArg(request));
        this.response = this.api.send(request);
        this.eventDispatcher.dispatchWithErrorHandling(RemoteModuleEvents.BeforeResponse, new RemoteModuleResponseEventArg(this.response));
        this.response.promise.then((response: HttpResponse<any>) => {
            this.eventDispatcher.dispatchWithErrorHandling(
                RemoteModuleEvents.Response,
                new RemoteModuleResponseEventArg(response)
            );
        });
        this.response.promise.catch((response: HttpResponse<any>) => {
            this.eventDispatcher.dispatchWithErrorHandling(
                RemoteModuleEvents.Response,
                new RemoteModuleResponseEventArg(response)
            );

            // Check `isError` to skip canceled requests.
            if (response.isError && !(response.result instanceof RemoteException)) {
                if (
                    isObject(response.result) &&
                    !isUndefined(response.result.exception) &&
                    isNonEmptyString(response.result.exception.message)
                ) {
                    response.result = new RemoteException(
                        response.result.exception.type || 'remote',
                        response.result.exception.message
                    );
                }
            }
            // The catch() DOES NOT guarantee an exception in `result`.
            // If none of the checks above matched, we simply let the result as is; the caller will have to deal with it.
            return response;
        });
        return this.response;
    }

    /**
     * Start real-time updates based on the configured strategy.
     */
    public startRealTimeUpdates(): void {
        this.stopRealTimeUpdates();

        if (this.realTimeStrategy === RealTimeStrategy.Polling) {
            this.pollingTimer = setInterval(() => {
                if (!this.response?.isPending) {
                    this.send(this.lastSendParams?.payload, this.lastSendParams?.urlParams, this.lastSendParams?.headers, this.lastSendParams?.tags);
                }
            }, this.pollingInterval);
        } else if (this.realTimeStrategy === RealTimeStrategy.TimestampPolling) {
            if (!this.realTimeEndpoint || !this.subscriptionName) {
                throw new UsageException('Real-time endpoint and subscription name must be configured for TimestampPolling strategy.');
            }
            this.pollingTimer = setInterval(() => {
                if (!this.response?.isPending) {
                    this.checkForUpdates();
                }
            }, this.pollingInterval);
        }
    }

    /**
     * Stop real-time updates.
     */
    public stopRealTimeUpdates(): void {
        if (this.pollingTimer) {
            clearInterval(this.pollingTimer);
            this.pollingTimer = null;
        }
    }

    /**
     * Restart real-time updates when configuration changes.
     */
    private restartRealTimeUpdates(): void {
        this.stopRealTimeUpdates();
        if (this.realTimeStrategy !== RealTimeStrategy.None) {
            this.startRealTimeUpdates();
        }
    }

    /**
     * Check for updates using timestamp polling.
     */
    private async checkForUpdates(): Promise<void> {
        try {
            const response = await fetch(
                `${this.realTimeEndpoint}/${encodeURIComponent(this.subscriptionName!)}`
            );
            if (response.ok) {
                const data = await response.json();
                if (data.lastUpdate && data.lastUpdate !== this.lastUpdateTimestamp) {
                    this.lastUpdateTimestamp = data.lastUpdate;
                    this.send(this.lastSendParams?.payload, this.lastSendParams?.urlParams, this.lastSendParams?.headers, this.lastSendParams?.tags);
                }
            } else {
                console.error('Failed to fetch update timestamp:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching update timestamp:', error);
        }
    }

    /**
     * Be notified when a configuration value changes.
     */
    public onConfigurationChange(cb: (event: EventArg) => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(RemoteModuleEvents.ConfigurationChange, cb);
    }

    /**
     * Be notified when an HTTP request is made.
     */
    public onRequest(cb: (event: RemoteModuleRequestEventArg) => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(RemoteModuleEvents.BeforeRequest, cb);
    }

    /**
     * Be notified when an HTTP request has started but not yet responded.
     */
    public onBeforeResponse(cb: (event: RemoteModuleResponseEventArg) => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(RemoteModuleEvents.BeforeResponse, cb);
    }

    /**
     * Be notified when an HTTP request has finished, with success or not.
     */
    public onResponse(cb: (event: RemoteModuleResponseEventArg) => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(RemoteModuleEvents.Response, cb);
    }
}
