import { waitForDelay } from "@banquette/utils-misc";
import { isObject, isType } from "@banquette/utils-type";
import { ASYNC_TAG, createValidator, Valid, ValidationResult, ValidatorInterface, ValidationContextInterface } from "@banquette/validation";

/**
 * Make a normally sync validator execute after a delay, meant for testing only.
 *
 * An object can be give as duration so we can modify the duration between two validations
 * to simulate a race condition where the validator is executed multiple times but does not
 * finish in the order they have been called.
 *
 * TODO: Resolve this issue :
 * The "any" types should be "ValidatorInterface" because it causes a type mismatch issue:
 * TS2345: Argument of type 'import("/var/www/vhosts/banquette/banquette-vite/packages/validation/dist/validator.interface").ValidatorInterface'
 * is not assignable to parameter of type 'import("/var/www/vhosts/banquette/banquette-vite/packages/validation/src/validator.interface").ValidatorInterface'.
 */
export const ValidateAfterDelay = (duration: number|{duration: number} = 20, validator: any = Valid()): any => {
    return createValidator({
        validate: (context: ValidationContextInterface): ValidationResult => {
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
