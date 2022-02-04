import { Or } from "@banquette/validation/type/or";
import { Valid } from "@banquette/validation/type/valid";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { ContainerValidatorComponent } from "../../container-validator.component";

@Component({name: 'bt-validate-or', template: `<slot></slot>`})
export default class ValidateOrComponent extends ContainerValidatorComponent {
    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface {
        const children: ValidatorInterface[] = this.children;
        if (children.length > 0) {
            return Or.apply(null, children);
        }
        return Valid();
    }
}
