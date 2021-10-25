import { ComposableViewData } from "./composable-view-data";
import { ValueTransformerInterface } from "./value-transformer/value-transformer.interface";

/**
 * Bridge between a FormControl and a view in the direction "FormControl -> View".
 */
export interface ComposableViewModelInterface {
    /**
     * Public data used by the view when rendering.
     */
    readonly viewData: ComposableViewData;

    /**
     * The value transformer in use.
     */
    readonly valueTransformer: ValueTransformerInterface;
}
