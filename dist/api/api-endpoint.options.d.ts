import { HttpMethod } from "@banquette/http/constants";
import { Constructor, StringEnum } from "@banquette/utils-type/types";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { ApiEndpointParameterInterface } from "./api-endpoint-parameter.interface";
export declare type ApiEndpointParameterOptions = Partial<Omit<ApiEndpointParameterInterface, 'url'>> | ValidatorInterface | true | null;
export declare type ApiEndpointOptionsWithIdentifiers = ApiEndpointOptions & {
    name: string;
    ctor?: Constructor;
};
export interface ApiEndpointOptions {
    /**
     * The url of the endpoint.
     * The url can contain variables, surrounded by brackets "{" and "}":
     * e.g.?: /user/{id}
     */
    url: string;
    /**
     * The HTTP method to use when calling the endpoint.
     *
     * Default method is GET.
     */
    method?: StringEnum<HttpMethod>;
    /**
     * Allowed url parameters.
     * Each parameter can have a validator associated with it to make it required or validate its value.
     *
     * If a parameter not present in the map is given as input when building the url, an exception
     * will be thrown.
     *
     * To allow any parameter you can use the wildcard ("*") parameter name.
     */
    params?: Record<string, ApiEndpointParameterOptions>;
    /**
     * Headers to include when building the request.
     */
    headers?: Record<string, string>;
    /**
     * Type of encoder to use when building the request.
     */
    payloadType?: symbol;
    /**
     * Type of decoder to process the response.
     */
    responseType?: symbol;
    /**
     * Maximum duration of the request (in milliseconds).
     */
    timeout?: number | null;
    /**
     * If true, cookies and auth headers are included in the request.
     */
    withCredentials?: boolean | null;
    /**
     * MimeType of the payload.
     */
    mimeType?: string | null;
    /**
     * Maximum number of tries allowed for the request.
     */
    retry?: number | null;
    /**
     * Time to wait before trying again in case of error.
     */
    retryDelay?: number | 'auto' | null;
    /**
     * The higher the priority the sooner the request will be executed when the queue contains multiple requests.
     */
    priority?: number | null;
    /**
     * Tags that will be sent with emitted events.
     */
    tags?: symbol[];
    /**
     * Any additional data that will be added to the request.
     */
    extras?: Record<string, any>;
}
