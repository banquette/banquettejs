import { UnsubscribeFunction } from "@banquette/event";
import { BeforeValueChangeFormEvent } from "./event/before-value-change.form-event";
import { ErrorsChangedFormEvent } from "./event/errors-changed.form-event";
import { StateChangedFormEvent } from "./event/state-changed.form-event";
import { ValueChangedFormEvent } from "./event/value-changed.form-event";
import { FormComponentInterface } from "./form-component.interface";
import { FormViewControlInterface } from "./form-view-control.interface";
import { FormViewModelInterface } from "./form-view-model.interface";

export interface FormControlInterface extends FormComponentInterface {
    /**
     * Set the view model the control will communicate with.
     *
     * @return A object the view model must use to interact with the control.
     */
    setViewModel(viewModel: FormViewModelInterface): FormViewControlInterface;

    /**
     * Unset the view model assigned with the form control.
     */
    unsetViewModel(viewModel: FormViewModelInterface): void;

    /**
     * Ask the view to get the focus on the control.
     */
    focus(): void;

    /**
     * Inverse of `focus()`.
     */
    blur(): void;

    /**
     * Register a callback that will be called before the value of the control changes.
     *
     * @return A method to call to unsubscribe.
     */
    onBeforeValueChange(callback: (event: BeforeValueChangeFormEvent) => void, priority?: number): UnsubscribeFunction;

    /**
     * Register a callback that will be called when the value of the component changes.
     *
     * @return A method to call to unsubscribe.
     */
    onValueChanged(callback: (event: ValueChangedFormEvent) => void, priority?: number, selfOnly?: boolean): UnsubscribeFunction;

    /**
     * Register a callback that will be called when the value of a flag changes.
     *
     * @return A method to call to unsubscribe.
     */
    onStateChanged(callback: (event: StateChangedFormEvent) => void, priority?: number, selfOnly?: boolean): UnsubscribeFunction;

    /**
     * Register a callback that will be called when an error is added of removed from the component.
     *
     * @return A method to call to unsubscribe.
     */
    onErrorsChanged(callback: (event: ErrorsChangedFormEvent) => void, priority?: number, selfOnly?: boolean): UnsubscribeFunction;
}
