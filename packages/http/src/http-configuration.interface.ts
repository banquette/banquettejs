import { ConstructorFunction } from "@banquette/utils";
import { AdapterInterface } from "./adapter/adapter.interface";

/**
 * Define the configuration object of the network.
 */
export interface HttpConfigurationInterface {
    /**
     * Maximum time to wait for a request to finish before it is considered a failure.
     */
    requestTimeout: number;

    /**
     * Number of time a request will be retried until it is considered a failure.
     * Request are replayed only in case of connection error. If the request fails because of a server error it will not try again.
     */
    requestErrorRetryCount: number;

    /**
     * Time to wait before retrying when a request has failed for a connection error.
     */
    connectionErrorRetryDelay: number;

    /**
     * If true, if any request returns an HTTP status 401, the page will be reloaded
     * so the server can redirect the user to the login page or whatever.
     */
    reloadOnAuthenticationError?: boolean;

    /**
     * The adapter to use to make XHR requests.
     */
    adapter?: ConstructorFunction<AdapterInterface>;
}
