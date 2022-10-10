import { VoidCallback } from "@banquette/utils-type/types";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { ValidatorComponent } from "./validator.component";
import { ContainerValidatorInterface } from "./container-validator.interface";
/**
 * Base class for container validator components.
 */
export declare abstract class ContainerValidatorComponent extends ValidatorComponent implements ContainerValidatorInterface {
    private static MaxId;
    /**
     * A map of sub validators, indexed by id.
     */
    private subValidators;
    /**
     * Get the list of child validators.
     */
    protected get children(): ValidatorInterface[];
    /**
     * Add a sub validator and returns a function to call to remove it.
     */
    registerChild(validator: ValidatorInterface): VoidCallback;
}
