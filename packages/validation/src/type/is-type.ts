import { getObjectKeys } from "@banquette/utils-object";
import { ensureNumber, isArray, isBoolean, isNumeric, isObject, isString, isSymbol, isUndefined, isValidNumber, isInteger } from "@banquette/utils-type";
import { SYNC_TAG } from "../constant";
import { createValidator } from "../create-validator";
import { assignOptionsDefaults } from "../utils";
import { ValidationContextInterface } from "../validation-context.interface";
import { ValidationResult } from "../validation-result";
import { ValidatorOptionsInterface } from "../validator-options.interface";
import { ValidatorInterface } from "../validator.interface";

export enum Type {
    String      = 1,
    Number      = 2,
    Integer     = 4,
    Numeric     = 8,
    Boolean     = 16,
    Object      = 32,
    Array       = 64,
    Symbol      = 128,
    Undefined   = 256,
    Null        = 512
}

/**
 * A validator checking the value matches a type.
 */
export function IsType(target: Type, options: ValidatorOptionsInterface|string = {}): ValidatorInterface {
    const finalOptions = assignOptionsDefaults(options, 'Invalid type of value. Expecting one of: %types%', 'is-type');
    const tests: Record<Type, [string, (value: any) => boolean]> = {
        [Type.String]: ['String', isString],
        [Type.Number]: ['Number', isValidNumber],
        [Type.Integer]: ['Number', isInteger],
        [Type.Numeric]: ['Numeric', isNumeric],
        [Type.Boolean]: ['Boolean', isBoolean],
        [Type.Object]: ['Object', isObject],
        [Type.Array]: ['Array', isArray],
        [Type.Symbol]: ['Symbol', isSymbol],
        [Type.Undefined]: ['Undefined', isUndefined],
        [Type.Null]: ['Null', (value) => value === null]
    };
    return createValidator({
        validate(context: ValidationContextInterface): ValidationResult {
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
                context.result.addViolation(finalOptions.type, finalOptions.message, {types: invalidTypes.join(',')})
            }
            return context.result;
        }
    }, [SYNC_TAG].concat(finalOptions.tags), finalOptions.groups);
}
