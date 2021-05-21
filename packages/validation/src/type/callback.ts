import { isPromiseLike } from "@banquette/utils";
import { simplifyValidator } from "../simplify-validator";
import { ValidationContext } from "../validation-context";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from "../validator.interface";

type ValidationCallback = ((context: ValidationContext) => Promise<any>|undefined);

/**
 * Delegate the validation to a custom callback given as parameter of the factory.
 */
export const Callback = (callback: ValidationCallback): ValidatorInterface => {
    return simplifyValidator({
        validate: (context: ValidationContext): ValidationResult => {
            try {
                const res = callback(context);
                if (isPromiseLike(res)) {
                    context.result.delayResponse(res as Promise<any>);
                }
            } catch (e) {
                context.result.fail(e);
            }
            return context.result;
        }
    });
};
