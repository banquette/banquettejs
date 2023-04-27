import { HeadlessCheckboxViewDataInterface } from "@banquette/ui";
import { HeadlessControlViewDataInterface } from "@banquette/ui";
import { BaseInputViewDataInterface } from "../base-input/base-input-view-data.interface";

export interface CheckboxViewDataInterface extends HeadlessCheckboxViewDataInterface, HeadlessControlViewDataInterface {
    /**
     * The view data object of the base input component.
     */
    base: BaseInputViewDataInterface;

    /**
     * The text to show next to the checkbox.
     */
    label: string|null;
}
