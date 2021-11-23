import { areObjectsEqual } from "@banquette/utils-object/are-objects-equal";
import { isObject } from "@banquette/utils-type/is-object";
import { SYNC_TAG } from "../constant";
import { createValidator } from "../create-validator";
import { ValidationContext } from "../validation-context";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from "../validator.interface";

/**
 * Check that the value is in a list of predefined choices.
 */
export const Choice = (choices: any[], message: string = 'The value is not part of the expected choices.', type: string = 'choice', tags: string[] = []): ValidatorInterface => {
    return createValidator({
        validate: (context: ValidationContext): ValidationResult => {
            if (isObject(context.value)) {
                let i;
                for (i = 0; i < choices.length; ++i) {
                    if (isObject(choices[i]) && areObjectsEqual(choices[i], context.value)) {
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
    }, [SYNC_TAG].concat(tags));
};
