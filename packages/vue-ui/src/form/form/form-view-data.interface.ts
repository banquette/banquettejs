import { HeadlessFormViewDataInterface } from "@banquette/ui/form/form/headless-form-view-data.interface";

export interface FormViewDataInterface<ModelType> extends HeadlessFormViewDataInterface {
    /**
     * The model instance.
     * Can be `null` if no model is bound to the form or not yet created.
     */
    model: ModelType|null;
}
