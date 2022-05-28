import { HeadlessControlViewDataInterface } from "../headless-control-view-data.interface";

/**
 * Data exposed to the view by the headless text view model.
 */
export interface HeadlessTextViewDataInterface extends HeadlessControlViewDataInterface {
    /**
     * Input type.
     */
    type: string;

    /**
     * Current number of rows, only applicable if `type` ==== "textarea".
     */
    rows: number|null;

    /**
     * Control if the textarea can be resized or not.
     */
    resizable: boolean;
}
