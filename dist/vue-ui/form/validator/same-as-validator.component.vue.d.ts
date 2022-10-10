import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { ValidatorComponent } from "./validator.component";
export default class ValidateSameAsComponent extends ValidatorComponent {
    path: string;
    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface;
}
