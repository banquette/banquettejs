import { HeadlessControlViewDataInterface } from "../headless-control-view-data.interface";
import { FormFile } from "./form-file";

/**
 * Data exposed to the view by the headless form file view model.
 */
export interface HeadlessFormFileViewDataInterface extends HeadlessControlViewDataInterface<Array<FormFile|any>> {
    /**
     * `true` to allow the input to hold multiple files.
     */
    multiple: boolean;

    /**
     * Validation pattern to check input files with.
     */
    accept: string|null;
}
