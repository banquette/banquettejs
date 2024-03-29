import { Inject, Injector, Module } from "@banquette/dependency-injection";
import { UnsubscribeFunction } from "@banquette/event";
import { UsageException } from "@banquette/exception";
import {
    BeforeValueChangeFormEvent,
    ComponentNotFoundException,
    ErrorsChangedFormEvent,
    FormComponentInterface,
    FormControl,
    FormError,
    FormGroupInterface,
    FormViewControlInterface,
    FormViewModelInterface,
    StateChangedFormEvent,
    ValueChangedFormEvent
} from "@banquette/form";
import { proxy, WeakObjectRef } from "@banquette/utils-misc";
import { GenericCallback, isFunction, isObject, isString, VoidCallback } from "@banquette/utils-type";
import { ValidatorInterface } from "@banquette/validation";
import { Composable, Computed, ImmediateStrategy, Lifecycle, Prop, Watch } from "@banquette/vue-typescript";
import { PropType } from "vue";
import { FormStorageService } from "./form-storage.service";
import { ProxifiedCallInterface } from "./proxified-call.interface";

/**
 * A proxy between the Vue component and the form control.
 *
 * Required because the form control may not be available at all times and
 * need to be resolved if a string is given as input.
 */
@Module()
@Composable(() => Injector.Get(FormControlProxy))
export class FormControlProxy implements FormViewControlInterface {
    /**
     * A reference to the form the control can be found in.
     */
    @Prop({type: [String, Object] as PropType<FormGroupInterface|string|null>, default: null}) public form!: FormGroupInterface|string|null;

    /**
     * A reference on the form control associated with the component.
     */
    @Prop({type: [String, Object] as PropType<FormControl|string|null>, default: null}) public control!: FormControl|string|null;

    /**
     * Visual states.
     */
    @Computed(false) get id():                number { return this.getFromControl('id', 0) }
    @Computed(false) get formId():            string { return this.getFromControl('formId', '') }
    @Computed(false) get path():              string { return this.getFromControl('path', null) }
    @Computed(false) get valid():             boolean { return this.getFromControl('valid', true) }
    @Computed(false) get invalid():           boolean { return !this.valid }
    @Computed(false) get notValidated():      boolean { return this.getFromControl('notValidated', false) }
    @Computed(false) get validated():         boolean { return !this.notValidated }
    @Computed(false) get validating():        boolean { return this.getFromControl('validating', false) }
    @Computed(false) get notValidating():     boolean { return !this.validating }
    @Computed(false) get validatedAndValid(): boolean { return this.getFromControl('validatedAndValid', false) }
    @Computed(false) get busy():              boolean { return this.getFromControl('busy', false) }
    @Computed(false) get notBusy():           boolean { return !this.busy }
    @Computed(false) get disabled():          boolean { return this.getFromControl('disabled', true) }
    @Computed(false) get enabled():           boolean { return !this.disabled }
    @Computed(false) get dirty():             boolean { return this.getFromControl('dirty', false) }
    @Computed(false) get pristine():          boolean { return !this.dirty }
    @Computed(false) get touched():           boolean { return this.getFromControl('touched', false) }
    @Computed(false) get untouched():         boolean { return !this.touched }
    @Computed(false) get changed():           boolean { return this.getFromControl('changed', false) }
    @Computed(false) get unchanged():         boolean { return !this.changed }
    @Computed(false) get focused():           boolean { return this.viewModel !== null && this.focusedViewModel !== null && this.focusedViewModel.id === this.viewModel.id }
    @Computed(false) get unfocused():         boolean { return !this.focused }
    @Computed(false) get errors():            FormError[] { return this.getFromControl('errors', []) }
    @Computed(false) get ready():             boolean { return this.bridge !== null }
    @Computed(false) get focusedViewModel():  FormViewModelInterface|null { return this.getFromControl('focusedViewModel', null) }

