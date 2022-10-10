import { HeadlessControlViewDataInterface } from "../headless-control-view-data.interface";
/**
 * Data exposed to the view by the headless checkbox view model.
 */
export interface HeadlessCheckboxViewDataInterface extends HeadlessControlViewDataInterface {
    /**
     * Is the checkbox checked?
     */
    checked: boolean;
    /**
     * If `true`, the checkbox will visually appear as indeterminate, until the next status change.
     */
    indeterminate: boolean;
    /**
     * `true` if the checkbox is part of a group (meaning it behaves like a radio button).
     */
    hasGroup: boolean;
}
