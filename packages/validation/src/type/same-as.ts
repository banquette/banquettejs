import { simplifyValidator } from "../simplify-validator";
import { ValidationContext } from "../validation-context";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from "../validator.interface";

/**
 * Check that the value is the same as the value of another part of the validation tree.
 */
export const SameAs = (path: string, message: string = 'The value must be the same as "%path%".', type: string = 'same-as'): ValidatorInterface => {
    return simplifyValidator({
        validate: (context: ValidationContext): ValidationResult => {
            const otherValue: any = context.getOtherValue(path);
            if (context.value !== otherValue) {
                context.result.addViolation(type, message, {path});
            }
            return context.result;
        }
    });
};
