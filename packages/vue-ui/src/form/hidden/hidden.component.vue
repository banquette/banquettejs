<script lang="ts">
import { HeadlessControlViewDataInterface } from "@banquette/ui/form/headless-control-view-data.interface";
import { HeadlessControlViewModel } from "@banquette/ui/form/headless-control.view-model";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { AbstractVueFormComponent } from "../abstract-vue-form.component";

@Component({
    name: 'bt-form-hidden',
    template: false
})
export default class FormHiddenComponent extends AbstractVueFormComponent<HeadlessControlViewDataInterface, HeadlessControlViewModel<HeadlessControlViewDataInterface>> {
    /**
     * @inheritDoc
     */
    protected setupViewModel(): HeadlessControlViewModel<HeadlessControlViewDataInterface> {
        return new HeadlessControlViewModel(this.proxy);
    }
}
</script>
