import { FormViewControlInterface } from "@banquette/form/form-view-control.interface";
import { HeadlessControlViewModel } from "@banquette/ui/form/headless-control.view-model";
import { BaseInputComposable } from "../base-input/base-input.composable";
import { TreeViewDataInterface } from "./tree-view-data.interface";
export declare class TreeViewModel extends HeadlessControlViewModel<TreeViewDataInterface> {
    private base;
    constructor(control: FormViewControlInterface, base: BaseInputComposable);
}