    /**
     * Not a computed because Vue doesn't need to see it, that's for internal use only.
     * And exposing it to vue will conflict with the `value` prop of `BtAbstractVueForm` anyway.
     */
    public get value(): any { return this.getFromControl('value', null) }

    /**
     * Get the original value of the control.
     */
    public get defaultValue(): any {
        if (this.bridge) {
            return this.bridge.defaultValue;
        }
        return undefined;
    }

    /**
     * A reference on the root of the form.
     */
    private _form!: FormGroupInterface|null;

    /**
     * A weak reference on the root of the form, in case it has been resolved from a string.
     */
    private _formRef!: {name: string, ref: WeakObjectRef<FormGroupInterface>}|null;

    /**
     * A form to fallback to if none is defined through the prop.
     */
    private fallbackForm: FormGroupInterface|null = null;

    /**
     * A fallback function that will be called if `resolveControl` fails to resolve the form control.
     */
    private fallbackGetControl: ((path: string) => FormComponentInterface|null)|null = null;

    /**
     * The actual control instance, if available.
     *
     * This can be null at any time because the control can be destroyed or not yet created
     * while the Vue component is still trying to access it.
     */
    private _control!: FormControl|null;

    /**
     * This control is only set if a `forceValue` has been called.
     * This means the end-user wants to use the `v-model` notation instead of a `FormControl`.
     *
     * This is stored separately so both ways can coexist, so the user can have BOTH a `v-model` and a control.
     */
    private vModelControl: FormControl|null = null;

    /**
     * The object exposed by the FormControl when the view model is assigned.
     * That's the object we must use to communicate with the control.
     */
    private bridge!: FormViewControlInterface|null;

    /**
     * Unsubscribe function of the `onControlAdded` event.
     */
    private controlAddedUnsubscribe!: UnsubscribeFunction|null;

    /**
     * The view model that must be used by the form control.
     *
     * The proxy will never use the view model itself, it's only stored here so it can be assigned
     * to the form control when it becomes available.
     */
    private viewModel!: FormViewModelInterface|null;

    /**
     * Array of methods waiting to be called when the control becomes available.
     */
    private methodsQueue: ProxifiedCallInterface<any>[] = [];

    /**
     * The list of subscribers to call each time a "real" FormControl instance is assigned.
     */
    private onReadySubscribers: Array<(control: FormViewControlInterface) => void> = [];

    /**
     * The list of subscribers to call each time the "real" FormControl instance is detached.
     */
    private onDetachSubscribers: VoidCallback[] = [];

    /**
     * If `true`, the control has been created by a call to `getControl`.
     */
    private isInternalControl: boolean = false;

    public constructor(@Inject(FormStorageService) private formStorage: FormStorageService) {
    }

    @Lifecycle('unmounted')
    public onComponentUnmounted(): void {
        if (this._formRef) {
            this._formRef.ref.release();
            this._formRef = null;
        }
        if (this.controlAddedUnsubscribe) {
            this.controlAddedUnsubscribe();
            this.controlAddedUnsubscribe = null;
        }
        if (this.bridge && this.viewModel) {
            this.bridge.unsetViewModel(this.viewModel);
        }
        this.onReadySubscribers = [];
        this.onDetachSubscribers = [];
    }

    /**
     * Set the view model to use to interact with the FormControl.
     */
    public setViewModel(viewModel: FormViewModelInterface): void {
        this.viewModel = viewModel;
        if (this._control) {
            this.bridge = this._control.setViewModel(this.viewModel);
        }
    }

    /**
     * @inheritDoc
     */
    public unsetViewModel(): void {
        this.onControlUnassigned();
        this.viewModel = null;
    }

    /**
     * @inheritDoc
     */
    public markAsDisabled(): void {
        this.callControlMethod('markAsDisabled', true, true);
    }

    /**
     * @inheritDoc
     */
    public markAsEnabled(): void {
        this.callControlMethod('markAsEnabled', true, true);
    }

