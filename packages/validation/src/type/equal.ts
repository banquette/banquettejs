import { areSameObjects, ensureSameType, isObject } from "@banquette/utils";
import { simplifyValidator } from "../utils";
import { ValidationContext } from "../validation-context";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from "../validator.interface";

/**
 * Check that the value is equal to a static value.
 */
export const Equal = (value: any,
                      strict: boolean = true,
                      message: string = 'The value is not what is expected.',
                      type: string = 'equal'): ValidatorInterface => {
    return simplifyValidator({
        validate: (context: ValidationContext): ValidationResult => {
            if (isObject(value)) {
                if (context.value === null || !isObject(context.value) || !areSameObjects(value, context.value)) {
                    context.result.addViolation(type, message);
                }
            } else if ((strict && value !== context.value) || (!strict && ensureSameType(context.value, value) !== value)) {
                context.result.addViolation(type, message);
            }
            return context.result;
        }
    });
};
