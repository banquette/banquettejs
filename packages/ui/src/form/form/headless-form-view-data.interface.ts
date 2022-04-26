import { FormComponentInterface } from "@banquette/form/form-component.interface";
import { Action } from "./constant";

/**
 * Data exposed to the view by the headless form view model.
 */
export interface HeadlessFormViewDataInterface {
    /**
     * Combination of the `Action` and `Status` flags to define what the form is currently doing.
     */
    action: Action;

    /**
     * Shorthands for the different states the form can be in.
     */
    loading: boolean;
    loadError: boolean;
    loadSuccess: boolean;
    persisting: boolean;
    persistError: boolean;
    persistSuccess: boolean;
    validating: boolean;
    validateError: boolean;
    validateSuccess: boolean;

    /**
     * Current active errors.
     */
    errorsMap: Record<string, string|null>;

    /**
     * Form state and errors.
     */
    form: {
        valid: boolean;
        invalid: boolean;
        validated: boolean;
        notValidated: boolean;
        validating: boolean;
        notValidating: boolean;
        validatedAndValid: boolean;
        busy: boolean;
        notBusy: boolean;
        enabled: boolean;
        disabled: boolean;
        dirty: boolean;
        pristine: boolean;
        touched: boolean;
        untouched: boolean;
        changed: boolean;
        unchanged: boolean;
        value: any;
    };

    /**
     * Try to get a control, and create it if missing.
     */
    getControl(path: string, throwIfMissing?: boolean): FormComponentInterface|null;
}
