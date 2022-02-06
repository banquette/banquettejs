import { EventPipeline } from "@banquette/event/pipeline/event-pipeline";
import { AbstractFormComponent } from "@banquette/form/abstract-form-component";
import { FormViewModelInterface } from "@banquette/form/form-view-model.interface";
import { ViewModel } from "@banquette/form/view-model/view-model";
import { noop } from "@banquette/utils-misc/noop";
import { proxy } from "@banquette/utils-misc/proxy";
import { throttle } from "@banquette/utils-misc/throttle";
import { isPromiseLike } from "@banquette/utils-type/is-promise-like";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { GenericCallback } from "@banquette/utils-type/types";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Import } from "@banquette/vue-typescript/decorator/import.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";
import { Vue } from "@banquette/vue-typescript/vue";
import { ViewModelEvents, ViewModelSequence } from "./constant";
import { FormControlProxy } from "./form-control.proxy";

export abstract class AbstractVueFormComponent<ViewModelType extends ViewModel> extends Vue {
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
    @Prop({default: false}) public autofocus!: boolean;

    /**
     * A wrapper around the form control so we don't have to check if it is available or not.
     */
    @Import(FormControlProxy, false) public proxy!: FormControlProxy;

    /**
     * The view model the view will use.
     */
    @Expose() public vm!: ViewModelType;

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
        this.eventPipeline.subscribe(ViewModelEvents.Configure, proxy(this.configureViewModel, this));
        this.eventPipeline.subscribe(ViewModelEvents.Configure, proxy(this.configureProxy, this), 1);
        this.eventPipeline.subscribe(ViewModelEvents.Configure, () => this.$nextTick(noop), -Number.MAX_SAFE_INTEGER);

        // Initialize step
        this.eventPipeline.subscribe(ViewModelEvents.Initialize, proxy(this.initializeViewModel, this));
        this.eventPipeline.subscribe(ViewModelEvents.Initialize, proxy(this.initializeReactivity, this));
        this.eventPipeline.subscribe(ViewModelEvents.Initialize, proxy(this.initializeProxy, this));
    }

    /**
     * Vue lifecycle hook.
     */
    public beforeMount() {
        this.eventPipeline.start(ViewModelSequence.Initialize);
    }

    /**
     * Vue lifecycle hook.
     */
    public mounted(): void {
        if (this.autofocus) {
            this.forceFocus();
        }
        // Special shortcut if in bt-form-generic.
        const parentFormGeneric: any = this.getParent('bt-form-generic');
        if (parentFormGeneric !== null && parentFormGeneric.form instanceof AbstractFormComponent) {
            this.proxy.setFallbackForm(parentFormGeneric.form);
        }
    }

    /**
     * Vue lifecycle hook.
     */
    public beforeUnmount(): void {
        this.vm.dispose();
        for (const cb of this.unsubscribeCallbacks) {
            cb();
        }
        this.unsubscribeCallbacks = [];
        this.proxy.unsetViewModel();
        (this as any).vm = undefined;
    }

    /**
     * Mark the control as `focused`.
     */
    @Expose() onFocus(): void {
        this.vm.onFocus();
        this.$emit('focus');
    }

    /**
     * Inverse of `focus()`.
     */
    @Expose() onBlur(): void {
        this.vm.onBlur();
        this.$emit('blur');
    }

    /**
     * Test if a slot is defined and not empty.
     */
    @Expose() hasSlot(name: string): boolean {
        return super.hasSlot(name);
    }

    /**
     * Alias of `this.v.value = [..]`.
     * Set the current view value.
     */
    public setValue(value: any): void {
        this.vm.value = value;
    }

    /**
     * Actions to take place when the control ask for focus.
     */
    /* virtual */ public focus(): void {
        // Override me
    }

    /**
     * Actions to take place when the control ask to lose focus.
     */
    /* virtual */ public blur(): void {
        // Override me
    }

    /**
     * Setup and assign the view model instance.
     *
     * In here you should compose your view model by instantiating every brick of logic your component needs
     * depending on the configuration/props given as input.
     */
    protected abstract setupViewModel(): ViewModelType|Promise<ViewModelType>;

    /**
     * Force the view to update on the next loop cycle and control the call rate.
     */
    protected updateView = (() => {
        let queued = false;
        const throttledCall = throttle(() => {
            this.$forceUpdate();
        }, 50);
        return () => {
            if (!queued) {
                queued = true;
                setTimeout(() => {
                    throttledCall();
                    queued = false;
                });
            }
        };
    })();

    /**
     * Copy applicable props into the view data.
     */
    @Watch(['tabindex', 'disabled', 'busy'], {immediate: ImmediateStrategy.NextTick})
    protected onTabIndexChanged(): void {
        this.vm.tabindex = this.tabindex;
        this.vm.disabled = this.disabled;
        this.vm.busy = this.busy;
    }

    /**
     * Set the `vm` attribute.
     */
    private configureViewModel(): Promise<void>|void {
        const result = this.setupViewModel();
        if (isPromiseLike(result)) {
            const resultPromise = result as Promise<ViewModelType>;
            return new Promise((resolve, reject) => {
                resultPromise.then((vm: ViewModelType) => {
                    this.vm = vm;
                }).catch(reject);
            });
        } else {
            this.vm = result as ViewModelType;
        }
    }

    /**
     * Assign itself to the control proxy.
     */
    private configureProxy(): void {
        this.proxy.setViewModel(this.buildViewModelDecorator());
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
                this.proxy.setDefaultValue(this.vm.valueTransformer.viewToControl(
                    this.vm.valueTransformer.controlToView(
                        isUndefined(this.originalDOMValue) || this.proxy.value ? this.proxy.value : this.originalDOMValue
                    )
                ));

                // Reset the control to set the default value as current value.
                // It also makes sense to reset the control as a whole because setting the view model is in itself a reset.
                this.proxy.reset();
            }
            this.updateView();
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

    /**
     * Initialize the view model.
     */
    private initializeViewModel(): Promise<void>|void {
        return this.vm.initialize();
    }

    /**
     * Listen for untracked changes to force view updates.
     */
    private initializeReactivity(): void {
        this.unsubscribeCallbacks.push(this.vm.control.onStateChanged(() => {
            this.updateView();
        }));
        this.unsubscribeCallbacks.push(this.vm.control.onValueChanged(() => {
            this.updateView();
        }));
    }

    /**
     * Build the object that will be used by the control to interact with the view.
     */
    private buildViewModelDecorator(): FormViewModelInterface {
        return {
            id: ++AbstractVueFormComponent.MaxId,
            setValue: (controlValue: any): void => {
                this.vm.updateValueFromControl(this.vm.valueTransformer.controlToView(controlValue));
            },
            unsetControl: (): void => {
                this.proxy.unsetViewModel();
            },
            focus: proxy(this.focus, this),
            blur: proxy(this.blur, this),
        };
    }

    /**
     * Try to give focus to the field aggressively but calling focus
     * multiple time for a short amount of time.
     *
     * This is a workaround a bug where the focus is lost immediately when trying
     * the field on initialization.
     *
     * This should only be called on initialization.
     */
    private forceFocus(): void {
        let startTime = (new Date()).getTime();
        let elapsedTime = 0;
        const tryToFocus = () => {
            if (!this.vm.focused) {
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
