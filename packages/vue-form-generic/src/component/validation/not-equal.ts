import { NotEqual } from "@banquette/validation/type/not-equal";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { ValidatorComponent } from "../../validator.component";

@Component({name: 'bt-validate-not-equal', template: false})
export default class ValidateNotEqualComponent extends ValidatorComponent {
    @Prop({required: true}) public value!: any;
    @Prop({type: Boolean, default: true}) public strict!: boolean;
    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        return NotEqual(this.value, this.strict, this.message, this.type);
    }
}
