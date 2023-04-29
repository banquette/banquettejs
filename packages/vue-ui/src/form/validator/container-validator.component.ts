import { VoidCallback } from "@banquette/utils-type";
import { ValidatorInterface } from "@banquette/validation";
import { ContainerValidatorInterface } from "./container-validator.interface";
import { BtValidator } from "./validator.component";

let maxId = 0;

/**
 * Base class for container validator components.
 */
export abstract class BtContainerValidator extends BtValidator implements ContainerValidatorInterface {
    /**
     * A map of sub validators, indexed by id.
     */
    private subValidators: Record<number, ValidatorInterface> = {};

    /**
     * Get the list of child validators.
     */
    protected get children(): ValidatorInterface[] {
        return Object.values(this.subValidators);
    }

    /**
     * Add a sub validator and returns a function to call to remove it.
     */
    public registerChild(validator: ValidatorInterface): VoidCallback {
        const nextId = ++maxId;
        this.subValidators[nextId] = validator;
        if (this.parentValidator) {
            this.assignToParentValidator(this.parentValidator);
        }
        return () => {
            delete this.subValidators[nextId];
        };
    }
}
