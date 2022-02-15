import { ValueTransformerInterface } from "./value-transformer.interface";

/**
 * Default transformer doing nothing and checking equality by doing a "===" test.
 */
export const NoopTransformer: ValueTransformerInterface  = {
    /**
     * Transform a value set by the view to the format expected by the form control.
     */
    viewToControl(value: any): any {
        return value;
    },

    /**
     * Transform a value set by the form control to the format expected by the view.
     */
    controlToView(value: any): any {
        return value;
    }
}
