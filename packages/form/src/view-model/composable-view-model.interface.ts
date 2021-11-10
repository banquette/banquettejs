import { ComposableViewData } from "./composable-view-data";
import { ValueTransformerInterface } from "./value-transformer/value-transformer.interface";

/**
 * Bridge between a FormControl and a view in the direction "FormControl -> View".
 */
export interface ComposableViewModelInterface<ViewDataType extends ComposableViewData = ComposableViewData> {
    /**
     * Public data used by the view when rendering.
     */
    readonly viewData: ViewDataType;

    /**
     * The value transformer in use.
     */
    readonly valueTransformer: ValueTransformerInterface;
}
