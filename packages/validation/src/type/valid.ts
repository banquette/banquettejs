import { SYNC_TAG } from "../constant";
import { createValidator } from "../create-validator";
import { ValidationContextInterface } from "../validation-context.interface";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from "../validator.interface";

/**
 * A validator doing nothing.
 * It will never create a violation.
 */
export const Valid = (tags: string[] = []): ValidatorInterface => {
    return createValidator({
        validate: (context: ValidationContextInterface): ValidationResult => context.result
    }, [SYNC_TAG].concat(tags));
};
