import { ValueTransformerInterface } from "./value-transformer/value-transformer.interface";

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
}
