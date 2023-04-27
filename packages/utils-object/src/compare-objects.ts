import { isArray, isObjectLiteral, isObject, isUndefined, } from '@banquette/utils-type';

/**
 * Compares two objects and returns the difference between them.
 *
 * @param {object}  a
 * @param {object}  b
 * @param {boolean} keepBothValues (optional, default: false) if true, for each difference the old
 *                                 value is stored as a "before" key and the new value as a "after" key.
 *                                 if false, only the new value is returned with no additional object.
 *
 * @return {object}
 */
export function compareObjects(
    a: any,
    b: any,
    keepBothValues: boolean = false
): object {
    const output: any = {};

    if (!isObject(a) || !isObject(b)) {
        return output;
    }
    for (const key in a) {
        if (a.hasOwnProperty && !a.hasOwnProperty(key)) {
            continue;
        }
        const value = a[key];
        if (!isUndefined(b[key])) {
            if (
                (isObjectLiteral(value) || isArray(value)) &&
                (isObjectLiteral(b[key]) || isArray(b[key]))
            ) {
                const subOutput: object = compareObjects(
                    value as object,
                    b[key] as object,
                    keepBothValues
                );
                if (Object.keys(subOutput).length > 0) {
                    output[key] = subOutput;
                }
            } else if (value !== b[key]) {
                if (keepBothValues) {
                    output[key] = {
                        a: value,
                        b: b[key],
                    };
                } else {
                    output[key] = b[key];
                }
            }
        } else if (isUndefined(value)) {
            // In this case both a and b are "undefined", so there is no difference after all.
            continue;
        } else if (keepBothValues) {
            output[key] = {
                a: value,
                b: undefined,
            };
        } else {
            output[key] = undefined;
        }
    }
    for (const key in b) {
        if (
            (b.hasOwnProperty && !b.hasOwnProperty(key)) ||
            !isUndefined(a[key]) ||
            isUndefined(b[key])
        ) {
            continue;
        }
        if (keepBothValues) {
            output[key] = {
                a: undefined,
                b: b[key],
            };
        } else {
            output[key] = b[key];
        }
    }
    return output;
}