    /**
     * @inheritDoc
     */
    public markAsFocused(): void {
        this.callControlMethod('markAsFocused', true, true);
    }

    /**
     * @inheritDoc
     */
    public markAsBlurred(): void {
        this.callControlMethod('markAsBlurred', true, true);
    }

    /**
     * @inheritDoc
     */
    public markAsBusy(): void {
        this.callControlMethod('markAsBusy', true, true);
    }

    /**
     * @inheritDoc
     */
    public markAsNotBusy(): void {
        this.callControlMethod('markAsNotBusy', true, true);
    }

    /**
     * @inheritDoc
     */
    public setDefaultValue(value: any): void {
        this.callControlMethod('setDefaultValue', false, true, value);
    }

    /**
     * @inheritDoc
     */
    public setValue(value: any): void {
        this.callControlMethod('setValue', false, false, value);
    }

    /**
     * @inheritDoc
     */
    public reset(): void {
        this.callControlMethod('reset');
    }

    /**
     * @inheritDoc
     */
    public validate(): boolean|Promise<boolean> {
        return this.callControlMethodForResult<boolean>('validate', false, false);
    }

    /**
     * @inheritDoc
     */
    public getExtras(): Record<string, any> {
        const result = this.callControlMethod<Record<string, any>>('getExtra', false);
        if (result.done) {
            return result.returnValue as Record<string, any>;
        }
        return {};
    }

    /**
     * @inheritDoc
     */
    public setExtras(extras: Record<string, any>): void {
        this.callControlMethod('setExtras', true, false, extras);
    }

    /**
     * @inheritDoc
     */
    public getExtra<T = any>(name: string, defaultValue: any): T {
        const result = this.callControlMethod<T>('getExtras', false, false, name, defaultValue);
        if (result.done) {
            return result.returnValue as T;
        }
        return defaultValue;
    }

    /**
     * @inheritDoc
     */
    public setExtra(name: string, value: any): void {
        this.callControlMethod('setExtra', false, false, name, value);
    }

    /**
     * Set the validator to use to validate the value of the component.
     */
    public setValidator(validator: ValidatorInterface|null): void {
        this.callControlMethod('setValidator', true, true, validator);
    }

    /**
     * The a fallback form to use to resolve controls paths if none is defined by the prop.
     */
    public setFallbackForm(form: FormGroupInterface|null): void {
        this.fallbackForm = form;
        if (!this._control) {
            this.updateFormAndControl();
        }
    }

    /**
     * A fallback form to use to resolve controls paths if none is defined by the prop.
     */
    public setFallbackGetControl(fallback: (path: string) => FormComponentInterface|null): void {
        this.fallbackGetControl = fallback;
        if (!this._control) {
            this.updateFormAndControl();
        }
    }

    /**
     * This method guarantees that a FormControl is returned.
     * If no control has been resolved yet, an internal control is created and associated with the proxy.
     */
    public getControl(): FormControl {
        if (this._control) {
            return this._control;
        }
        this._control = new FormControl();
        this.isInternalControl = true;
        this.onControlAssigned(this._control);
        return this._control;
    }

    /**
     * Force the proxy to use a specific control.
     */
    public setControl(control: FormControl): void {
        if (this._control) {
            if (control.id === this._control.id) {
                return ;
            }
            this.onControlUnassigned();
        }
        this._control = control;
        this.isInternalControl = true;
        this.onControlAssigned(this._control);
    }

    /**
     * @inheritDoc
     */
    public onBeforeValueChange(callback: (event: BeforeValueChangeFormEvent) => void, priority?: number): UnsubscribeFunction {
        return this.subscribeToControl('onBeforeValueChange', callback, priority);
    }

    /**
     * @inheritDoc
     */
    public onStateChanged(callback: (event: StateChangedFormEvent) => void, priority?: number): UnsubscribeFunction {
        return this.subscribeToControl('onStateChanged', callback, priority);
    }

