import { Inject, Injector, Module } from "@banquette/dependency-injection";
import { UnsubscribeFunction } from "@banquette/event";
import { UsageException } from "@banquette/exception";
import {
    FormComponentInterface,
    FormControl,
    FormGroupInterface,
    FormViewControlInterface,
    FormViewModelInterface
} from "@banquette/form";
import { proxy, WeakObjectRef } from "@banquette/utils-misc";
import { isObject, isString, isUndefined } from "@banquette/utils-type";
import { Composable, Computed, Lifecycle, Prop, Ref, Watch } from "@banquette/vue-typescript";
import { FormStorage } from "./form-storage";

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
     *
     * TODO: Watch for changes and update _form
     */
    @Prop({type: [String, Object], default: null}) public form!: FormGroupInterface|string|null;

    /**
     * A reference on the form control associated with the component.
     *
     * TODO: Watch for changes and update _control
     */
    @Prop({type: [String, Object], default: null}) public control!: FormControl|string|null;

    /**
     * Visual states.
     */
    @Computed() get valid():             boolean { return this.getFromControl('valid', true) }
    @Computed() get invalid():           boolean { return !this.valid }
    @Computed() get notValidated():      boolean { return this.getFromControl('notValidated', false) }
    @Computed() get validated():         boolean { return !this.notValidated }
    @Computed() get validating():        boolean { return this.getFromControl('validating', false) }
    @Computed() get notValidating():     boolean { return !this.validating }
    @Computed() get validatedAndValid(): boolean { return this.getFromControl('validatedAndValid', false) }
    @Computed() get busy():              boolean { return this.getFromControl('busy', false) }
    @Computed() get notBusy():           boolean { return !this.busy }
    @Computed() get disabled():          boolean { return this.getFromControl('disabled', true) }
    @Computed() get enabled():           boolean { return !this.disabled }
    @Computed() get dirty():             boolean { return this.getFromControl('dirty', false) }
    @Computed() get pristine():          boolean { return !this.dirty }
    @Computed() get touched():           boolean { return this.getFromControl('touched', false) }
    @Computed() get untouched():         boolean { return !this.touched }
    @Computed() get changed():           boolean { return this.getFromControl('changed', false) }
    @Computed() get unchanged():         boolean { return !this.changed }
    @Computed() get focused():           boolean { return this.getFromControl('focused', false) }
    @Computed() get unfocused():         boolean { return !this.focused }

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
    private _formRef!: WeakObjectRef<FormGroupInterface>|null;

    /**
     * The actual control instance, if available.
     *
     * This can be null at any time because the control can be destroyed or not yet created
     * while the Vue component is still trying to access it.
     */
    @Ref() private _control!: FormControl|null;

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
     * A key/value pair of methods to call on the control when it becomes available.
     */
    private methodsQueue: Record<string, any[][]> = {};

    /**
     * The list of subscribers to call each time a "real" FormControl instance is assigned.
     */
    private onReadySubscribers: Array<(control: FormViewControlInterface) => void> = [];

    public constructor(@Inject(FormStorage) private formStorage: FormStorage) {
    }

    @Lifecycle('unmounted')
    public onComponentUnmounted(): void {
        if (this._formRef) {
            this._formRef.release();
            this._formRef = null;
        }
        if (this.controlAddedUnsubscribe) {
            this.controlAddedUnsubscribe();
            this.controlAddedUnsubscribe = null;
        }
        if (this.bridge && this.viewModel) {
            this.bridge.unsetViewModel(this.viewModel);
        }
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
        if (this.bridge && this.viewModel) {
            this.bridge.unsetViewModel(this.viewModel);
        }
        this.viewModel = null;
    }

    /**
     * @inheritDoc
     */
    public markAsDisabled(): void {
        this.callControlMethod('markAsDisabled');
    }

    /**
     * @inheritDoc
     */
    public markAsEnabled(): void {
        this.callControlMethod('markAsEnabled');
    }

    /**
     * @inheritDoc
     */
    public markAsFocused(): void {
        this.callControlMethod('markAsFocused');
    }

    /**
     * @inheritDoc
     */
    public markAsBlurred(): void {
        this.callControlMethod('markAsBlurred');
    }

    /**
     * @inheritDoc
     */
    public markAsBusy(): void {
        this.callControlMethod('markAsBusy');
    }

    /**
     * @inheritDoc
     */
    public markAsNotBusy(): void {
        this.callControlMethod('markAsNotBusy');
    }

    /**
     * @inheritDoc
     */
    public setDefaultValue(value: any): void {
        this.callControlMethod('setDefaultValue', value);
    }

    /**
     * @inheritDoc
     */
    public setValue(value: any): void {
        this.callControlMethod('setValue', value);
    }

    /**
     * @inheritDoc
     */
    public reset(): void {
        this.callControlMethod('reset');
    }

    /**
     * Called when the control is real and ready to be used.
     */
    public onReady(cb: (control: FormViewControlInterface) => void): () => void {
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
     * Update the local `_form` and `_control` variables to reflect the props values.
     */
    @Watch(['form', 'control'], {immediate: true})
    private updateFormAndControl(): void {
        this._form = this.resolveForm();
        const newControl: any = this.resolveControl(this._form || null);
        if (newControl !== this._control) {
            this._control = newControl;
            if (this._control) {
                this.onControlAssigned(this._control);
            }
        }
        if (!this._control && this._form && !this.controlAddedUnsubscribe) {
            this.controlAddedUnsubscribe = this._form.onControlAdded(proxy(this.updateFormAndControl, this));
        }
    }

    /**
     * Try to call a method on the control or queue the call if no control is available yet.
     * The queue will automatically be flushed when the control becomes available.
     */
    private callControlMethod(method: keyof FormViewControlInterface, ...args: any[]): void {
        delete this.methodsQueue[method];
        if (this.bridge) {
            this.bridge[method].apply(this.bridge, args as any);
        } else {
            if (isUndefined(this.methodsQueue[method])) {
                this.methodsQueue[method] = [];
            }
            this.methodsQueue[method].push(args);
        }
    }

    /**
     * Execute all control methods in the queue and clear the queue.
     */
    private flushControlMethodsQueue(control: FormControl): void {
        for (const method of Object.keys(this.methodsQueue)) {
            for (const args of this.methodsQueue[method]) {
                control[method as keyof FormControl].apply(control, args);
            }
        }
        this.methodsQueue = {};
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
        if (form === null) {
            return null;
        }
        let controlPath = this.control as string;
        let pathStartIdx = controlPath.indexOf(':');
        if (pathStartIdx > -1) {
            controlPath = controlPath.substring(pathStartIdx + 1);
        }
        const resolvedControl: FormComponentInterface|null = form.getByPath(controlPath);
        if (resolvedControl === null) {
            return null;
        }
        if (!(resolvedControl instanceof FormControl)) {
            throw new UsageException(`The control path "${controlPath}" doesn't resolve to a FormControl.`);
        }
        return resolvedControl;
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
        if (!this._formRef && formName !== null) {
            this._formRef = this.formStorage.getRef(formName);
        }
        if (this._formRef) {
            return this._formRef.obj;
        }
        return null;
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
        if (this.viewModel) {
            this.bridge = control.setViewModel(this.viewModel);
        }
        this.flushControlMethodsQueue(control);
        for (const subscriber of this.onReadySubscribers) {
            subscriber(this);
        }
        if (this.controlAddedUnsubscribe) {
            this.controlAddedUnsubscribe();
            this.controlAddedUnsubscribe = null;
        }
    }
}
