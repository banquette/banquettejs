import { ValueTransformerInterface } from "./value-transformer/value-transformer.interface";
import { FormViewControlInterface } from "../form-view-control.interface";

export interface ViewModelInterface {
    /**
     * Current view value.
     */
    value: any;

    /**
     * HTML tab index (for keyboard navigation).
     */
    tabindex: number;

    /**
     * A reference to the `FormControl` behind the view model.
     */
    readonly control: FormViewControlInterface;

    /**
     * The value transformer in use.
     */
    readonly valueTransformer: ValueTransformerInterface;

    /**
     * Initialize the view model.
     */
    initialize(): void;

    /**
     * Mark the control as focused.
     */
    onFocus(): void;

    /**
     * Mark the control as unfocused.
     */
    onBlur(): void;

    /**
     * Update the value without triggering a control update.
     */
    updateValueFromControl(value: any): void;
}
