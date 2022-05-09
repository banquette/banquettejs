import { getObjectKeys } from "@banquette/utils-object/get-object-keys";
import { ensureNumber } from "@banquette/utils-type/ensure-number";
import { isArray } from "@banquette/utils-type/is-array";
import { isBoolean } from "@banquette/utils-type/is-boolean";
import { isNumeric } from "@banquette/utils-type/is-numeric";
import { isObject } from "@banquette/utils-type/is-object";
import { isString } from "@banquette/utils-type/is-string";
import { isSymbol } from "@banquette/utils-type/is-symbol";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { isValidNumber } from "@banquette/utils-type/is-valid-number";
import { SYNC_TAG } from "../constant";
import { createValidator } from "../create-validator";
import { ValidationContext } from "../validation-context";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from "../validator.interface";

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
export const IsType = (target: Type, message: string = 'Invalid type of value. Expecting one of: %types%', type: string = 'is-type', tags: string[] = []): ValidatorInterface => {
    const tests: Record<Type, [string, (value: any) => boolean]> = {
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
    return createValidator({
        validate(context: ValidationContext): ValidationResult {
            let testsCount = 0;
            const invalidTypes: string[] = [];
            for (let key of getObjectKeys(tests)) {
                key = ensureNumber(key) as Type;
                if ((target & key) === key) {
                    ++testsCount;
                    if (!tests[key][1](context.value)) {
                        invalidTypes.push(tests[key][0]);
                    }
                }
            }
            if (invalidTypes.length > 0 && invalidTypes.length === testsCount) {
                context.result.addViolation(type, message, {types: invalidTypes.join(',')})
            }
            return context.result;
        }
    }, [SYNC_TAG].concat(tags));
};
