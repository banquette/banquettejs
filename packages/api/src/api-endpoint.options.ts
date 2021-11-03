import { HttpMethod } from "@banquette/http";
import { ApiEndpointParameterInterface } from "./api-endpoint-parameter.interface";
import { ValidatorInterface } from "@banquette/validation";

export type ApiEndpointParameterOptions = Partial<Omit<ApiEndpointParameterInterface, 'url'>>|ValidatorInterface|true|null;
export type ApiEndpointOptionsWithName = ApiEndpointOptions & {name: string};

export interface ApiEndpointOptions {
    /**
     * The url of the endpoint.
     * The url can contain variables, surrounded by brackets "{" and "}":
     * e.g.: /user/{id}
     */
    url: string;

    /**
     * The HTTP method to use when calling the endpoint.
     *
     * Default method is GET.
     */
    method?: HttpMethod;

    /**
     * Allowed url parameters.
     * Each parameter can have a validator associated with it to make it required or validate its value.
     *
     * If a parameter not present in the map is given as input when building the url, an exception
     * will be thrown.
     *
     * To allow any parameter you can use the wildcard ("*") parameter name.
     */
    parameters?: Record<string, ApiEndpointParameterOptions>;

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
}
