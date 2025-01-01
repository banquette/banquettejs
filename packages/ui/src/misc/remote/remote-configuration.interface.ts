import { HttpMethod } from "@banquette/http";
import { ModelExtendedIdentifier } from "@banquette/model";
import { Primitive, StringEnum } from "@banquette/utils-type";
import { RealTimeStrategy } from "./constant";

export interface RemoteConfigurationInterface {
    /**
     * A static url to call.
     */
    url: string|null;

    /**
     * The name of an ApiEndpoint.
     */
    endpoint: string|null;

    /**
     * The HTTP method to use when doing the request.
     * Will be overridden by the endpoint is you're using one.
     */
    method: StringEnum<HttpMethod>;

    /**
     * A model identifier that will define two things:
     *
     *   - the collection in which to find the endpoint (if "endpoint" is defined),
     *   - the type of entity the payload/response should be transformed from/into.
     */
    model: ModelExtendedIdentifier|null;

    /**
     * The parameters to replace in the url or add in the query string.
     */
    urlParams: Record<string, Primitive>;

    /**
     * Headers to add to every request of the module.
     */
    headers: Record<string, Primitive>;

    /**
     * Set the expected format of the payload.
     */
    payloadType?: symbol;

    /**
     * Set the expected format of the response.
     */
    responseType?: symbol;

    /**
     * If `false`, cancel any running request when `send()` is called.
     */
    allowMultiple: boolean;

    /**
     * If `true`, a given url will only be called once, and its response will be stored in memory.
     */
    cacheInMemory: boolean;

    /**
     * The strategy to use for real-time updates.
     */
    realTimeStrategy: RealTimeStrategy;

    /**
     * The endpoint to check for the last update timestamp (used in TimestampPolling strategy).
     */
     realTimeEndpoint: string | null;

    /**
     * The unique name referencing the data endpoint for subscription (used in TimestampPolling strategy).
     */
    subscriptionName: string | null;

    /**
     * Polling interval in milliseconds.
     */
    pollingInterval: number;
}
