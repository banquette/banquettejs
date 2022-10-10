import { EventArg } from "@banquette/event/event-arg";
import { UnsubscribeFunction } from "@banquette/event/type";
import { HttpMethod } from "@banquette/http/constants";
import { HttpResponse } from "@banquette/http/http-response";
import { ModelExtendedIdentifier } from "@banquette/model/type";
import { Primitive, StringEnum } from "@banquette/utils-type/types";
import { RemoteConfigurationInterface } from "./remote-configuration.interface";
/**
 * Offer an easy way for ui components to make http calls without having to worry about what parameters
 * are defined and what services are involved depending on the configuration.
 *
 * Being a module also has the advantage (over a service) to keep the configuration internally
 * so it can be configured once and then consumed as many time as needed.
 */
export declare class RemoteModule {
    /**
     * A static url to call.
     */
    readonly url: string | null;
    /**
     * The name of an ApiEndpoint.
     */
    readonly endpoint: string | null;
    /**
     * The HTTP method to use when doing the request.
     * Will be overridden by the endpoint is you're using one.
     */
    readonly method: StringEnum<HttpMethod>;
    /**
     * A model identifier that will define two things:
     *
     *   - the collection in which to find the endpoint (if "endpoint" is defined),
     *   - the type of entity the payload/response should be transformed from/into.
     */
    readonly model: ModelExtendedIdentifier | null;
    /**
     * The parameters to replace in the url or add in the query string.
     */
    readonly urlParams: Record<string, Primitive>;
    /**
     * Headers to add the every request done by the module.
     */
    readonly headers: Record<string, Primitive>;
    /**
     * Set the expected format of the payload.
     */
    readonly payloadType?: symbol;
    /**
     * Set the expected format of the response.
     */
    readonly responseType?: symbol;
    /**
     * If `false`, cancel any running request when `send()` is called.
     */
    private allowMultiple;
    /**
     * Last response generated from the send().
     */
    private response;
    private api;
    private eventDispatcher;
    /**
     * Check if the module is usable in the current configuration.
     */
    get isApplicable(): boolean;
    /**
     * Check if request is pending.
     */
    get pending(): boolean;
    /**
     * Update the configuration and notify of the change.
     */
    updateConfiguration(configuration: Partial<RemoteConfigurationInterface>): void;
    /**
     * Call the server using the current configuration and process the results.
     */
    send<T = any>(payload?: any, urlParams?: Record<string, Primitive>, headers?: Record<string, Primitive>, tags?: symbol[]): HttpResponse<T>;
    /**
     * By notified when a configuration value changes.
     */
    onConfigurationChange(cb: (event: EventArg) => void): UnsubscribeFunction;
}
