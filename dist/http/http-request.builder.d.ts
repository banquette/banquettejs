import { AbstractRequestBuilder } from "./abstract-http-request.builder";
import { HttpRequest } from "./http-request";
export declare class HttpRequestBuilder extends AbstractRequestBuilder<HttpRequest> {
    /**
     * Get the resulting request.
     */
    getRequest(): HttpRequest;
    /**
     * Create a new instance of the builder.
     */
    static Create(): HttpRequestBuilder;
}
