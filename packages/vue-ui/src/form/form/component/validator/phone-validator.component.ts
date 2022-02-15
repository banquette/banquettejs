import { Phone } from "@banquette/validation/type/phone";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { ValidatorComponent } from "./validator.component";

@Component({name: 'bt-validate-phone', template: false})
export default class ValidatePhoneComponent extends ValidatorComponent {
    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        return Phone(this.message, this.type, this.tags);
    }
}
