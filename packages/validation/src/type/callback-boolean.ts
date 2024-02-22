import { isPromiseLike } from "@banquette/utils-type";
import { createValidator } from "../create-validator";
import { ValidationContextInterface } from "../validation-context.interface";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from "../validator.interface";
import {assignOptionsDefaults} from "../utils";
import {ValidatorOptionsInterface} from "../validator-options.interface";

export type ValidationCallbackBoolean = ((context: ValidationContextInterface) => Promise<boolean>|boolean);

/**
 * Delegate the validation to a custom callback given as parameter of the factory.
 */
export function CallbackBoolean(callback: ValidationCallbackBoolean, options: ValidatorOptionsInterface|string = {}): ValidatorInterface {
    const finalOptions = assignOptionsDefaults(options, 'Invalid value.', 'callback-boolean');
    return createValidator({
        validate: (context: ValidationContextInterface): ValidationResult => {
            try {
                const res = callback(context);
                if (isPromiseLike(res)) {
                    context.result.delayResponse(res as Promise<any>);
                    res.then((res) => {
                        if (!res) {
                            context.result.addViolation(finalOptions.type, finalOptions.message);
                        }
                    });
                } else if (!res) {
                    context.result.addViolation(finalOptions.type, finalOptions.message);
                }
            } catch (e) {
                context.result.fail(e);
            }
            return context.result;
        }
    }, ([] as string[]).concat(finalOptions.tags), finalOptions.groups);
}
