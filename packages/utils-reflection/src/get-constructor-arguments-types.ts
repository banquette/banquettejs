import { Constructor, isObject, isFunction, ensureArray } from "@banquette/utils-type";
import { UsageException } from "@banquette/exception";

/**
 * Get an array containing the type of each parameter of a constructor.
 */
export function getConstructorArgumentsTypes(ctor: Constructor): any[] {
    if (!isObject(Reflect) || !isFunction((Reflect as any).getMetadata)) {
        throw new UsageException(`"reflect-metadata" is required. Please ensure you have imported it at the very beginning of your scripts.`);
    }
    return ensureArray((Reflect as any).getMetadata('design:paramtypes', ctor));
}
