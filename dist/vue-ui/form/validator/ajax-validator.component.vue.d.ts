import { ApiEndpointStorageService } from "@banquette/api/api-endpoint-storage.service";
import { HttpMethod } from "@banquette/http/constants";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { ValidatorComponent } from "./validator.component";
export default class ValidateAjaxComponent extends ValidatorComponent {
    private api;
    /**
     * A raw url to call.
     */
    url: string | null;
    /**
     * An Api endpoint name.
     */
    endpoint: string | null;
    /**
     * Parameters to add to the url or query.
     */
    urlParams: Record<string, any>;
    /**
     * Http method to use.
     * Only used if no endpoint is defined.
     */
    method: HttpMethod;
    /**
     * Name of the property that contains the boolean response in the server's response.
     * If none is defined, the http status is used.
     */
    responseProperty: string | null;
    constructor(api: ApiEndpointStorageService);
    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface;
    /**
     * Handle the server response.
     */
    private handleResponse;
}
