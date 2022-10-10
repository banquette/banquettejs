import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { VNodeChild } from "@vue/runtime-core";
import { ContainerValidatorComponent } from "./container-validator.component";
export default class ValidateIfComponent extends ContainerValidatorComponent {
    condition: () => boolean;
    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface;
    render(context: any): VNodeChild;
}
