import { SYNC_TAG } from "../constant";
import { createValidator } from "../create-validator";
import { ValidationContext } from "../validation-context";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from "../validator.interface";
import {
    isString,
    isUndefined,
    isSymbol,
    isArray,
    isObject,
    isBoolean,
    isNumeric,
    isValidNumber, ensureNumber
} from "@banquette/utils-type";
import { getObjectKeys } from "@banquette/utils-object";

export enum Type {
    String      = 1,
    Number      = 2,
    Numeric     = 4,
    Boolean     = 8,
    Object      = 16,
    Array       = 32,
    Symbol      = 64,
    Undefined   = 128,
    Null        = 256
}

/**
 * A validator checking the value matches a type.
 */
export const IsType = (type: Type, message: string = 'Invalid type of value. Expecting one of: %types%', tags: string[] = []): ValidatorInterface => {
    return createValidator({
        validate(context: ValidationContext): ValidationResult {
            let tests: Record<Type, [string, (value: any) => boolean]> = {
                [Type.String]: ['String', isString],
                [Type.Number]: ['Number', isValidNumber],
                [Type.Numeric]: ['Numeric', isNumeric],
                [Type.Boolean]: ['Boolean', isBoolean],
                [Type.Object]: ['Object', isObject],
                [Type.Array]: ['Array', isArray],
                [Type.Symbol]: ['Symbol', isSymbol],
                [Type.Undefined]: ['Undefined', isUndefined],
                [Type.Null]: ['Null', (value) => value === null]
            };
            let testsCount = 0;
            const invalidTypes: string[] = [];
            for (let key of getObjectKeys(tests)) {
                key = ensureNumber(key) as Type;
                if ((type & key) === key) {
                    ++testsCount;
                    if (!tests[key][1](context.value)) {
                        invalidTypes.push(tests[key][0]);
                    }
                }
            }
            if (invalidTypes.length > 0 && invalidTypes.length === testsCount) {
                context.result.addViolation('is-type', message, {types: invalidTypes.join(',')})
            }
            return context.result;
        }
    }, [SYNC_TAG].concat(tags));
};