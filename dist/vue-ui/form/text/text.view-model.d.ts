import { FormViewControlInterface } from "@banquette/form/form-view-control.interface";
import { HeadlessTextViewModel } from "@banquette/ui/form/text/headless-text-view.model";
import { BaseInputComposable } from "../base-input/base-input.composable";
import { TextViewDataInterface } from "./text-view-data.interface";
export declare class TextViewModel extends HeadlessTextViewModel<TextViewDataInterface> {
    private base;
    constructor(control: FormViewControlInterface, base: BaseInputComposable);
    /**
     * @inheritDoc
     */
    setViewData(viewData: TextViewDataInterface): void;
    /**
     * @inheritDoc
     */
    controlValueToViewValue(controlValue: any): any;
}
