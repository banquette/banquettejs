import { EventPipeline } from "@banquette/event";
import { BasicState, StateChangedFormEvent, ValueChangedFormEvent, FormViewControlInterface } from "@banquette/form";
import { HeadlessControlViewDataInterface, HeadlessControlViewModel } from "@banquette/ui";
import { proxy } from "@banquette/utils-misc";
import { isUndefined, GenericCallback } from "@banquette/utils-type";
import { Component, Expose, Import, Prop, Watch, ImmediateStrategy, Vue, c } from "@banquette/vue-typescript";
import { ViewModelEvents, ViewModelSequence, UndefinedValue } from "./constant";
import { BtForm } from "./form";
import { FormControlProxy } from "./form-control.proxy";

let MaxId = 0;

@Component({
    emits: ['change', 'focus', 'blur', 'update:modelValue']
})
export abstract class BtAbstractVueForm<
    ViewDataType extends HeadlessControlViewDataInterface = HeadlessControlViewDataInterface,
    ViewModelType extends HeadlessControlViewModel<ViewDataType> = HeadlessControlViewModel<ViewDataType>
> extends Vue {
    // "v-model" recipient
    @Prop({default: UndefinedValue}) public modelValue!: any;

    /**
     * The original value given by the end-user through the html element.
     */
    @Prop({name: 'value', default: undefined}) public originalDOMValue!: any;

    /**
     * For external control of the `disabled` state of the control.
     */
    @Prop({type: Boolean, default: false}) public disabled!: boolean;

    /**
     * For external control of the `busy` state of the control.
     */
    @Prop({type: Boolean, default: false}) public busy!: boolean;

    /**
     * HTML tab index (for keyboard navigation).
     */
    @Prop({type: Number, default: 0}) public tabindex!: number;

    /**
     * If `true`, the control will try to gain focus when mounted.
     */
    @Prop({type: Boolean, default: false}) public autofocus!: boolean;

    /**
     * A wrapper around the form control, so we don't have to check if it is available or not.
     */
    @Import(FormControlProxy, false) public proxy!: FormControlProxy;

    /**
     * The object managed by headless view models that is exposed to the view.
     */
    @Expose() public v!: ViewDataType;

    /**
     * The view model the view will use.
     */
    public vm!: ViewModelType;

    /**
     * To easily manage the asynchronous initialization steps specific to Vue.
     */
    protected eventPipeline = new EventPipeline();

    private unsubscribeCallbacks: GenericCallback[] = [];
    private controlUnsubscribeCallbacks: GenericCallback[] = [];

    public constructor() {
        super();
        this.eventPipeline.add([
            ViewModelEvents.Configure,
            ViewModelEvents.Initialize,
            ViewModelEvents.Ready,
        ], ViewModelSequence.Initialize);

        // Configure step
        this.eventPipeline.subscribe(ViewModelEvents.Configure, proxy(this.configureViewModel, this));
        this.eventPipeline.subscribe(ViewModelEvents.Configure, proxy(this.configureProxy, this));

        // Initialize step
        this.eventPipeline.subscribe(ViewModelEvents.Initialize, proxy(this.initializeProxy, this));
    }

    /**
     * Vue lifecycle hook.
     */
    public created() {
        const result = this.eventPipeline.start(ViewModelSequence.Initialize);
        if (result.promise) {
            result.promise.catch(() => {
                console.error(result.errorDetail);
            });
        } else if (result.error) {
            console.error(result.errorDetail);
        }
    }

    /**
     * Vue lifecycle hook.
     */
    public mounted(): void {
        if (this.autofocus) {
            this.forceFocus();
        }
        // Special shortcut if in bt-form-generic.
        const parentFormGeneric: any = this.getParent('bt-form');
        if (parentFormGeneric !== null && parentFormGeneric instanceof c(BtForm)) {
            this.proxy.setFallbackForm(parentFormGeneric.vm.form);
            this.proxy.setFallbackGetControl(proxy(parentFormGeneric.vm.getControl, parentFormGeneric.vm));
        }
    }

    /**
     * Vue lifecycle hook.
     */
    public beforeUnmount(): void {
        this.vm.dispose();
        this.eventPipeline.dispose();
        for (const cb of this.unsubscribeCallbacks) {
            cb();
        }
        for (const cb of this.controlUnsubscribeCallbacks) {
            cb();
        }
        this.unsubscribeCallbacks = [];
        this.controlUnsubscribeCallbacks = [];
        this.proxy.unsetViewModel();
        (this as any).vm = undefined;
    }

    /**
     * Test if a slot is defined and not empty.
     */
    @Expose() hasSlot(name: string): boolean {
        return super.hasSlot(name);
    }

    /**
     * Alias of `this.v.control.value = [..]`.
     * Set the current view value.
     */
    public setValue(value: any): void {
        this.v.control.value = value;
    }

    /**
     * Actions to take place when the control ask for focus.
     */
    /* virtual */ public focus(): void {
        this.vm.control.onFocus();
    }

    /**
     * Actions to take place when the control ask to lose focus.
     */
    /* virtual */ public blur(): void {
        this.vm.control.onBlur();
    }

    /**
     * Setup and assign the view model instance.
     *
     * In here you should compose your view model by instantiating every brick of logic your component needs
     * depending on the configuration/props given as input.
     */
    protected abstract setupViewModel(): ViewModelType;

    /**
     * Copy applicable props into the view data.
     */
    @Watch(['tabindex', 'disabled', 'busy'], {immediate: ImmediateStrategy.BeforeMount})
    protected onControlPropsChange(): void {
        this.v.control.tabIndex = this.tabindex;
        this.v.control.disabled = this.disabled;
        this.v.control.busy = this.busy;
    }

    /**
     * Track focus changes to emit the corresponding events.
     */
    @Watch('v.control.focused', {immediate: ImmediateStrategy.BeforeMount})
    protected onFocusChanged(newValue: boolean): void {
        this.$emit(newValue ? 'focus' : 'blur');
    }

    /**
     * Track when the view value changes and emit and "change" event.
     */
    @Watch('v.control.value', {immediate: false})
    protected onValueChange(newValue: any): void {
        this.$emit('change', newValue);
    }

    /**
     * Watch the `v-model` value.
     */
    @Watch('modelValue', {immediate: ImmediateStrategy.BeforeMount})
    protected onModelValueChange(newValue: any): void {
        if (newValue !== UndefinedValue) {
            // Calling `getControl` ensures that a control is returned.
            // If no control has been assigned to the proxy, it will create one.
            // Then we call `setValue` on the control directly, not its view model,
            // because `v-model` is a model value, not a view value.
            this.proxy.getControl().setValue(newValue);
        }
    }

    /**
     * Set the `vm` and `v` attributes.
     */
    private configureViewModel(): void {
        this.vm = this.setupViewModel();

        // Assign the view data object created by the view model to the `v` variable, exposed to Vue.
        // Vue will return a proxy of this object, through which changes are tracked.
        this.v = this.vm.viewData;

        // This object is then reassigned to the view model, making its changes to `viewData` reactive.
        this.vm.setViewData(this.v);

        // Reassign the focus() and blur() so the concrete component can be called.
        this.v.control.focus = proxy(this.focus, this);
        this.v.control.blur = proxy(this.blur, this);

        this.vm.initialize();
    }

    /**
     * Assign itself to the control proxy.
     */
    private configureProxy(): void {
        this.proxy.setViewModel({
            id: ++MaxId,
            setValue: (controlValue: any): void => {
                this.vm.control.updateValueFromControl(controlValue);
            },
            unsetControl: (): void => {
                this.proxy.unsetViewModel();
            },
            focus: proxy(this.focus, this),
            blur: proxy(this.blur, this),
        });
    }

    /**
     * Wait for the control to be assigned and reset it.
     */
    private initializeProxy(): Promise<void>|void {
        let called: boolean = false;
        let promiseResolve: (() => void)|null = null;

        // Will fire immediately if the control is available, and/or each time it changes.
        this.unsubscribeCallbacks.push(this.proxy.onReady(() => {
            if (this.proxy.pristine) {
                /**
                 * Ensure the original value of the control matches what the view would have set.
                 *
                 * For example if the view model only outputs strings but the original value in the FormControl is "undefined",
                 * the line below will ensure the FormControl is updated with an empty string.
                 */
                this.proxy.setDefaultValue(this.vm.viewValueToControlValue(
                    this.vm.controlValueToViewValue(
                        isUndefined(this.originalDOMValue) || this.proxy.value ? this.proxy.value : this.originalDOMValue
                    )
                ));

                // Reset the control to set the default value as current value.
                // It also makes sense to reset the control as a whole because setting the view model is in itself a reset.
                this.proxy.reset();
            }
            this.assignControl(this.proxy);
            if (promiseResolve !== null) {
                promiseResolve();
            }
            called = true;
        }));
        // Only create a promise if necessary.
        if (!called) {
            return new Promise((resolve) => promiseResolve = resolve);
        }
    }

    private assignControl(control: FormViewControlInterface): void {
        for (const fn of this.controlUnsubscribeCallbacks) {
            fn();
        }
        this.controlUnsubscribeCallbacks = [];
        this.vm.setControl(control);

        // Special case for the focus to handle the case where there are multiple view models
        // associated with the control.
        this.controlUnsubscribeCallbacks.push(control.onStateChanged((event: StateChangedFormEvent) => {
            if (event.state === BasicState.Focused  && event.newValue) {
                // In case the focus is gained, wait for the next tick to give time to the proxy
                // to update, then override the `focused` attribute to the one of the proxy.
                // The one is the proxy will only return `true` if its view model is the one that is focused.
                this.$nextTick(() => {
                    this.vm.control.mutateInternalViewData(() => {
                        this.vm.control.viewData.focused = this.proxy.focused;
                    });
                });
            }
        }, -1));

        this.controlUnsubscribeCallbacks.push(control.onValueChanged((event: ValueChangedFormEvent) => {
            this.$emit('update:modelValue', event.newValue);
        }));

        if (this.autofocus) {
            this.forceFocus();
        }
    }

    /**
     * Try to give focus to the field aggressively by calling focus
     * multiple time in a short amount of time.
     */
    private forceFocus(): void {
        let startTime = (new Date()).getTime();
        let elapsedTime = 0;
        const tryToFocus = () => {
            if (!this.v.control.focused) {
                this.focus();
            }
            setTimeout(() => {
                elapsedTime += (new Date()).getTime() - startTime;
                if (elapsedTime < 500) {
                    tryToFocus();
                }
            }, 50);
        };
        tryToFocus();
    }
}
