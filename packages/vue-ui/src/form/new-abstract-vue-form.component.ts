import { EventPipeline } from "@banquette/event/pipeline/event-pipeline";
import { UnsubscribeFunction } from "@banquette/event/type";
import { AbstractFormComponent } from "@banquette/form/abstract-form-component";
import { BasicState } from "@banquette/form/constant";
import { StateChangedFormEvent } from "@banquette/form/event/state-changed.form-event";
import { FormViewControlInterface } from "@banquette/form/form-view-control.interface";
import { HeadlessControlViewDataInterface } from "@banquette/ui/form/headless-control-view-data.interface";
import { HeadlessControlViewModel } from "@banquette/ui/form/headless-control.view-model";
import { proxy } from "@banquette/utils-misc/proxy";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { GenericCallback } from "@banquette/utils-type/types";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Import } from "@banquette/vue-typescript/decorator/import.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";
import { Vue } from "@banquette/vue-typescript/vue";
import { ViewModelEvents, ViewModelSequence } from "./constant";
import { NewFormControlProxy } from "./new-form-control.proxy";

export abstract class NewAbstractVueFormComponent<
    ViewDataType extends HeadlessControlViewDataInterface = HeadlessControlViewDataInterface,
    ViewModelType extends HeadlessControlViewModel<ViewDataType> = HeadlessControlViewModel<ViewDataType>
> extends Vue {
    private static MaxId: number = 0;

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
     * A wrapper around the form control so we don't have to check if it is available or not.
     */
    @Import(NewFormControlProxy, false) public proxy!: NewFormControlProxy;

    /**
     * The object managed by headless view models that is exposed to the view.
     */
    @Expose() public v!: ViewDataType;

    /**
     * The view model the view will use.
     */
    protected vm!: ViewModelType;

    /**
     * To easily manage the asynchronous initialization steps specific to Vue.
     */
    protected eventPipeline = new EventPipeline();

    private unsubscribeCallbacks: GenericCallback[] = [];

    public constructor() {
        super();
        this.eventPipeline.add([
            ViewModelEvents.Configure,
            ViewModelEvents.Initialize,
            ViewModelEvents.Ready,
        ], ViewModelSequence.Initialize);

        // Configure step
        this.eventPipeline.subscribe(ViewModelEvents.Configure, proxy(this.configureProxy, this));
        this.eventPipeline.subscribe(ViewModelEvents.Configure, proxy(this.configureViewModel, this));

        // Initialize step
        this.eventPipeline.subscribe(ViewModelEvents.Initialize, proxy(this.initializeProxy, this));
    }

    /**
     * Vue lifecycle hook.
     */
    public beforeMount() {
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
        if (parentFormGeneric !== null && parentFormGeneric.form instanceof AbstractFormComponent) {
            this.proxy.setFallbackForm(parentFormGeneric.form);
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
        this.unsubscribeCallbacks = [];
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
            id: ++NewAbstractVueFormComponent.MaxId,
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

    private assignControl = (() => {
        let unsubscribe: UnsubscribeFunction|null = null;
        return (control: FormViewControlInterface): void => {
            if (unsubscribe !== null) {
                unsubscribe();
            }
            this.vm.setControl(control);

            // Special case for the focus to handle the case where there are multiple view models
            // associated with the control.
            unsubscribe = control.onStateChanged((event: StateChangedFormEvent) => {
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
            }, -1);

            if (this.autofocus) {
                this.forceFocus();
            }
        }
    })();

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
            window.setTimeout(() => {
                elapsedTime += (new Date()).getTime() - startTime;
                if (elapsedTime < 500) {
                    tryToFocus();
                }
            }, 50);
        };
        tryToFocus();
    }
}
