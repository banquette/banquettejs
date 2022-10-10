import { UnsubscribeFunction } from "@banquette/event/type";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { AbstractFormComponent } from "./abstract-form-component";
import { BasicState } from "./constant";
import { BeforeValueChangeFormEvent } from "./event/before-value-change.form-event";
import { FormControlInterface } from "./form-control.interface";
import { FormViewControlInterface } from "./form-view-control.interface";
import { FormViewModelInterface } from "./form-view-model.interface";
export declare class FormControl<ValueType = unknown> extends AbstractFormComponent<ValueType> implements FormControlInterface {
    /**
     * A FormControl has no child.
     */
    readonly children: null;
    /**
     * The original value of this control.
     * That's the value given to the control before the user does anything.
     * If the current value equals this value, the control is considered "unchanged".
     *
     * Only form controls have a default value because parent components don't have their own value.
     * Their value is always deducted from the value of their children.
     */
    readonly defaultValue: any;
    /**
     * The views of the control.
     * If none, the control is disabled, meaning its value will not automatically bubble up.
     *
     * This is done like this mainly so you can only use a part of a form created via an annotated model.
     */
    private viewModels;
    /**
     * A reference on the view models currently doing a call.
     */
    private currentViewModels;
    /**
     * A reference on the view model that have the focus.
     */
    private focusedViewModel?;
    /**
     * The last known value.
     */
    private lastValue;
    constructor(value?: any, validator?: ValidatorInterface);
    /**
     * Set the new value of the control.
     */
    setValue: (value: any) => void;
    /**
     * Set the default value of the control.
     *
     * Calling this method will also set the field back an "unchanged" state.
     * Further reset of the control will set this value back into the "real" value of the control.
     */
    setDefaultValue(value: any): void;
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
     * Reset the control. It has the following effects:
     *
     *   - Set the value to the "default value",
     *   - Unmark the following states: `BasicState.Changed`, `BasicState.Touched`, `BasicState.Dirty`, `BasicState.Validated`,
     *   - Blur the control if focused,
     *   - Clear validation errors.
     *
     * Resetting the control does not impact the following states: `ContextualizedState.Disabled`, `BasicState.Busy`, `BasicState.Validating`, `BasicState.Concrete`.
     */
    doReset(): void;
    /**
     * @inheritDoc
     */
    setValidator(validator: ValidatorInterface | null): void;
    /**
     * Register a callback that will be called before the value of the control changes.
     *
     * @return A method to call to unsubscribe.
     */
    onBeforeValueChange(callback: (event: BeforeValueChangeFormEvent) => void, priority?: number): UnsubscribeFunction;
    /**
     * Change the `focused` state of the control to `true`.
     * Only exposed to the view model.
     */
    private markAsFocused;
    /**
     * Change the `focused` state of the control to `false`.
     * Only exposed to the view model.
     */
    private markAsBlurred;
    /**
     * Change the `busy` state of the control to `true`.
     * Only exposed to the view model.
     */
    private markAsBusy;
    /**
     * Change the `busy` state of the control to `false`.
     * Only exposed to the view model.
     */
    private markAsNotBusy;
    /**
     * Override to ensure the id is correctly set.
     */
    protected markBasicState(state: BasicState | BasicState[]): void;
    /**
     * Override to ensure the id is correctly set.
     */
    protected unmarkBasicState(state: BasicState | BasicState[]): void;
    /**
     * Create the decorator that will be used by the view model to communicate with the control.
     *
     * Doing this instead of exposing the FormControl instance directly has several advantages:
     *
     *   1) It's possible to expose methods to the view model only.
     *      For example `markAsFocused` and `markAsFocused` are only available to the view model
     *      as only the view model have the ability to give the focus to the actual html element.
     *
     *   2) By wrapping certain methods like `setValue` we can know it is called from the view model,
     *      thus avoiding updating the value in the view model which would result in an infinite recursion.
     *
     * Overall, it gives a better control over the capabilities given to the view model.
     */
    private buildControlViewDecorator;
    /**
     * Proxify each call to retain the source view model and apply the ViewModel call context.
     */
    private buildContextualizedViewModelApi;
}
