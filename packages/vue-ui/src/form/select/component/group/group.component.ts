import { Choice } from "@banquette/ui/form/select/choice";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Vue } from "@banquette/vue-typescript/vue";

@Component('bt-form-select-group')
export default class GroupComponent extends Vue {
    @Prop({type: String, default: null}) public label!: string|null;
    @Expose() public visibleChoices: Choice[] = [];

    public updateChoice(choice: Choice): void {
        for (let i = 0; i < this.visibleChoices.length; ++i) {
            if (this.visibleChoices[i].identifier === choice.identifier) {
                if (choice.visible) {
                    return ;
                }
                this.visibleChoices.splice(i, 1);
                return ;
            }
        }
        if (choice.visible) {
            this.visibleChoices.push(choice);
        }
    }
}
