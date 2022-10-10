import { Type } from "@banquette/validation/type/is-type";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { ValidatorComponent } from "./validator.component";
export default class ValidateIsTypeComponent extends ValidatorComponent {
    allowed: Type;
    /**
     * @inheritDoc
     */
    protected buildValidator(): ValidatorInterface;
}
