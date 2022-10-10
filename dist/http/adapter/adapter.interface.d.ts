import { ObservablePromise } from "@banquette/promise/observable-promise";
import { AdapterRequest } from "./adapter-request";
import { AdapterResponse } from "./adapter-response";
/**
 * The adapter is responsible for doing the actual XHR request as defined by the HttpRequest object.
 */
export interface AdapterInterface {
    /**
     * Execute a request.
     */
    execute(request: AdapterRequest): ObservablePromise<AdapterResponse>;
    /**
     * Cancel the request.
     */
    cancel(): void;
}
