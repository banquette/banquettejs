import { FormViewControlInterface } from "@banquette/form/form-view-control.interface";
import { HeadlessSelectViewModel } from "@banquette/ui/form/select/headless-select.view-model";
import { BaseInputComposable } from "../../base-input/base-input.composable";
import { SelectViewDataInterface } from "./select-view-data.interface";
export declare class SelectViewModel extends HeadlessSelectViewModel<SelectViewDataInterface> {
    private base;
    constructor(control: FormViewControlInterface, base: BaseInputComposable);
    /**
     * @inheritDoc
     */
    setViewData(viewData: SelectViewDataInterface): void;
}
