import { ConstructorFunction } from "@banquette/utils";
import { AdapterInterface } from "./adapter/adapter.interface";

/**
 * Define the configuration object of the network.
 */
export interface HttpConfigurationInterface {
    /**
     * The adapter to use to make XHR requests.
     */
    adapter?: ConstructorFunction<AdapterInterface>;

    /**
     * Maximum number of requests that can run simultaneously.
     */
    maxSimultaneousRequests: number;

    /**
     * Default maximum time to wait for a request to finish before it is considered a failure.
     * This can be overridden for each request.
     */
    requestTimeout: number;

    /**
     * Default number of time a request will be retried until it is considered a failure.
     *
     * Request are only replayed when there is a network error.
     * If the request fails because of a server error it will not try again.
     *
     * This can be overridden for each request.
     */
    requestRetryCount: number;

    /**
     * Default time (in milliseconds) to wait before retrying when a request has failed for a network error.
     *
     * If set to 'auto', an exponential backoff retry strategy is used.
     *
     * This can be overridden for each request.
     */
    requestRetryDelay: number|'auto';
}
