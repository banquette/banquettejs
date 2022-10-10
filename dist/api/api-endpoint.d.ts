import { HttpMethod } from "@banquette/http/constants";
import { HttpRequest } from "@banquette/http/http-request";
import { Primitive, StringEnum } from "@banquette/utils-type/types";
import { ApiEndpointOverride } from "./api-endpoint-override";
import { ApiEndpointParameterInterface } from "./api-endpoint-parameter.interface";
import { ApiEndpointOptions } from "./api-endpoint.options";
export declare class ApiEndpoint {
    /**
     * The url of the endpoint.
     * The url can contain variables, surrounded by brackets "{" and "}":
     * e.g.: /user/{id}
     */
    readonly url: string;
    /**
     * The HTTP method to use when calling the endpoint.
     *
     * Default method is GET.
     */
    readonly method: StringEnum<HttpMethod>;
    /**
     * Allowed url parameters.
     * Each parameter can have a validator associated with it to make it required or validate its value.
     *
     * If a parameter not present in the map is given as input when building the url, an exception
     * will be thrown.
     *
     * To allow any parameter you can use the wildcard ("*") parameter name.
     */
    readonly params: Record<string, ApiEndpointParameterInterface>;
    /**
     * Headers to include when building the request.
     */
    readonly headers: Record<string, string>;
    /**
     * Type of encoder to use when building the request.
     */
    readonly payloadType: symbol;
    /**
     * Type of decoder to process the response.
     */
    readonly responseType: symbol;
    /**
     * Maximum duration of the request (in milliseconds).
     */
    readonly timeout: number | null;
    /**
     * If true, cookies and auth headers are included in the request.
     */
    readonly withCredentials: boolean;
    /**
     * MimeType of the payload.
     */
    readonly mimeType: string | null;
    /**
     * Maximum number of tries allowed for the request.
     */
    readonly retry: number | null;
    /**
     * Time to wait before trying again in case of error.
     */
    readonly retryDelay: number | 'auto' | null;
    /**
     * The higher the priority the sooner the request will be executed when the queue contains multiple requests.
     */
    readonly priority: number | null;
    /**
     * Tags that will be sent with emitted events.
     */
    readonly tags: symbol[];
    /**
     * Any additional data that will be added to the request.
     */
    readonly extras: Record<string, any>;
    constructor(options: ApiEndpointOptions | string);
    /**
     * Create a http request for the endpoint.
     *
     * @throws UsageException
     * @throws InvalidParameterException
     * @throws UnsupportedParametersException
     * @throws MissingRequiredParameterException
     */
    buildRequest(payload: any, configuration?: ApiEndpointOverride): HttpRequest;
    buildRequest(payload: any, params?: Record<string, Primitive>): HttpRequest;
    /**
     * Search for parameters in the url and generate a default configuration for them.
     */
    private buildParametersFromUrl;
    /**
     * Separate the parameters given as input into url and query parameters and validate them.
     *
     * @throws UsageException
     * @throws InvalidParameterException
     * @throws UnsupportedParametersException
     * @throws MissingRequiredParameterException
     */
    private sortAndValidateParameters;
    /**
     * Do some basic processing to remove common mistakes in the url.
     */
    private normalizeUrl;
    /**
     * Convert ApiEndpointParameterOptions into ApiEndpointParameterInterface.
     */
    private normalizeParameters;
}
