import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { ValidatorComponent } from "./validator.component";
export default class ValidateChoiceComponent extends ValidatorComponent {
    choices: any[];
    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface;
}
