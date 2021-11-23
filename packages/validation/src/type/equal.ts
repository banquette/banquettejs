import { areObjectsEqual } from "@banquette/utils-object/are-objects-equal";
import { ensureSameType } from "@banquette/utils-type/ensure-same-type";
import { isObject } from "@banquette/utils-type/is-object";
import { SYNC_TAG } from "../constant";
import { createValidator } from "../create-validator";
import { ValidationContext } from "../validation-context";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from "../validator.interface";

/**
 * Check that the value is equal to a static value.
 */
export const Equal = (value: any,
                      strict: boolean = true,
                      message: string = 'The value is not what is expected.',
                      type: string = 'equal',
                      tags: string[] = []): ValidatorInterface => {
    return createValidator({
        validate: (context: ValidationContext): ValidationResult => {
            if (isObject(value)) {
                if (context.value === null || !isObject(context.value) || !areObjectsEqual(value, context.value)) {
                    context.result.addViolation(type, message);
                }
            } else if ((strict && value !== context.value) || (!strict && ensureSameType(context.value, value) !== value)) {
                context.result.addViolation(type, message);
            }
            return context.result;
        }
    }, [SYNC_TAG].concat(tags));
};
