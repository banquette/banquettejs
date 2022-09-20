import { HttpMethod } from "@banquette/http/constants";
import { ModelExtendedIdentifier } from "@banquette/model/type";
import { Primitive, StringEnum } from "@banquette/utils-type/types";

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
}
