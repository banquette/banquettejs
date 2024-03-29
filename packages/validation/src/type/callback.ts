import { isPromiseLike } from "@banquette/utils-type";
import { createValidator } from "../create-validator";
import { ValidationContextInterface } from "../validation-context.interface";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from "../validator.interface";
import {assignOptionsDefaults} from "../utils";
import {ValidatorOptionsInterface} from "../validator-options.interface";

export type ValidationCallback = ((context: ValidationContextInterface) => Promise<void>|void);

/**
 * Delegate the validation to a custom callback given as parameter of the factory.
 */
export function Callback(callback: ValidationCallback, options: ValidatorOptionsInterface|string = {}): ValidatorInterface {
    const finalOptions = assignOptionsDefaults(options, 'Invalid value.', 'callback');
    return createValidator({
        validate: (context: ValidationContextInterface): ValidationResult => {
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
    }, ([] as string[]).concat(finalOptions.tags), finalOptions.groups);
}
