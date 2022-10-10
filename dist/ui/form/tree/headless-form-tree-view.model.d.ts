import { FormViewControlInterface } from "@banquette/form/form-view-control.interface";
import { HeadlessTreeViewModel } from "../../tree/headless-tree.view-model";
import { HeadlessControlViewModel } from "../headless-control.view-model";
import { HeadlessFormTreeViewDataInterface } from "./headless-form-tree-view-data.interface";
export declare class HeadlessFormTreeViewModel<ViewDataType extends HeadlessFormTreeViewDataInterface = HeadlessFormTreeViewDataInterface> extends HeadlessControlViewModel<ViewDataType> {
    /**
     * Decorated original view model.
     */
    tree: HeadlessTreeViewModel;
    constructor(control: FormViewControlInterface);
}
