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
     * Shorthand to get/set the `disabled` state of the control.
     */
    disabled: boolean;

    /**
     * Shorthand to get/set the `busy` state of the control.
     */
    busy: boolean;

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
    initialize(): Promise<void>|void;

    /**
     * Cleanup before the view model is destroyed.
     */
    dispose(): void;

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
