import { Equal } from "@banquette/validation/type/equal";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { ValidatorComponent } from "./validator.component";

@Component({name: 'bt-validate-equal', template: false})
export default class ValidateEqualComponent extends ValidatorComponent {
    @Prop({required: true}) public value!: any;
    @Prop({type: Boolean, default: true}) public strict!: boolean;

    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        return Equal({message: this.message, type: this.type, tags: this.tags, groups: this.groups});
    }
}
