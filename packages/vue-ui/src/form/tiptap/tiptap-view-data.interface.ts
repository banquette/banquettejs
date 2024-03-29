import { HeadlessTextViewDataInterface } from "@banquette/ui";
import { BaseInputViewDataInterface } from "../base-input/base-input-view-data.interface";

export interface TiptapViewDataInterface extends HeadlessTextViewDataInterface {
    /**
     * The view data object of the base input component.
     */
    base: BaseInputViewDataInterface;
}
