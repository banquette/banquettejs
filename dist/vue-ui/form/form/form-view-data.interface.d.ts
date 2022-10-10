import { HttpResponse } from "@banquette/http/http-response";
import { HeadlessFormViewDataInterface } from "@banquette/ui/form/form/headless-form-view-data.interface";
export interface FormViewDataInterface<ModelType extends object = any> extends HeadlessFormViewDataInterface {
    /**
     * The model instance.
     * Can be `null` if no model is bound to the form or not yet created.
     */
    model: ModelType;
    /**
     * The raw response from the persist request.
     * Can be `null` if the form as not been persisted yet, or if there is no remote configured.
     */
    persistResponse: HttpResponse<any> | null;
}
