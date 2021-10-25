import { FormViewControlInterface } from "../../../form-view-control.interface";
import { AbstractComposableViewModel } from "../../abstract-composable-view-model";
import { ComposableViewData } from "../../composable-view-data";
import { TextViewData } from "./text.view-data";

/**
 * The view model logic behind a generic text form control.
 */
export class TextViewModel extends AbstractComposableViewModel {
    /**
     * @inheritDoc
     */
    protected buildViewData(control: FormViewControlInterface): ComposableViewData {
        const viewData = new TextViewData(control, this.valueTransformer);
        return viewData;
    }
}
