import { FormComponentInterface } from "@banquette/form/form-component.interface";
import { FormError } from "@banquette/form/form-error";
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
     * Map of errors concerning the headless form itself, not the underlying `FormGroup`.
     * Indexed by error type.
     *
     * @see ErrorType
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
        errorsDeepMap: Record<string, FormError[]>;
    };

    /**
     * Try to get a control, and create it if missing.
     */
    getControl(path: string, throwIfMissing?: boolean): FormComponentInterface|null;

    /**
     * A `shorthand` for `form.errorsDeepMap[path]` that ensures an array is returned.
     */
    getControlErrors(path: string): FormError[];
}
