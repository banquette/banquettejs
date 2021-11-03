import { UsageException } from "@banquette/exception";
import { FormControl, FormViewControlInterface, FormViewModelInterface } from "@banquette/form";
import { Component, Expose, Prop, Ref } from "@banquette/vue-typescript";

/**
 * A basic text input not using the generic view model.
 */
@Component('form-basic-text')
export default class BasicTextComponent implements FormViewModelInterface {
    // Props
    @Prop({type: Object, required: true}) public control!: FormControl;

    // Refs
    @Ref() private input!: HTMLInputElement;

    @Expose() value!: string;

    private controlBridge!: FormViewControlInterface;

    public beforeMount(): void {
        this.controlBridge = this.control.setViewModel(this);

        // Get the original value of the control, and convert it to string.
        this.value = this.control.defaultValue + '';

        // Now re-assign it to the control.
        this.control.setDefaultValue(this.value);
    }

    public updateValue(controlValue: any): void {
        this.value = controlValue;
    }

    public unsetControl(): void {
        throw new UsageException('Unable to un-assign this control.');
    }

    public onFocus(): void {
        this.controlBridge.markAsFocused();
    }

    public onBlur(): void {
        this.controlBridge.markAsBlurred();
    }

    /**
     * @inheritDoc
     */
    public focus(): void {
        this.input.focus();
    }

    /**
     * @inheritDoc
     */
    public blur(): void {
        this.input.blur();
    }

    public setValue(controlValue: any): void {
        this.value = controlValue + '';
    }
}
