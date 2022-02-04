import { Url } from "@banquette/validation/type/url";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { ValidatorComponent } from "../../validator.component";

@Component({name: 'bt-validate-url', template: false})
export default class ValidateUrlComponent extends ValidatorComponent {
    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        return Url(this.message, this.type, this.tags);
    }
}
