import { UnsubscribeFunction } from "@banquette/event";
import { UsageException } from "@banquette/exception";
import { BeforeValueChangeFormEvent, ErrorsChangedFormEvent, StateChangedFormEvent, ValueChangedFormEvent, FormError, FormViewControlInterface } from "@banquette/form";
import { proxy } from "@banquette/utils-misc";
import { extend, getObjectKeys } from "@banquette/utils-object";
import { isUndefined, VoidCallback } from "@banquette/utils-type";
import { HeadlessInterface } from "../headless.interface";
import { ControlViewDataInterface } from "./control-view-data.interface";
import { NoopTransformer } from "./noop.value-transformer";
import { ValueTransformerInterface } from "./value-transformer.interface";

/**
 * A module keeping a FormControl and a viewData object in sync, without exposing the control directly to the view.
 */
export class ControlModule<ControlValueType = any> implements HeadlessInterface<ControlViewDataInterface> {
    public readonly viewData!: ControlViewDataInterface;

    /**
     * Current view value of the form control.
     *
     * This is NOT the same as `activeControl.value` because the value may be subjected to a transformation
     * when being set in the form control.
     */
    private activeControlViewValue!: ControlValueType;

    /**
     * The form control currently in use by the view model.
     * The control can change at any time by calling the `setControl()` method.
     */
    private activeControl!: FormViewControlInterface;

    /**
     * If `true`, the proxy protecting view data allows mutations.
     */
    private allowProtectedMutations: boolean = false;

    /**
     * An object holding view data only accessible on read by the end-user but
     * that can be mutated internally (if the `allowProtectedMutations` is `true`).
     *
     * Values are stored here so there write access can be controlled.
     */
    private protectedViewData: Record<string, any> = {};

    /**
     * Array of functions to call to remove the listeners that have been placed on the form control.
     */
    private unsubscribeMethods: UnsubscribeFunction[] = [];

    /**
     * A flag indicating the FormControl's value is being updated.
     */
    private updatingControl: boolean = false;

    private externalEvents: Record<number, {type: keyof FormViewControlInterface, callback: Function, unsubscribe: UnsubscribeFunction}> = {};

    /**
     * @param control          The FormControl to manipulate
     * @param valueTransformer (optional) The transformer used to transform the value between the view and the control
     */
    public constructor(control: FormViewControlInterface, private valueTransformer: ValueTransformerInterface = NoopTransformer) {
        this.activeControl = control;
        this.viewData = this.buildViewData({});
        this.setControl(control);
    }

    /**
     * @inheritDoc
     */
    public setViewData(viewData: ControlViewDataInterface): void {
        (this as any /* Writeable<ControlModule> */).viewData = this.buildViewData(viewData);
    }

    /**
     * Set the control the view model will communicate with.
     */
    public setControl(control: FormViewControlInterface) {
        this.activeControl = control;
        this.mutateInternalViewData(() => {
            this.viewData.invalid = this.activeControl.invalid;
            this.viewData.notValidated = this.activeControl.notValidated;
            this.viewData.validating = this.activeControl.validating;
            this.viewData.dirty = this.activeControl.dirty;
            this.viewData.touched = this.activeControl.touched;
            this.viewData.changed = this.activeControl.changed;
            this.viewData.focused = this.activeControl.focused;
            this.viewData.disabled = this.activeControl.disabled;
            this.viewData.busy = this.activeControl.busy;
            this.viewData.errors = this.activeControl.errors.slice(0);
        });

        // Unsubscribe from listeners of the previous control.
        for (let fn of this.unsubscribeMethods) {
            fn();
        }

        // Listen for changes on the new control.
        this.unsubscribeMethods = [
            this.activeControl.onValueChanged((event: ValueChangedFormEvent) => {
                this.updateValueFromControl(event.newValue);
            }),
            this.activeControl.onStateChanged((event: StateChangedFormEvent) => {
                if (!isUndefined((this.viewData as any)[event.state])) {
                    this.mutateInternalViewData(() => {
                        (this.viewData as any)[event.state] = event.newValue;
                    });
                }
            }),
            this.activeControl.onErrorsChanged((event: ErrorsChangedFormEvent) => {
                this.mutateInternalViewData(() => {
                    this.viewData.errors = event.errors.slice(0);
                });
            })
        ];

        // Unsubscribe from previous external events are set new ones for the active control.
        for (const id of getObjectKeys(this.externalEvents)) {
            const item = this.externalEvents[id];
            item.unsubscribe();
            item.unsubscribe = this.activeControl[item.type](item.callback);
        }
    }

