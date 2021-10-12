import { SYNC_TAG } from "../constant";
import { createValidator } from "../create-validator";
import { ValidationContext } from "../validation-context";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from "../validator.interface";

/**
 * A validator doing nothing.
 * It will never create a violation.
 */
export const Valid = (tags: string[] = []): ValidatorInterface => {
    return createValidator({
        validate: (context: ValidationContext): ValidationResult => context.result
    }, [SYNC_TAG].concat(tags));
};
