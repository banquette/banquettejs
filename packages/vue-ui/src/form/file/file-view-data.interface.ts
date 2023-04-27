import { HeadlessFormFileViewDataInterface } from "@banquette/ui";
import { BaseInputViewDataInterface } from "../base-input/base-input-view-data.interface";

export interface FileViewDataInterface extends HeadlessFormFileViewDataInterface {
    /**
     * The view data object of the base component.
     */
    base: BaseInputViewDataInterface;
}
