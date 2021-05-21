import { waitForDelay } from "@banquette/utils";
import { simplifyValidator } from "../../../utils";
import { ValidationContext } from "../../../validation-context";
import { ValidationResult } from "../../../validation-result";

/**
 * Check that the value is in a list of predefined choices.
 */
export const ValidateAfterDelayTest = (delay: number = 20, failureType: string|null = null) => {
    return simplifyValidator({
        validate: (context: ValidationContext): ValidationResult => {
            context.result.delayResponse(waitForDelay(delay).then(() => {
                if (failureType !== null) {
                    context.result.addViolation(failureType);
                }
            }));
            return context.result;
        }
    });
};
