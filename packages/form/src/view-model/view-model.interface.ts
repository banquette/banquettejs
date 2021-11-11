import { ValueTransformerInterface } from "./value-transformer/value-transformer.interface";

export interface ViewModelInterface {
    /**
     * Current view value.
     */
    value: any;

    /**
     * The value transformer in use.
     */
    readonly valueTransformer: ValueTransformerInterface;

    /**
     * Initialize the view model.
     */
    initialize(): void;
}
