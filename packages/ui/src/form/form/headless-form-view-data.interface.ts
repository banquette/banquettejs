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
     * Try to get a control, and create it if missing.
     */
    getControl(path: string, throwIfMissing?: boolean): FormComponentInterface|null;
}
