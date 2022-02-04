import { Invalid } from "@banquette/validation/type/invalid";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { ValidatorComponent } from "../../validator.component";

@Component({name: 'bt-validate-invalid', template: false})
export default class ValidateInvalidComponent extends ValidatorComponent {
    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        return Invalid(this.message, this.type, this.tags);
    }
}
