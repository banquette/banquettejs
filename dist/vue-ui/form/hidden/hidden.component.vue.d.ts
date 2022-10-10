import { HeadlessControlViewDataInterface } from "@banquette/ui/form/headless-control-view-data.interface";
import { HeadlessControlViewModel } from "@banquette/ui/form/headless-control.view-model";
import { AbstractVueFormComponent } from "../abstract-vue-form.component";
export default class FormHiddenComponent extends AbstractVueFormComponent<HeadlessControlViewDataInterface, HeadlessControlViewModel<HeadlessControlViewDataInterface>> {
    /**
     * @inheritDoc
     */
    protected setupViewModel(): HeadlessControlViewModel<HeadlessControlViewDataInterface>;
}
