import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { ValidatorComponent } from "./validator.component";
export default class ValidateMinComponent extends ValidatorComponent {
    count: number;
    treatAs: 'string' | 'number' | 'auto';
    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface;
}
