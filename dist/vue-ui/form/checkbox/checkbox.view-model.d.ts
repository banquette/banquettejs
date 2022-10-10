import { FormViewControlInterface } from "@banquette/form/form-view-control.interface";
import { HeadlessCheckboxViewModel } from "@banquette/ui/form/checkbox/headless-checkbox-view.model";
import { BaseInputComposable } from "../base-input/base-input.composable";
import { CheckboxViewDataInterface } from "./checkbox-view-data.interface";
export declare class CheckboxViewModel extends HeadlessCheckboxViewModel<CheckboxViewDataInterface> {
    private base;
    constructor(control: FormViewControlInterface, base: BaseInputComposable);
}
