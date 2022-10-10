/**
 * Basic HTTP methods.
 * The list is not meant to be exhaustive, it only contains what's being used.
 */
export declare enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
    OPTIONS = "OPTIONS"
}
/**
 * Different status of the response.
 */
export declare enum HttpResponseStatus {
    Pending = 0,
    Success = 1,
    Error = 2,
    Canceled = 3
}
/**
 * Progress status of a request.
 * Used by progression events only.
 */
export declare enum HttpRequestProgressStatus {
    /**
     * The request is preparing to execute.
     */
    Preparing = 0,
    /**
     * The body of the request is uploading to the server.
     */
    Uploading = 1,
    /**
     * The response from the server is downloading.
     */
    Downloading = 2,
    /**
     * The request is closed.
     * This status only inform there is no network activity for this request anymore, it can have succeeded or failed.
     * The response object contains the details of what happened.
     */
    Closed = 3
}
/**
 * Types of url parameters.
 */
export declare enum UrlParameterType {
    /**
     * Will be set as a url parameter if a replacement is found in the url.
     * Otherwise, the parameter will be added to the query.
     */
    Auto = 0,
    /**
     * The parameter will always be added to the url.
     * If no placeholder exists, the parameter is ignored.
     */
    Url = 1,
    /**
     * The parameter will always be added to the query string,
     * even if a placeholder exists in the url.
     */
    Query = 2
}
/**
 * Tag to use in the event dispatcher when subscribing to alter the request body or response.
 *
 * Tagging your subscriber as "encoder" will allow to stop the propagation of encoders only,
 * without disturbing the flow of other subscribers.
 *
 * @see EventDispatcher documentation for more details on tags.
 */
export declare const EncoderTag: unique symbol;
export declare const DecoderTag: unique symbol;
/**
 * Tag used to mark adapters in the container.
 */
export declare const AdapterTag: unique symbol;
/**
 * Events emitted by the network watcher service.
 */
export declare const NetworkEvents: {
    /**
     * Emitted when the network connectivity is lost.
     */
    Offline: symbol;
    /**
     * Emitted when the network connectivity is back.
     */
    Online: symbol;
    /**
     * Emitted when the network availability changes, no matter in which way.
     */
    AvailabilityChange: symbol;
};
/**
 * Events emitted by the http service.
 */
export declare const HttpEvents: {
    /**
     * Emitted when a request has been added to the queue of the HTTP service.
     * A request can be queued multiple time if an error occurs.
     */
    RequestQueued: symbol;
    /**
     * Emitted right before an HTTP request is executed.
     */
    BeforeRequest: symbol;
    /**
     * Emitted after a request has been executed successfully (on a network level).
     *
     * Having a response only mean the communication with the server worked, but
     * the response could still hold an error.
     */
    BeforeResponse: symbol;
    /**
     * Emitted after a request has been successfully executed.
     */
    RequestSuccess: symbol;
    /**
     * Emitted after a request failed to execute.
     *
     * The request may have failed for a network issue (no internet) or because the timeout is reached,
     * on because it has been canceled, this kind of thing.
     *
     * Any error returned from the server in the body of the request, but with a 200 Http code, will not trigger this event.
     */
    RequestFailure: symbol;
};
/**
 * List of HTTP status codes and their signification.
 */
export declare const HttpStatus: Record<number, string>;
/**
 * Headers not following the generic naming rule.
 *
 * @source https://github.com/middyjs/middy/blob/main/packages/http-header-normalizer/index.js
 */
export declare const HttpHeadersExceptionsMap: Record<string, string>;
