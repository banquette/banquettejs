import { FormViewControlInterface } from "@banquette/form/form-view-control.interface";
import { HeadlessTextViewModel } from "@banquette/ui/form/text/headless-text-view.model";
import { BaseInputComposable } from "../base-input/base-input.composable";
import { TiptapViewDataInterface } from "./tiptap-view-data.interface";
export declare class TiptapViewModel extends HeadlessTextViewModel<TiptapViewDataInterface> {
    private base;
    constructor(control: FormViewControlInterface, base: BaseInputComposable);
    /**
     * @inheritDoc
     */
    setViewData(viewData: TiptapViewDataInterface): void;
    /**
     * @inheritDoc
     */
    controlValueToViewValue(controlValue: any): any;
}
