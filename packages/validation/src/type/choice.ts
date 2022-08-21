import { areEqual } from "@banquette/utils-misc/are-equal";
import { isObject } from "@banquette/utils-type/is-object";
import { SYNC_TAG } from "../constant";
import { createValidator } from "../create-validator";
import { assignOptionsDefaults } from "../utils";
import { ValidationContextInterface } from "../validation-context.interface";
import { ValidationResult } from "../validation-result";
import { ValidatorOptionsInterface } from "../validator-options.interface";
import { ValidatorInterface } from "../validator.interface";

/**
 * Check that the value is in a list of predefined choices.
 */
export function Choice(choices: any[], options: ValidatorOptionsInterface|string = {}): ValidatorInterface {
    const finalOptions = assignOptionsDefaults(options, 'The value is not part of the expected choices.', 'choice');
    return createValidator({
        validate: (context: ValidationContextInterface): ValidationResult => {
            if (isObject(context.value)) {
                let i;
                for (i = 0; i < choices.length; ++i) {
                    if (isObject(choices[i]) && areEqual(choices[i], context.value)) {
                        break ;
                    }
                }
                if (i >= choices.length) {
                    context.result.addViolation(finalOptions.type, finalOptions.message);
                }
            } else if (choices.indexOf(context.value) < 0) {
                context.result.addViolation(finalOptions.type, finalOptions.message);
            }
            return context.result;
        }
    }, [SYNC_TAG].concat(finalOptions.tags), finalOptions.groups);
}