    /**
     * @inheritDoc
     */
    public onValueChanged(callback: (event: ValueChangedFormEvent) => void, priority?: number): UnsubscribeFunction {
        return this.subscribeToControl('onValueChanged', callback, priority);
    }

    /**
     * @inheritDoc
     */
    public onErrorsChanged(callback: (event: ErrorsChangedFormEvent) => void, priority?: number): UnsubscribeFunction {
        return this.subscribeToControl('onErrorsChanged', callback, priority);
    }

    /**
     * Called when the control is real and ready to be used.
     */
    public onReady(cb: (control: FormViewControlInterface) => void): VoidCallback {
        if (this.bridge) {
            // If the control is already defined, just execute the callback and let the rest be.
            cb(this);
        }
        this.onReadySubscribers.push(cb);
        return () => {
            this.onReadySubscribers = this.onReadySubscribers.filter((subscriber) => subscriber !== cb);
        };
    }

    /**
     * Called when the real control behind the proxy is detached.
     */
    public onDetach(cb: VoidCallback): VoidCallback {
        this.onDetachSubscribers.push(cb);
        return () => {
            this.onDetachSubscribers = this.onDetachSubscribers.filter((subscriber) => subscriber !== cb);
        };
    }

    /**
     * Update the local `_form` and `_control` variables to reflect the props values.
     */
    @Watch(['form', 'control'], {immediate: ImmediateStrategy.NextTick})
    private updateFormAndControl(): void {
        if (this.isInternalControl) {
            return ;
        }
        this._form = this.resolveForm();
        const newControl = this.resolveControl(this._form);
        if (newControl !== this._control) {
            if (this._control && (!newControl || newControl.id !== this._control.id)) {
                this.onControlUnassigned();
            }
            this._control = newControl;
            if (this._control) {
                this.onControlAssigned(this._control);
            }
        }
        if (!this._control && this._form && !this.controlAddedUnsubscribe) {
            this.controlAddedUnsubscribe = this._form.onControlAdded(proxy(this.updateFormAndControl, this));
        } else if (this._control && this.controlAddedUnsubscribe) {
            this.controlAddedUnsubscribe();
            this.controlAddedUnsubscribe = null;
        }
    }

    /**
     * Try to call a method on the control or queue the call if no control is available yet.
     * The queue will automatically be flushed when the control becomes available.
     */
    private callControlMethod<R = unknown>(
        method: keyof FormViewControlInterface,
        replayable: boolean = true,
        skippable: boolean = false,
        ...args: any[]
    ): ProxifiedCallInterface<R> {
        const call: ProxifiedCallInterface<R> = {
            method,
            args,
            done: false,
            returnValue: undefined,
            skippable
        };
        if (this.bridge) {
            call.returnValue = this.bridge[method].apply(this.bridge, args as any) as R;
            call.done = true;
        } else if (replayable) {
            this.methodsQueue.push(call);
        }
        return call;
    }

    /**
     * Just like callControlMethod() but handles the return value of the call.
     * If the call has been made synchronously, the return value is returned directly.
     * Otherwise, a promise is returned that will resolve with the return value.
     */
    private callControlMethodForResult<R>(
        method: keyof FormViewControlInterface,
        replayable: boolean = true,
        skippable: boolean = false,
        ...args: any[]
    ): R|Promise<R> {
        const call = this.callControlMethod<R>(method, replayable, skippable, ...args);
        if (call.done) {
            return call.returnValue as R;
        }
        return new Promise<R>((resolve) => {
            call.callback = resolve;
        });
    }

    /**
     * Generic method to subscribe to an event on a possibly not existing control.
     */
    private subscribeToControl(methodName: keyof FormViewControlInterface, callback: GenericCallback, priority?: number): UnsubscribeFunction {
        const call = this.callControlMethod(methodName, true, false, callback, priority);
        return () => {
            if (call.done && isFunction(call.returnValue)) {
                call.returnValue();
            } else if (!call.done) {
                for (let i = 0; i < this.methodsQueue.length; ++i) {
                    if (this.methodsQueue[i] === call) {
                        this.methodsQueue.splice(i, 1);
                        break ;
                    }
                }
            }
        };
    }

