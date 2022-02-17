import { Max } from "@banquette/validation/type/max";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { ValidatorComponent } from "./validator.component";

@Component({name: 'bt-validate-max', template: false})
export default class ValidateMaxComponent extends ValidatorComponent {
    @Prop({type: Number, required: true}) public count!: number;
    @Prop({type: String, default: 'auto', validate: (value) => {
        if (['string', 'number', 'auto'].indexOf(value)) {
            return 'auto';
        }
        return value;
    }}) public treatAs!: 'string'|'number'|'auto';

    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        return Max(this.count, this.treatAs, this.message, this.type, this.tags);
    }
}