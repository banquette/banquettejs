import { ApiService } from "@banquette/api/api.service";
import { RemoteException } from "@banquette/api/exception/remote.exception";
import { Injector } from "@banquette/dependency-injection/injector";
import { EventArg } from "@banquette/event/event-arg";
import { EventDispatcher } from "@banquette/event/event-dispatcher";
import { UnsubscribeFunction } from "@banquette/event/type";
import { HttpMethod } from "@banquette/http/constants";
import { HttpResponse } from "@banquette/http/http-response";
import { ModelExtendedIdentifier } from "@banquette/model/type";
import { extend } from "@banquette/utils-object/extend";
import { isNonEmptyString } from "@banquette/utils-string/is-non-empty-string";
import { isObject } from "@banquette/utils-type/is-object";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Primitive } from "@banquette/utils-type/types";
import { RemoteModuleEvents } from "./constant";
import { RemoteConfigurationInterface } from "./remote-configuration.interface";

/**
 * Offer an easy way for ui components to make http calls without having to worry about what parameters
 * are defined and what services are involved depending on the configuration.
 *
 * Being a module also has the advantage (over a service) to keep the configuration internally
 * so it can be configured once and then consumed as many time as needed.
 */
export class RemoteModule {
    /**
     * A static url to call.
     */
    public readonly url: string|null = null;

    /**
     * The name of an ApiEndpoint.
     */
    public readonly endpoint: string|null = null;

    /**
     * The HTTP method to use when doing the request.
     * Will be overridden by the endpoint is you're using one.
     */
    public readonly method: HttpMethod = HttpMethod.GET;

    /**
     * A model identifier that will define two things:
     *
     *   - the collection in which to find the endpoint (if "endpoint" is defined),
     *   - the type of entity the payload/response should be transformed from/into.
     */
    public readonly model: ModelExtendedIdentifier|null = null;

    /**
     * The parameters to replace in the url or add in the query string.
     */
    public readonly urlParams!: Record<string, Primitive>;

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
     * Last response generated from the send().
     */
    private response: HttpResponse<any>|null = null;

    private api: ApiService = Injector.Get(ApiService);
    private eventDispatcher: EventDispatcher = new EventDispatcher();

    /**
     * Check if the module is usable in the current configuration.
     */
    public get isApplicable(): boolean {
        return this.endpoint !== null || this.url !== null;
    }

    /**
     * Check if request is pending.
     */
    public get pending(): boolean {
        return this.response !== null && this.response.isPending;
    }

    /**
     * Update the configuration and notify of the change.
     */
    public updateConfiguration(configuration: Partial<RemoteConfigurationInterface>): void {
        for (const prop of ['url', 'endpoint', 'method', 'model', 'urlParams', 'payloadType', 'responseType', 'allowMultiple']) {
            (this as any)[prop] = !isUndefined((configuration as any)[prop]) ? (configuration as any)[prop] : (this as any)[prop];
        }
        this.eventDispatcher.dispatch(RemoteModuleEvents.ConfigurationChange);
    }

    /**
     * Call the server using the current configuration and process the results.
     */
    public send<T = any>(payload?: any, urlParams: Record<string, Primitive> = {}, tags: symbol[] = []): HttpResponse<T> {
        if (this.response !== null && this.response.isPending && !this.allowMultiple) {
            this.response.request.cancel();
        }
        this.response = this.api.send(this.api.build()
            .url(this.url)
            .endpoint(this.endpoint)
            .model(this.model)
            .method(this.method)
            .params(extend({}, [this.urlParams, urlParams]))
            .payload(payload, this.payloadType)
            .responseType(this.responseType)
            .tags(tags)
            .getRequest()
        );
        this.response.promise.catch((response: HttpResponse<any>) => {
            // Check `isError` to skip canceled requests.
            if (response.isError && !(response.result instanceof RemoteException)) {
                if (isObject(response.result) && !isUndefined(response.result.exception) && isNonEmptyString(response.result.exception.message)) {
                    response.result = new RemoteException(
                        response.result.exception.type || 'remote',
                        response.result.exception.message
                    );
                }
            }
            // The catch() DOES NOT guarantee an exception in `result`.
            // If none of the checks above matched, we simply let the result as is, the caller will have to deal with it.
            return response;
        });
        return this.response;
    }

    /**
     * By notified when a configuration value changes.
     */
    public onConfigurationChange(cb: (event: EventArg) => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(RemoteModuleEvents.ConfigurationChange, cb);
    }
}
