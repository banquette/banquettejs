import { ValidationResult } from "@banquette/validation/validation-result";
import { FormComponentInterface } from "./form-component.interface";

/**
 * Bridge between a two form component in the direction "Parent -> Child".
 */
export interface FormChildComponentInterface {
    /**
     * The actual instance of the component.
     */
    readonly decorated: FormComponentInterface;

    /**
     * Update the value of the component.
     */
    setValue(value: any): void;

    /**
     * Update the default value of the component.
     */
    setDefaultValue(value: any): void;

    /**
     * Unset the parent component.
     */
    unsetParent(): void;

    /**
     * Disable the component.
     */
    disable(): void;

    /**
     * Enable the component.
     */
    enable(): void;

    /**
     * Propagate the basic states of the component to its parents.
     */
    propagateStatesToParent(): void;

    /**
     * Remove the marking of the component on the basic states of its parents.
     */
    removeStatesFromParent(): void;

    /**
     * Validate the component.
     */
    validate(): ValidationResult;

    /**
     * Do what needs to be done with a ValidationResult that just got settled.
     */
    handleValidationResult(result: ValidationResult): void;
}
