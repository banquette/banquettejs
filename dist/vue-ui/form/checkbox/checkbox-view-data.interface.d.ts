import { HeadlessCheckboxViewDataInterface } from "@banquette/ui/form/checkbox/headless-checkbox-view-data.interface";
import { HeadlessControlViewDataInterface } from "@banquette/ui/form/headless-control-view-data.interface";
import { BaseInputViewDataInterface } from "../base-input/base-input-view-data.interface";
export interface CheckboxViewDataInterface extends HeadlessCheckboxViewDataInterface, HeadlessControlViewDataInterface {
    /**
     * The view data object of the base input component.
     */
    base: BaseInputViewDataInterface;
    /**
     * The text to show next to the checkbox.
     */
    label: string | null;
}
