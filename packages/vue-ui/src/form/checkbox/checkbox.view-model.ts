import { FormViewControlInterface } from "@banquette/form";
import { HeadlessCheckboxViewModel } from "@banquette/ui";
import { BaseInputComposable } from "../base-input/base-input.composable";
import { CheckboxViewDataInterface } from "./checkbox-view-data.interface";

export class CheckboxViewModel extends HeadlessCheckboxViewModel<CheckboxViewDataInterface> {
    public constructor(control: FormViewControlInterface, private base: BaseInputComposable) {
        super(control);
        this.viewData.base = base.viewData;
        this.viewData.base.floatingLabel = false;
    }
}
