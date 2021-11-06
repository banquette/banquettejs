import { Constructor, isUndefined, isFunction, isNumber, isType } from "@banquette/utils-type";
import { getFunctionArguments } from "@banquette/utils-reflection";
import { isNonEmptyString } from "@banquette/utils-string";
import { UsageException } from "@banquette/exception";

/**
 * Utility function that ensures the decorator has been set on a property and which
 * resolves the argument name if set on a constructor argument.
 */
export function propertyDecorator(cb: (ctor: Constructor, propertyKey: string) => any,
                                  errorMessage: string = 'This decorator can only be used on properties.'): any {
    return (prototypeOrCtor: any, propertyKey?: string, index?: number) => {
        let ctor: Constructor = prototypeOrCtor;
        if (isUndefined(propertyKey) && isNumber(index)) {
            const names = getFunctionArguments(prototypeOrCtor);
            propertyKey = names[index as number];
        } else {
            ctor = prototypeOrCtor.constructor;
        }
        if (!isType<string>(propertyKey, isNonEmptyString) || isFunction(ctor.prototype[propertyKey])) {
            throw new UsageException(errorMessage);
        }
        return cb(ctor, propertyKey);
    };
}
