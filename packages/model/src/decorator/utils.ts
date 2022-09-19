import { Injector } from "@banquette/dependency-injection/injector";
import { UsageException } from "@banquette/exception/usage.exception";
import { getFunctionArguments } from "@banquette/utils-reflection/get-function-arguments";
import { isNonEmptyString } from "@banquette/utils-string/is-non-empty-string";
import { isFunction } from "@banquette/utils-type/is-function";
import { isNumber } from "@banquette/utils-type/is-number";
import { isType } from "@banquette/utils-type/is-type";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Constructor } from "@banquette/utils-type/types";
import { ModelTransformMetadataService } from "../model-transform-metadata.service";
import { TransformerInterface } from "../transformer/transformer.interface";

const metadata = Injector.Get(ModelTransformMetadataService);

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

export function createTransformableDecorator(type: symbol, transformer: TransformerInterface): any {
    return propertyDecorator((ctor: Constructor, propertyKey: string) => {
        metadata.register(ctor, type, propertyKey, transformer);
    }, 'You can only apply a transform decorator on properties.');
}