    /**
     * Be notified before the value of the form control changes.
     */
    public onBeforeValueChange(cb: (event: BeforeValueChangeFormEvent) => void): UnsubscribeFunction {
        return this.subscribeToExternalEvent('onBeforeValueChange', cb);
    }

    /**
     * Be notified after the form control value changed.
     */
    public onValueChanged(cb: (event: ValueChangedFormEvent) => void): UnsubscribeFunction {
        return this.subscribeToExternalEvent('onValueChanged', cb);
    }

    /**
     * Be notified when the form control state changes.
     */
    public onStateChanged(cb: (event: StateChangedFormEvent) => void): UnsubscribeFunction {
        return this.subscribeToExternalEvent('onStateChanged', cb);
    }

    /**
     * Subscribe to an event from the outside of the module.
     *
     * The event binding is a bit tricky because the active control can change at any moment
     * so the event must be removed from the old control and attached to the new one when that happens,
     * while being invisible for the outside.
     */
    private subscribeToExternalEvent = (() => {
        let id: number = 0;
        return (event: keyof FormViewControlInterface, cb: Function): UnsubscribeFunction => {
            const localId = ++id;
            this.externalEvents[localId] = {
                type: event,
                callback: cb,
                unsubscribe: this.activeControl[event](cb)
            };
            return () => {
                if (!isUndefined(this.externalEvents[localId])) {
                    this.externalEvents[localId].unsubscribe();
                    delete this.externalEvents[localId];
                }
            };
        };
    })();

    /**
     * Update the value without triggering a control update.
     */
    public updateValueFromControl(controlValue: any): void {
        if (this.updatingControl) {
            return ;
        }
        this.updatingControl = true;
        this.viewData.value = this.valueTransformer.controlToView(controlValue);
        this.updatingControl = false;
    }

    /**
     * Shortcut for `this.activeControl.setState(VisualState.Focused, true)`.
     */
    public onFocus(): void {
        if (!this.viewData.disabled) {
            this.activeControl.markAsFocused();
        }
    }

    /**
     * Shortcut for `this.activeControl.setState(VisualState.Focused, false)`.
     */
    public onBlur(): void {
        this.activeControl.markAsBlurred();
    }

    /**
     * Allow you to modify protected view data. Use at your own risk.
     */
    public mutateInternalViewData(cb: VoidCallback): void {
        this.allowProtectedMutations = true;
        try {
            cb();
        } finally {
            this.allowProtectedMutations = false;
        }
    }

