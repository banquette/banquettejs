import { FormViewModelInterface } from "./form-view-model.interface";
import { FormError } from "./form-error";

/**
 * Bridge between a FormControl and a view in the direction "View -> FormControl".
 */
export interface FormViewControlInterface {
    /**
     * A component is `valid` when the validation has run and no error has been found.
     */
    readonly valid: boolean;

    /**
     * A component is `invalid` when the validation has run and one or more errors has been found.
     */
    readonly invalid: boolean;

    /**
     * A component is `validated` when the validation has run, no matter if errors have been found or not.
     */
    readonly validated: boolean;

    /**
     * Inverse of `validated`.
     */
    readonly notValidated: boolean;

    /**
     * A component is `validating` when its validator is currently running.
     */
    readonly validating: boolean;

    /**
     * Inverse of `validating`.
     */
    readonly notValidating: boolean;

    /**
     * Only `true` when the component has been validated, has not validation running and no error have been found.
     */
    readonly validatedAndValid: boolean;

    /**
     * A component is `busy` when the view model of a component or one of its children is processing something.
     */
    readonly busy: boolean;

    /**
     * Inverse of `busy`.
     */
    readonly notBusy: boolean;

    /**
     * A disabled component is non-interactive and excluded from the validation.
     *
     * This is a "multi origin" flag, meaning it can be set multiple time by different sources.
     * All original sources must remove their flag for the component to become enabled again.
     */
    readonly disabled: boolean;

    /**
     * Inverse of `disabled`.
     */
    readonly enabled: boolean;

    /**
     * A component is `dirty` if the user has changed its value in the UI, no matter its current value.
     */
    readonly dirty: boolean;

    /**
     * Inverse of `dirty`.
     */
    readonly pristine: boolean;

    /**
     * True if the component is marked as `touched`.
     *
     * A component is marked `touched` once the user has triggered a `blur` event on it.
     */
    readonly touched: boolean;

    /**
     * Inverse of `touched`.
     */
    readonly untouched: boolean;

    /**
     * A component is `changed` when its value is different from the initial value.
     */
    readonly changed: boolean;

    /**
     * Inverse of `changed`.
     */
    readonly unchanged: boolean;

    /**
     * A component is `focused` when its the current field on edition.
     */
    readonly focused: boolean;

    /**
     * Inverse of `focused`.
     */
    readonly unfocused: boolean;

    /**
     * The list of errors of the component.
     */
    readonly errors: FormError[];

    /**
     * The original value of the control.
     */
    readonly defaultValue: any;

    /**
     * Update the value of the control with the value of the view.
     */
    setValue(value: any): void;

    /**
     * Set the default value of this control.
     *
     * Calling this method will also set the field back an "unchanged" state.
     * Further reset of the control will set this value back into the "real" value of the control.
     */
    setDefaultValue(value: any): void;

    /**
     * Change the `disabled` state of the control to `true`.
     */
    markAsDisabled(): void;

    /**
     * Change the `focused` state of the control to `false`.
     */
    markAsEnabled(): void;

    /**
     * Change the `focused` state of the control to `true`.
     */
    markAsFocused(): void;

    /**
     * Change the `focused` state of the control to `false`.
     */
    markAsBlurred(): void;

    /**
     * Change the `busy` state of the control to `true`.
     */
    markAsBusy(): void;

    /**
     * Change the `busy` state of the control to `false`.
     */
    markAsNotBusy(): void;

    /**
     * Unset the view assigned with the form control.
     */
    unsetViewModel(viewModel: FormViewModelInterface): void;

    /**
     * Reset the control. It has the following effects:
     *
     *   - Set the value to the "default value",
     *   - Unmark the following states: `BasicState.Changed`, `BasicState.Touched`, `BasicState.Dirty`, `BasicState.Validated`,
     *   - Blur the control if focused,
     *   - Clear validation errors.
     *
     * Resetting the control does not impact the following states: `ContextualizedState.Disabled`, `BasicState.Busy`, `BasicState.Validating`, `BasicState.Concrete`.
     */
    reset(): void;
}
