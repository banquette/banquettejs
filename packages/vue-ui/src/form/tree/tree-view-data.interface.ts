import { HeadlessControlViewDataInterface } from "@banquette/ui/form/headless-control-view-data.interface";
import { BaseInputViewDataInterface } from "../base-input/base-input-view-data.interface";

export interface TreeViewDataInterface extends HeadlessControlViewDataInterface {
    /**
     * The view data object of the base component.
     */
    base: BaseInputViewDataInterface;
}
