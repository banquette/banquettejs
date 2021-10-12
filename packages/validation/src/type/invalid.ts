import { SYNC_TAG } from "../constant";
import { createValidator } from "../create-validator";
import { ValidationContext } from "../validation-context";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from "../validator.interface";

/**
 * A validator that always fails.
 */
export const Invalid = (message?: string, type: string = 'invalid', tags: string[] = []): ValidatorInterface => {
    return createValidator({
        validate: (context: ValidationContext): ValidationResult => {
            context.result.addViolation(type, message);
            return context.result;
        }
    }, [SYNC_TAG].concat(tags));
};
