import { isString } from "@banquette/utils-type/is-string";
import { SYNC_TAG } from "../constant";
import { createValidator } from "../create-validator";
import { assignOptionsDefaults } from "../utils";
import { ValidationContextInterface } from "../validation-context.interface";
import { ValidationResult } from "../validation-result";
import { ValidatorOptionsInterface } from "../validator-options.interface";
import { ValidatorInterface } from "../validator.interface";

/**
 * Check that the value matches a pattern.
 */
export function Pattern(pattern: RegExp, options: ValidatorOptionsInterface|string = {}): ValidatorInterface {
    const finalOptions = assignOptionsDefaults(options, 'Invalid value.', 'pattern');
    return createValidator({
        validate: (context: ValidationContextInterface): ValidationResult => {
            if (context.value && (!isString(context.value) || !pattern.test(context.value))) {
                context.result.addViolation(finalOptions.type, finalOptions.message);
            }
            /**
             * Must reset the last index in case the pattern uses the global flag.
             * @see https://stackoverflow.com/a/11477448/1110635
             * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test#using_test_on_a_regex_with_the_global_flag
             */
            pattern.lastIndex = 0;
            return context.result;
        }
    }, [SYNC_TAG].concat(finalOptions.tags), finalOptions.groups);
}
