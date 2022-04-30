import { HeadlessFormFileViewDataInterface } from "@banquette/ui/form/file/headless-form-file-view-data.interface";
import { BaseInputViewDataInterface } from "../base-input/base-input-view-data.interface";

export interface FileViewDataInterface extends HeadlessFormFileViewDataInterface {
    /**
     * The view data object of the base component.
     */
    base: BaseInputViewDataInterface;
}
