import { Email } from "@banquette/validation/type/email";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { ValidatorComponent } from "./validator.component";

@Component({name: 'bt-validate-email', template: false})
export default class ValidateEmailComponent extends ValidatorComponent {
    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        return Email(this.message, this.type, this.tags);
    }
}
