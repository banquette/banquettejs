import { And } from "@banquette/validation/type/and";
import { Valid } from "@banquette/validation/type/valid";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { ContainerValidatorComponent } from "../../container-validator.component";

@Component({name: 'bt-validate-and', template: `<slot></slot>`})
export default class ValidateAndComponent extends ContainerValidatorComponent {
    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        const children: ValidatorInterface[] = this.children;
        if (children.length > 0) {
            return And.apply(null, children);
        }
        return Valid();
    }
}
