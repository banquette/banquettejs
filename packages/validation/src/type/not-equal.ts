import { areEqual } from "@banquette/utils-misc/are-equal";
import { ensureSameType } from "@banquette/utils-type/ensure-same-type";
import { isObject } from "@banquette/utils-type/is-object";
import { SYNC_TAG } from "../constant";
import { createValidator } from "../create-validator";
import { assignOptionsDefaults } from "../utils";
import { ValidationContextInterface } from "../validation-context.interface";
import { ValidationResult } from "../validation-result";
import { ValidatorOptionsInterface } from "../validator-options.interface";
import { ValidatorInterface } from "../validator.interface";

/**
 * Check that the value is NOT equal to a static value.
 */
export function NotEqual(value: any,
                         strict: boolean = true,
                         options: ValidatorOptionsInterface|string = {}): ValidatorInterface {
    const finalOptions = assignOptionsDefaults(options, 'The value is not what is expected.', 'not-equal')
    return createValidator({
        validate: (context: ValidationContextInterface): ValidationResult => {
            if (isObject(value)) {
                if (context.value !== null && isObject(context.value) && areEqual(value, context.value)) {
                    context.result.addViolation(finalOptions.type, finalOptions.message);
                }
            } else if ((strict && value === context.value) || (!strict && ensureSameType(context.value, value) === value)) {
                context.result.addViolation(finalOptions.type, finalOptions.message);
            }
            return context.result;
        }
    }, [SYNC_TAG].concat(finalOptions.tags), finalOptions.groups);
}
