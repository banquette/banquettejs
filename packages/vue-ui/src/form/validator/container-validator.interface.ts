import { VoidCallback } from "@banquette/utils-type/types";
import { ValidatorInterface } from "@banquette/validation/validator.interface";

export interface ContainerValidatorInterface {
    /**
     * Add a sub validator and returns a function to call to remove it.
     */
    registerChild(validator: ValidatorInterface): VoidCallback;

    /**
     * Ask the container to rebuild its validator.
     */
    rebuild(): void;
}
