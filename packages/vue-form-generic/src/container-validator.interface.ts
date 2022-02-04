import { ValidatorInterface } from "@banquette/validation/validator.interface";

export interface ContainerValidatorInterface {
    /**
     * Add a sub validator and returns a function to call to remove it.
     */
    registerChild(validator: ValidatorInterface): () => void;
}
