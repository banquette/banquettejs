import { FormViewControlInterface } from "@banquette/form";
import { HeadlessTextViewModel } from "@banquette/ui";
import { ensureString } from "@banquette/utils-type";
import { BaseInputComposable } from "../base-input/base-input.composable";
import { TiptapViewDataInterface } from "./tiptap-view-data.interface";

export class TiptapViewModel extends HeadlessTextViewModel<TiptapViewDataInterface> {
    public constructor(control: FormViewControlInterface, private base: BaseInputComposable) {
        super(control);
        this.viewData.base = base.viewData;
    }

    /**
     * @inheritDoc
     */
    public setViewData(viewData: TiptapViewDataInterface): void {
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
