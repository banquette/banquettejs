import { FormViewControlInterface } from "../form-view-control.interface";
import { ComposableViewData } from "./composable-view-data";
import { ComposableViewModelInterface } from "./composable-view-model.interface";
import { NoopTransformer } from "./value-transformer/noop-transformer.interface";
import { ValueTransformerInterface } from "./value-transformer/value-transformer.interface";

export abstract class AbstractComposableViewModel<ViewDataType extends ComposableViewData = ComposableViewData> implements ComposableViewModelInterface<ViewDataType> {
    /**
     * Public data used by the view when rendering.
     */
    public viewData: ViewDataType;

    /**
     * The value transformer in use.
     */
    public readonly valueTransformer: ValueTransformerInterface;

    public constructor(control: FormViewControlInterface, valueTransformer: ValueTransformerInterface = NoopTransformer) {
        this.valueTransformer = valueTransformer;
        this.viewData = this.buildViewData(control);
    }

    /**
     * Creat the view data object.
     */
    protected abstract buildViewData(control: FormViewControlInterface): ViewDataType;
}
