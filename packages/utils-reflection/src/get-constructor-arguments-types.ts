import { UsageException } from "@banquette/exception/usage.exception";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { isFunction } from "@banquette/utils-type/is-function";
import { isObject } from "@banquette/utils-type/is-object";
import { Constructor } from "@banquette/utils-type/types";

/**
 * Get an array containing the type of each parameter of a constructor.
 */
export function getConstructorArgumentsTypes(ctor: Constructor): any[] {
    if (!isObject(Reflect) || !isFunction((Reflect as any).getMetadata)) {
        throw new UsageException(`"reflect-metadata" is required. Please ensure you have imported it at the very beginning of your scripts.`);
    }
    return ensureArray((Reflect as any).getMetadata('design:paramtypes', ctor));
}