    /**
     * @inheritDoc
     */
    private buildViewData(viewData: Partial<ControlViewDataInterface>): ControlViewDataInterface {
        const that = this;

        // Ids are always read-only.
        this.defineReadOnlyProxy(viewData, 'id', () => this.activeControl.id);
        this.defineReadOnlyProxy(viewData, 'formId', () => this.activeControl.formId);
        this.defineReadOnlyProxy(viewData, 'fullId', () => this.activeControl.formId ? (this.activeControl.formId + '_' + this.activeControl.id) : null);

        // Basic states, can be mutated internally.
        this.defineMutableProxy(viewData, 'invalid', this.activeControl.invalid);
        this.defineMutableProxy(viewData, 'notValidated', this.activeControl.notValidated);
        this.defineMutableProxy(viewData, 'validating', this.activeControl.validating);
        this.defineMutableProxy(viewData, 'dirty', this.activeControl.dirty);
        this.defineMutableProxy(viewData, 'touched', this.activeControl.touched);
        this.defineMutableProxy(viewData, 'changed', this.activeControl.changed);
        this.defineMutableProxy(viewData, 'focused', this.activeControl.focused);
        this.defineMutableProxy(viewData, 'errors', this.activeControl.errors.slice(0));

        // Busy and disabled can be controlled from the view side, but only through proxy methods.
        this.defineUserMutableFlagProxy(viewData, 'disabled', this.activeControl.disabled, 'markAsDisabled', 'markAsEnabled');
        this.defineUserMutableFlagProxy(viewData, 'busy', this.activeControl.busy, 'markAsBusy', 'markAsNotBusy');

        // Then define the rest of the view data and merge them with those from sub classes.
        viewData = extend(viewData, {
            tabIndex: 0,

            // Inverse states, always read-only.
            get valid(): boolean                { return that.activeControl.valid },
            get validated(): boolean            { return that.activeControl.validated },
            get notValidating(): boolean        { return that.activeControl.notValidating },
            get validatedAndValid(): boolean    { return that.activeControl.validatedAndValid },
            get pristine(): boolean             { return that.activeControl.pristine },
            get untouched(): boolean            { return that.activeControl.untouched },
            get unchanged(): boolean            { return that.activeControl.unchanged },
            get unfocused(): boolean            { return that.activeControl.unfocused },
            get notBusy()                       { return that.activeControl.notBusy },
            get enabled()                       { return that.activeControl.enabled },

            get errorsMap() {
                return that.activeControl.errors.reduce((acc: Record<string, string | null>, item: FormError) => {
                    acc[item.type] = item.message;
                    return acc;
                }, {});
            },
            get value() { return that.activeControlViewValue },
            set value(newValue: any) {
                that.activeControlViewValue = newValue;

                if (!that.updatingControl) {
                    that.updatingControl = true;
                    that.activeControl.setValue(that.valueTransformer.viewToControl(that.activeControlViewValue));
                    that.updatingControl = false;
                }
            },
            onFocus: proxy(this.onFocus, this),
            onBlur: proxy(this.onBlur, this),

            // By default nothing is done, the flag is simply changed,
            // but you should override these methods if you need to actually do something to give/remove focus of the control.
            focus: proxy(this.onFocus, this),
            blur: proxy(this.onBlur, this)
        });
        return viewData as ControlViewDataInterface;
    }

    /**
     * Defines a proxy for which the value can never change.
     */
    private defineReadOnlyProxy = (target: object, property: string, get: () => any) => {
        Object.defineProperty(target, property, {
            enumerable: true,
            configurable: true,
            get
        });
    }

    /**
     * Defines a proxy for which the value can only be updated internally or via a callback function.
     */
    private defineMutableProxy = (target: object, property: string, value: any, callback?: (value: any) => void) => {
        const hasCallback = !isUndefined(callback);
        this.protectedViewData[property] = value;
        Object.defineProperty(target, property, {
            enumerable: true,
            configurable: true,
            get: () => this.protectedViewData[property],
            set: (value: any) => {
                if (hasCallback) {
                    (callback as Function)(value);
                    return ;
                }
                if (!this.allowProtectedMutations) {
                    throw new UsageException(`You can\'t change the value of "${property}" from the view.`);
                }
                this.protectedViewData[property] = value;
            }
        });
    }

    /**
     * Define a proxy for a flag that can be mutated by the end-user.
     */
    private defineUserMutableFlagProxy = (target: object, property: string, value: any, ifTrue: keyof FormViewControlInterface, ifFalse: keyof FormViewControlInterface) => {
        this.defineMutableProxy(target, property, value, (value: boolean) => {
            if (this.allowProtectedMutations) {
                this.protectedViewData[property] = value;
            } else {
                this.setWriteableFlag(value, ifTrue, ifFalse);
            }
        });
    }

    /**
     * Shorthand to call one method or the other depending on a flag.
     */
    private setWriteableFlag(value: boolean, ifTrue: keyof FormViewControlInterface, ifFalse: keyof FormViewControlInterface): void {
        this.activeControl[value ? ifTrue : ifFalse]();
    }
}
