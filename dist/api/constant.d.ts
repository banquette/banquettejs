/**
 * Events emitted by the api service.
 */
export declare const ApiEvents: {
    /**
     * Emitted right before an HTTP request is executed, and before the payload is encoded.
     */
    BeforeRequest: symbol;
    /**
     * Emitted after the response of an HTTP request has been decoded, no matter it it succeeded or not.
     */
    BeforeResponse: symbol;
    /**
     * Emitted after a request has been successfully executed and after the response has been decoded.
     */
    RequestSuccess: symbol;
    /**
     * Emitted after a request failed to execute for an error on the network level.
     * Any error returned from the server in the body of the request, but with a 200 Http code, will not trigger this event.
     */
    RequestFailure: symbol;
};
/**
 * Filtering tag set by the `ApiService` so it can listen to events of its own requests.
 *
 * @see EventDispatcher documentation for more details on tags.
 */
export declare const ApiTag: unique symbol;
/**
 * Propagation tag set by built-in processors.
 *
 * @see EventDispatcher documentation for more details on tags.
 */
export declare const ApiProcessorTag: unique symbol;
