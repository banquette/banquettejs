import { UnsubscribeFunction } from "@banquette/event/type";
import { BeforeValueChangeFormEvent } from "@banquette/form/event/before-value-change.form-event";
import { ErrorsChangedFormEvent } from "@banquette/form/event/errors-changed.form-event";
import { StateChangedFormEvent } from "@banquette/form/event/state-changed.form-event";
import { ValueChangedFormEvent } from "@banquette/form/event/value-changed.form-event";
import { FormComponentInterface } from "@banquette/form/form-component.interface";
import { FormControl } from "@banquette/form/form-control";
import { FormError } from "@banquette/form/form-error";
import { FormGroupInterface } from "@banquette/form/form-group.interface";
import { FormViewControlInterface } from "@banquette/form/form-view-control.interface";
import { FormViewModelInterface } from "@banquette/form/form-view-model.interface";
import { VoidCallback } from "@banquette/utils-type/types";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { FormStorageService } from "./form-storage.service";
/**
 * A proxy between the Vue component and the form control.
 *
 * Required because the form control may not be available at all times and
 * need to be resolved if a string is given as input.
 */
export declare class FormControlProxy implements FormViewControlInterface {
    private formStorage;
    /**
     * A reference to the form the control can be found in.
     */
    form: FormGroupInterface | string | null;
    /**
     * A reference on the form control associated with the component.
     */
    control: FormControl | string | null;
    /**
     * Visual states.
     */
    get id(): number;
    get formId(): string;
    get path(): string;
    get valid(): boolean;
    get invalid(): boolean;
    get notValidated(): boolean;
    get validated(): boolean;
    get validating(): boolean;
    get notValidating(): boolean;
    get validatedAndValid(): boolean;
    get busy(): boolean;
    get notBusy(): boolean;
    get disabled(): boolean;
    get enabled(): boolean;
    get dirty(): boolean;
    get pristine(): boolean;
    get touched(): boolean;
    get untouched(): boolean;
    get changed(): boolean;
    get unchanged(): boolean;
    get focused(): boolean;
    get unfocused(): boolean;
    get errors(): FormError[];
    get ready(): boolean;
    get focusedViewModel(): FormViewModelInterface | null;
    /**
     * Not a computed because Vue doesn't need to see it, that's for internal use only.
     * And exposing it to vue will conflict with the `value` prop of `AbstractVueFormComponent` anyway.
     */
    get value(): any;
    /**
     * Get the original value of the control.
     */
    get defaultValue(): any;
    /**
     * A reference on the root of the form.
     */
    private _form;
    /**
     * A weak reference on the root of the form, in case it has been resolved from a string.
     */
    private _formRef;
    /**
     * A form to fallback to if none is defined through the prop.
     */
    private fallbackForm;
    /**
     * A fallback function that will be called if `resolveControl` fails to resolve the form control.
     */
    private fallbackGetControl;
    /**
     * The actual control instance, if available.
     *
     * This can be null at any time because the control can be destroyed or not yet created
     * while the Vue component is still trying to access it.
     */
    private _control;
    /**
     * This control is only set if a `forceValue` has been called.
     * This means the end-user wants to use the `v-model` notation instead of a `FormControl`.
     *
     * This is stored separately so both ways can coexist, so the user can have BOTH a `v-model` and a control.
     */
    private vModelControl;
    /**
     * The object exposed by the FormControl when the view model is assigned.
     * That's the object we must use to communicate with the control.
     */
    private bridge;
    /**
     * Unsubscribe function of the `onControlAdded` event.
     */
    private controlAddedUnsubscribe;
    /**
     * The view model that must be used by the form control.
     *
     * The proxy will never use the view model itself, it's only stored here so it can be assigned
     * to the form control when it becomes available.
     */
    private viewModel;
    /**
     * Array of methods waiting to be called when the control becomes available.
     */
    private methodsQueue;
    /**
     * The list of subscribers to call each time a "real" FormControl instance is assigned.
     */
    private onReadySubscribers;
    /**
     * The list of subscribers to call each time the "real" FormControl instance is detached.
     */
    private onDetachSubscribers;
    /**
     * If `true`, the control has been created by a call to `getControl`.
     */
    private isInternalControl;
    constructor(formStorage: FormStorageService);
    onComponentUnmounted(): void;
    /**
     * Set the view model to use to interact with the FormControl.
     */
    setViewModel(viewModel: FormViewModelInterface): void;
    /**
     * @inheritDoc
     */
    unsetViewModel(): void;
    /**
     * @inheritDoc
     */
    markAsDisabled(): void;
    /**
     * @inheritDoc
     */
    markAsEnabled(): void;
    /**
     * @inheritDoc
     */
    markAsFocused(): void;
    /**
     * @inheritDoc
     */
    markAsBlurred(): void;
    /**
     * @inheritDoc
     */
    markAsBusy(): void;
    /**
     * @inheritDoc
     */
    markAsNotBusy(): void;
    /**
     * @inheritDoc
     */
    setDefaultValue(value: any): void;
    /**
     * @inheritDoc
     */
    setValue(value: any): void;
    /**
     * @inheritDoc
     */
    reset(): void;
    /**
     * @inheritDoc
     */
    getExtras(): Record<string, any>;
    /**
     * @inheritDoc
     */
    setExtras(extras: Record<string, any>): void;
    /**
     * @inheritDoc
     */
    getExtra<T = any>(name: string, defaultValue: any): T;
    /**
     * @inheritDoc
     */
    setExtra(name: string, value: any): void;
    /**
     * Set the validator to use to validate the value of the component.
     */
    setValidator(validator: ValidatorInterface | null): void;
    /**
     * The a fallback form to use to resolve controls paths if none is defined by the prop.
     */
    setFallbackForm(form: FormGroupInterface | null): void;
    /**
     * The a fallback form to use to resolve controls paths if none is defined by the prop.
     */
    setFallbackGetControl(fallback: (path: string) => FormComponentInterface | null): void;
    /**
     * This method guarantees that a FormControl is returned.
     * If no control has been resolved yet, an internal control is created and associated with the proxy.
     */
    getControl(): FormControl;
    /**
     * Force the proxy to use a specific control.
     */
    setControl(control: FormControl): void;
    /**
     * @inheritDoc
     */
    onBeforeValueChange(callback: (event: BeforeValueChangeFormEvent) => void, priority?: number): UnsubscribeFunction;
    /**
     * @inheritDoc
     */
    onStateChanged(callback: (event: StateChangedFormEvent) => void, priority?: number): UnsubscribeFunction;
    /**
     * @inheritDoc
     */
    onValueChanged(callback: (event: ValueChangedFormEvent) => void, priority?: number): UnsubscribeFunction;
    /**
     * @inheritDoc
     */
    onErrorsChanged(callback: (event: ErrorsChangedFormEvent) => void, priority?: number): UnsubscribeFunction;
    /**
     * Called when the control is real and ready to be used.
     */
    onReady(cb: (control: FormViewControlInterface) => void): VoidCallback;
    /**
     * Called when the real control behind the proxy is detached.
     */
    onDetach(cb: VoidCallback): VoidCallback;
    /**
     * Update the local `_form` and `_control` variables to reflect the props values.
     */
    private updateFormAndControl;
    /**
     * Try to call a method on the control or queue the call if no control is available yet.
     * The queue will automatically be flushed when the control becomes available.
     */
    private callControlMethod;
    /**
     * Generic method to subscribe to an event on a possibly not existing control.
     */
    private subscribeToControl;
    /**
     * Execute all control methods in the queue and clear the queue.
     */
    private flushControlMethodsQueue;
    /**
     * Try to get a reference on the form control.
     */
    private resolveControl;
    /**
     * Try to get a reference on the form.
     */
    private resolveForm;
    /**
     * Shortcut to fetch a value from the form control with a default if not available.
     */
    private getFromControl;
    /**
     * Called when a new control instance is assigned to the proxy.
     */
    private onControlAssigned;
    /**
     * Called when the control instance is unassigned from the proxy.
     */
    private onControlUnassigned;
}
