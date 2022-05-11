import { SYNC_TAG } from "../constant";
import { createValidator } from "../create-validator";
import { assignOptionsDefaults } from "../utils";
import { ValidationContextInterface } from "../validation-context.interface";
import { ValidationResult } from "../validation-result";
import { ValidatorOptionsInterface } from "../validator-options.interface";
import { ValidatorInterface } from "../validator.interface";

/**
 * Check that the value is the same as the value of another part of the validation tree.
 */
export function SameAs(path: string, options: ValidatorOptionsInterface|string = {}): ValidatorInterface {
    const finalOptions = assignOptionsDefaults(options, 'The value must be the same as "%path%".', 'same-as');
    return createValidator({
        validate: (context: ValidationContextInterface): ValidationResult => {
            const otherValue: any = context.getOtherValue(path);
            if (context.value !== otherValue) {
                context.result.addViolation(finalOptions.type, finalOptions.message, {path});
            }
            return context.result;
        }
    }, [SYNC_TAG].concat(finalOptions.tags), finalOptions.groups);
}
