import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { ValidatorComponent } from "./validator.component";
export default class ValidatePatternComponent extends ValidatorComponent {
    pattern: string;
    flags?: string;
    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface;
}
