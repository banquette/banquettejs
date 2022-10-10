import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { ValidatorComponent } from "./validator.component";
export default class ValidateInvalidComponent extends ValidatorComponent {
    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface;
}
