/*!
 * Banquette UtilsReflection v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import 'reflect-metadata';
import { ensureArray } from '@banquette/utils-type/ensure-array';

/**
 * Get an array containing the type of each parameter of a constructor.
 */
function getConstructorArgumentsTypes(ctor) {
    return ensureArray(Reflect.getMetadata('design:paramtypes', ctor));
}

export { getConstructorArgumentsTypes };
