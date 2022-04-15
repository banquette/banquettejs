import { FormViewControlInterface } from "@banquette/form/form-view-control.interface";
import { HeadlessControlViewModel } from "@banquette/ui/form/headless-control.view-model";
import { ensureString } from "@banquette/utils-type/ensure-string";
import { BaseInputComposable } from "../base-input/base-input.composable";
import { TextViewDataInterface } from "./text-view-data.interface";

export class TextViewModel extends HeadlessControlViewModel<TextViewDataInterface> {
    public constructor(control: FormViewControlInterface, private base: BaseInputComposable) {
        super(control);
        this.viewData.base = base.viewData;
    }

    /**
     * @inheritDoc
     */
    public setViewData(viewData: TextViewDataInterface): void {
        super.setViewData(viewData);
        this.base.setViewData(viewData.base);
    }

    /**
     * @inheritDoc
     */
    public controlValueToViewValue(controlValue: any): any {
        return ensureString(controlValue);
    }
}