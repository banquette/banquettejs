import { EventPipeline } from "@banquette/event/pipeline/event-pipeline";
import { HeadlessControlViewDataInterface } from "@banquette/ui/form/headless-control-view-data.interface";
import { HeadlessControlViewModel } from "@banquette/ui/form/headless-control.view-model";
import { Vue } from "@banquette/vue-typescript/vue";
import { FormControlProxy } from "./form-control.proxy";
export declare abstract class AbstractVueFormComponent<ViewDataType extends HeadlessControlViewDataInterface = HeadlessControlViewDataInterface, ViewModelType extends HeadlessControlViewModel<ViewDataType> = HeadlessControlViewModel<ViewDataType>> extends Vue {
    private static MaxId;
    modelValue: any;
    /**
     * The original value given by the end-user through the html element.
     */
    originalDOMValue: any;
    /**
     * For external control of the `disabled` state of the control.
     */
    disabled: boolean;
    /**
     * For external control of the `busy` state of the control.
     */
    busy: boolean;
    /**
     * HTML tab index (for keyboard navigation).
     */
    tabindex: number;
    /**
     * If `true`, the control will try to gain focus when mounted.
     */
    autofocus: boolean;
    /**
     * A wrapper around the form control so we don't have to check if it is available or not.
     */
    proxy: FormControlProxy;
    /**
     * The object managed by headless view models that is exposed to the view.
     */
    v: ViewDataType;
    /**
     * The view model the view will use.
     */
    vm: ViewModelType;
    /**
     * To easily manage the asynchronous initialization steps specific to Vue.
     */
    protected eventPipeline: EventPipeline;
    private unsubscribeCallbacks;
    private controlUnsubscribeCallbacks;
    constructor();
    /**
     * Vue lifecycle hook.
     */
    beforeMount(): void;
    /**
     * Vue lifecycle hook.
     */
    mounted(): void;
    /**
     * Vue lifecycle hook.
     */
    beforeUnmount(): void;
    /**
     * Test if a slot is defined and not empty.
     */
    hasSlot(name: string): boolean;
    /**
     * Alias of `this.v.control.value = [..]`.
     * Set the current view value.
     */
    setValue(value: any): void;
    /**
     * Actions to take place when the control ask for focus.
     */
    focus(): void;
    /**
     * Actions to take place when the control ask to lose focus.
     */
    blur(): void;
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
    protected onControlPropsChange(): void;
    /**
     * Track focus changes to emit the corresponding events.
     */
    protected onFocusChanged(newValue: boolean): void;
    /**
     * Track when the view value changes and emit and "change" event.
     */
    protected onValueChange(newValue: any): void;
    /**
     * Watch the `v-model` value.
     */
    protected onModelValueChange(newValue: any): void;
    /**
     * Set the `vm` and `v` attributes.
     */
    private configureViewModel;
    /**
     * Assign itself to the control proxy.
     */
    private configureProxy;
    /**
     * Wait for the control to be assigned and reset it.
     */
    private initializeProxy;
    private assignControl;
    /**
     * Try to give focus to the field aggressively by calling focus
     * multiple time in a short amount of time.
     */
    private forceFocus;
}
