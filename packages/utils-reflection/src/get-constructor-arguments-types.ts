import 'reflect-metadata';
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { Constructor } from "@banquette/utils-type/types";

/**
 * Get an array containing the type of each parameter of a constructor.
 */
export function getConstructorArgumentsTypes(ctor: Constructor): any[] {
    return ensureArray((Reflect as any).getMetadata('design:paramtypes', ctor));
}
