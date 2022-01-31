import { ValidatorInterface } from "@banquette/validation/validator.interface";

export interface ApiEndpointParameterInterface {
    /**
     * Is the parameter mandatory.
     */
    required: boolean;

    /**
     * The default value if the parameter is not defined when building the url.
     */
    defaultValue?: string;

    /**
     * An optional validator to execute.
     */
    validator: ValidatorInterface|null;

    /**
     * Is the parameter found in the url?
     */
    url: boolean;
}
