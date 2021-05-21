import { areSameObjects, isObject } from "@banquette/utils";
import { simplifyValidator } from "../utils";
import { ValidationContext } from "../validation-context";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from "../validator.interface";

/**
 * Check that the value is in a list of predefined choices.
 */
export const Choice = (choices: any[], message: string = 'The value is not part of the expected choices.', type: string = 'choice'): ValidatorInterface => {
    return simplifyValidator({
        validate: (context: ValidationContext): ValidationResult => {
            if (isObject(context.value)) {
                let i;
                for (i = 0; i < choices.length; ++i) {
                    if (isObject(choices[i]) && areSameObjects(choices[i], context.value)) {
                        break ;
                    }
                }
                if (i >= choices.length) {
                    context.result.addViolation(type, message);
                }
            } else if (choices.indexOf(context.value) < 0) {
                context.result.addViolation(type, message);
            }
            return context.result;
        }
    });
};
