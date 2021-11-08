import { waitForDelay } from "@banquette/utils-misc";
import { isObject, isType } from "@banquette/utils-type";
import {
    ASYNC_TAG,
    createValidator,
    Valid,
    ValidationContext,
    ValidationResult,
    ValidatorInterface
} from "../../../src";

/**
 * Make a normally sync validator execute after a delay, meant for testing only.
 *
 * An object can be give as duration so we can modify the duration between two validations
 * to simulate a race condition where the validator is executed multiple times but does not
 * finish in the order they have been called.
 */
export const ValidateAfterDelay = (duration: number|{duration: number} = 20, validator: ValidatorInterface = Valid()): ValidatorInterface => {
    return createValidator({
        validate: (context: ValidationContext): ValidationResult => {
            try {
                context.result.delayResponse(waitForDelay(isType<{duration: number}>(duration, isObject) ? duration.duration : duration).then(() => {
                    validator.validate(context.value, context);
                }));
            } catch (e) {
                context.result.fail(e);
            }
            return context.result;
        }
    }, [ASYNC_TAG]);
};
