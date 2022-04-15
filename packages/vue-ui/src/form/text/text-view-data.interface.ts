import { HeadlessControlViewDataInterface } from "@banquette/ui/form/headless-control-view-data.interface";
import { BaseInputViewDataInterface } from "../base-input/base-input-view-data.interface";

export interface TextViewDataInterface extends HeadlessControlViewDataInterface {
    /**
     * The view data object of the base input component.
     */
    base: BaseInputViewDataInterface;

    /**
     * Input type.
     * Only applicable if not multiline.
     */
    type: string;

    /**
     * If `true` the component visible must be a textarea.
     */
    multiline: boolean;

    /**
     * Number of rows of the textarea.
     */
    rows: number|null;

    /**
     * Value of the autocomplete input attribute.
     */
    autoComplete: string;
}
