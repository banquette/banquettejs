import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { ContainerValidatorInterface } from "./container-validator.interface";
import { ValidatorComponent } from "./validator.component";

/**
 * Base class for container validator components.
 */
export abstract class ContainerValidatorComponent extends ValidatorComponent implements ContainerValidatorInterface {
    private static MaxId: number = 0;

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
    public registerChild(validator: ValidatorInterface): () => void {
        const nextId = ++ContainerValidatorComponent.MaxId;
        this.subValidators[nextId] = validator;
        if (this.parentValidator) {
            this.parentValidator.registerChild(this.buildValidator());
        }
        return () => {
            delete this.subValidators[nextId];
        };
    }
}
