import { UnsubscribeFunction } from "@banquette/event/type";
import { BeforeValueChangeFormEvent } from "@banquette/form/event/before-value-change.form-event";
import { StateChangedFormEvent } from "@banquette/form/event/state-changed.form-event";
import { ValueChangedFormEvent } from "@banquette/form/event/value-changed.form-event";
import { FormViewControlInterface } from "@banquette/form/form-view-control.interface";
import { VoidCallback } from "@banquette/utils-type/types";
import { HeadlessInterface } from "../headless.interface";
import { ControlViewDataInterface } from "./control-view-data.interface";
import { ValueTransformerInterface } from "./value-transformer.interface";
/**
 * A module keeping a FormControl and a viewData object in sync, without exposing the control directly to the view.
 */
export declare class ControlModule<ControlValueType = any> implements HeadlessInterface<ControlViewDataInterface> {
    private valueTransformer;
    readonly viewData: ControlViewDataInterface;
    /**
     * Current view value of the form control.
     *
     * This is NOT the same as `activeControl.value` because the value may be subjected to a transformation
     * when being set in the form control.
     */
    private activeControlViewValue;
    /**
     * The form control currently in use by the view model.
     * The control can change at any time by calling the `setControl()` method.
     */
    private activeControl;
    /**
     * If `true`, the proxy protecting view data allows mutations.
     */
    private allowProtectedMutations;
    /**
     * An object holding view data only accessible on read by the end-user but
     * that can be mutated internally (if the `allowProtectedMutations` is `true`).
     *
     * Values are stored here so there write access can be controlled.
     */
    private protectedViewData;
    /**
     * Array of functions to call to remove the listeners that have been placed on the form control.
     */
    private unsubscribeMethods;
    /**
     * A flag indicating the FormControl's value is being updated.
     */
    private updatingControl;
    private externalEvents;
    /**
     * @param control          The FormControl to manipulate
     * @param valueTransformer (optional) The transformer used to transform the value between the view and the control
     */
    constructor(control: FormViewControlInterface, valueTransformer?: ValueTransformerInterface);
    /**
     * @inheritDoc
     */
    setViewData(viewData: ControlViewDataInterface): void;
    /**
     * Set the control the view model will communicate with.
     */
    setControl(control: FormViewControlInterface): void;
    /**
     * Be notified before the value of the form control changes.
     */
    onBeforeValueChange(cb: (event: BeforeValueChangeFormEvent) => void): UnsubscribeFunction;
    /**
     * Be notified after the form control value changed.
     */
    onValueChanged(cb: (event: ValueChangedFormEvent) => void): UnsubscribeFunction;
    /**
     * Be notified when the form control state changes.
     */
    onStateChanged(cb: (event: StateChangedFormEvent) => void): UnsubscribeFunction;
    /**
     * Subscribe to an event from the outside of the module.
     *
     * The event binding is a bit tricky because the active control can change at any moment
     * so the event must be removed from the old control and attached to the new one when that happens,
     * while being invisible for the outside.
     */
    private subscribeToExternalEvent;
    /**
     * Update the value without triggering a control update.
     */
    updateValueFromControl(controlValue: any): void;
    /**
     * Shortcut for `this.activeControl.setState(VisualState.Focused, true)`.
     */
    onFocus(): void;
    /**
     * Shortcut for `this.activeControl.setState(VisualState.Focused, false)`.
     */
    onBlur(): void;
    /**
     * Allow you to modify protected view data. Use at your own risk.
     */
    mutateInternalViewData(cb: VoidCallback): void;
    /**
     * @inheritDoc
     */
    private buildViewData;
    /**
     * Defines a proxy for which the value can never change.
     */
    private defineReadOnlyProxy;
    /**
     * Defines a proxy for which the value can only be updated internally or via a callback function.
     */
    private defineMutableProxy;
    /**
     * Define a proxy for a flag that can be mutated by the end-user.
     */
    private defineUserMutableFlagProxy;
    /**
     * Shorthand to call one method or the other depending on a flag.
     */
    private setWriteableFlag;
}
