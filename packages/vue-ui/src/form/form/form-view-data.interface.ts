import { HeadlessFormViewDataInterface } from "@banquette/ui/form/form/headless-form-view-data.interface";
import { AnyObject } from "@banquette/utils-type/types";

export interface FormViewDataInterface extends HeadlessFormViewDataInterface {
    /**
     * The model instance.
     * Can be `null` if no model is bound to the form or not yet created.
     */
    model: AnyObject|null;
}
