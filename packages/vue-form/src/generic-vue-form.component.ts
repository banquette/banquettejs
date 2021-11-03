import { ComposableViewData, ComposableViewModelInterface, FormViewModelInterface } from "@banquette/form";
import { proxy } from "@banquette/utils-misc";
import { Expose, Import } from "@banquette/vue-typescript";
import { FormControlProxy } from "./form-control.proxy";

export abstract class GenericVueFormComponent {
    /**
     * A wrapper around the form control so we don't have to check if it is available or not.
     */
    @Import(FormControlProxy, false) public proxy!: FormControlProxy;

    /**
     * The data exposed by the generic view model to the template.
     * Shortest name possible to avoid polluting the view.
     */
    @Expose() v!: ComposableViewData;

    /**
     * The view model the view will use.
     */
    protected vm!: ComposableViewModelInterface;

    /**
     * @inheritDoc
     */
    public beforeMount() {
        this.proxy.setViewModel(this.buildViewModelDecorator());
        this.vm = this.setupViewModel();

        // The view model as a whole is not exposed
        // voluntarily to keep things separated.
        this.v = this.vm.viewData;

        // Will fire immediately if the control is available, and/or each time it changes.
        this.proxy.onReady(() => {
            /**
             * Ensure the original value of the control matches what the view would have set.
             *
             * For example if the view model only outputs strings but the original value in the FormControl is "undefined",
             * the line below will ensure the FormControl is updated with an empty string.
             */
            this.proxy.setDefaultValue(this.vm.valueTransformer.viewToControl(this.vm.valueTransformer.controlToView(this.proxy.defaultValue)));

            // Reset the control to set the default value as current value.
            // It also makes sense to reset the control as a whole because setting the view model is in itself a reset.
            this.proxy.reset();
        });
    }

    /**
     * Mark the control as `focused`.
     */
    @Expose() onFocus(): void {
        this.proxy.markAsFocused();
    }

    /**
     * Inverse of `focus()`.
     */
    @Expose() onBlur(): void {
        this.proxy.markAsBlurred();
    }

    /**
     * Alias of `this.v.value = [..]`.
     * Set the current view value.
     */
    public setValue(value: any): void {
        this.v.value = value;
    }

    /**
     * Setup the composable view model instance.
     *
     * In here you should compose your view model by instantiating every brick of logic your component needs
     * depending on the configuration/props given as input.
     */
    protected abstract setupViewModel(): ComposableViewModelInterface;

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
     * Build the object that will be used by the control to interact with the view.
     */
    private buildViewModelDecorator(): FormViewModelInterface {
        return {
            setValue: (controlValue: any): void => {
                this.v.value = this.vm.valueTransformer.controlToView(controlValue);
            },
            unsetControl: (): void => {
                this.proxy.unsetViewModel();
            },
            focus: proxy(this.focus, this),
            blur: proxy(this.blur, this),
        };
    }
}