    /**
     * Execute all control methods in the queue and clear the queue.
     */
    private flushControlMethodsQueue(bridge: FormViewControlInterface, control: FormControl): void {
        // Purge skippable methods
        const found: string[] = [];
        for (let i = this.methodsQueue.length - 1; i >= 0; i--) {
            if (this.methodsQueue[i].skippable) {
                if (found.indexOf(this.methodsQueue[i].method) > -1) {
                    this.methodsQueue.splice(i, 1);
                    continue ;
                }
                found.push(this.methodsQueue[i].method);
            }
        }
        for (const call of this.methodsQueue) {
            call.returnValue = bridge[call.method].apply(control, call.args);
            call.done = true;
        }
        this.methodsQueue = [];
    }

    /**
     * Try to get a reference on the form control.
     */
    private resolveControl(form: FormGroupInterface|null): FormControl|null {
        if (!this.control) {
            return null;
        }
        if (this.control instanceof FormControl) {
            return this.control;
        }
        if (!isString(this.control) || form === null) {
            return null;
        }
        let controlPath = this.control;
        let pathStartIdx = controlPath.indexOf(':');
        if (pathStartIdx > -1) {
            controlPath = controlPath.substring(pathStartIdx + 1);
        }
        try {
            const resolvedControl: FormComponentInterface | null = form.getByPath(controlPath);
            if (!(resolvedControl instanceof FormControl)) {
                throw new UsageException(`The control path "${controlPath}" doesn't resolve to a FormControl.`);
            }
            return resolvedControl;
        } catch (e) {
            if (e instanceof ComponentNotFoundException) {
                if (this.fallbackGetControl !== null) {
                    const control = this.fallbackGetControl(controlPath);
                    if (control instanceof FormControl) {
                        return control;
                    }
                }
                return null;
            }
            throw e;
        }
    }

    /**
     * Try to get a reference on the form.
     */
    private resolveForm(): FormGroupInterface|null {
        if (isObject(this.form)) {
            return this.form as FormGroupInterface;
        }
        let formName: string|null = isString(this.form) ? this.form : null;
        if (formName === null && isString(this.control) && (this.control.indexOf(':') > -1)) {
            formName = this.control.substring(0, this.control.indexOf(':'));
        }
        if (formName !== null && (!this._formRef || this._formRef.name !== formName)) {
            const resolvedRef = this.formStorage.getRef(formName);
            this._formRef = resolvedRef !== null ? {name: formName, ref: resolvedRef} : resolvedRef;
        }
        if (this._formRef) {
            return this._formRef.ref.obj;
        }
        return this.form === null ? this.fallbackForm : null;
    }

    /**
     * Shortcut to fetch a value from the form control with a default if not available.
     */
    private getFromControl(propName: keyof FormViewControlInterface, defaultValue: any): any {
        if (this.bridge) {
            return this.bridge[propName];
        }
        return defaultValue;
    }

    /**
     * Called when a new control instance is assigned to the proxy.
     */
    private onControlAssigned(control: FormControl): void {
        if (!this.viewModel) {
            return;
        }
        this.bridge = control.setViewModel(this.viewModel);
        this.flushControlMethodsQueue(this.bridge, control);
        for (const subscriber of this.onReadySubscribers) {
            subscriber(this);
        }
    }

    /**
     * Called when the control instance is unassigned from the proxy.
     */
    private onControlUnassigned(): void {
        if (this.bridge && this.viewModel) {
            this.bridge.unsetViewModel(this.viewModel);
        }
        this.bridge = null;
        for (const subscriber of this.onDetachSubscribers) {
            subscriber();
        }
    }
}
