import { NotEmpty } from "@banquette/validation/type/not-empty";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { ValidatorComponent } from "../../validator.component";

@Component({name: 'bt-validate-not-empty', template: false})
export default class ValidateNotEmptyComponent extends ValidatorComponent {
    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        return NotEmpty(this.message, this.type);
    }
}
