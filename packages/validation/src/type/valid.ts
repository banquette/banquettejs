import { SYNC_TAG } from "../constant";
import { simplifyValidator } from "../simplify-validator";
import { ValidationContext } from "../validation-context";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from "../validator.interface";

/**
 * A validator doing nothing.
 * It will never create a violation.
 */
export const Valid = (tags: string[] = []): ValidatorInterface => {
    return simplifyValidator({
        validate: (context: ValidationContext): ValidationResult => context.result
    }, [SYNC_TAG].concat(tags));
};
