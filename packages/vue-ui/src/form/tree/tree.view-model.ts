import { FormViewControlInterface } from "@banquette/form";
import { HeadlessControlViewModel } from "@banquette/ui";
import { BaseInputComposable } from "../base-input/base-input.composable";
import { TreeViewDataInterface } from "./tree-view-data.interface";

export class TreeViewModel extends HeadlessControlViewModel<TreeViewDataInterface> {
    public constructor(control: FormViewControlInterface, private base: BaseInputComposable) {
        super(control);
        this.viewData.base = base.viewData;
    }
}
