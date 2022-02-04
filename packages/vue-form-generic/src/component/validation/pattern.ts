import { Pattern } from "@banquette/validation/type/pattern";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { ValidatorComponent } from "../../validator.component";

@Component({name: 'bt-validate-pattern', template: false})
export default class ValidatePatternComponent extends ValidatorComponent {
    @Prop({type: String, required: true}) public pattern!: string;
    @Prop({type: String, default: undefined}) public flags?: string;

    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        return Pattern(new RegExp(this.pattern, this.flags), this.message, this.type);
    }
}
