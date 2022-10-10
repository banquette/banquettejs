import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { ValidatorComponent } from "./validator.component";
export default class ValidateNotEqualComponent extends ValidatorComponent {
    value: any;
    strict: boolean;
    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface;
}
