import { FileViewModel } from "@banquette/ui/form/file/file.view-model";
import { proxy } from "@banquette/utils-misc/proxy";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { AbstractVueFormComponent } from "../abstract-vue-form.component";

@Themeable({
    vars: {
        label: {
            color: 'qlzg7wcj',
            margin: 'radwsz7u',
            fontSize: 'qxxvmuwg',
            fontWeight: 'h87ir10e'
        }
    }
})
@Component({
    name: 'bt-form-file',
    components: [],
})
export default class FileComponent extends AbstractVueFormComponent<FileViewModel> {
    /**
     * Where to show the errors tooltip relative to the input.
     */
    @Prop({type: String, default: 'bottom-start'}) public errorPlacement!: string;

    /**
     * @inheritDoc
     */
    protected setupViewModel(): FileViewModel {
        const vm = new FileViewModel(this.proxy, {
            controlToView: proxy(this.controlToView, this),
            viewToControl: proxy(this.viewToControl, this)
        });
        return vm;
    }

    private viewToControl(value: any): any {
        return null;
    }

    private controlToView(input: any): Date|null {
        return null;
    }
}
