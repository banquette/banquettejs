import { ensureArray, Constructor } from '@banquette/utils-type';
import 'reflect-metadata';

/**
 * Get an array containing the type of each parameter of a constructor.
 */
export function getConstructorArgumentsTypes(ctor: Constructor): any[] {
    return ensureArray((Reflect as any).getMetadata('design:paramtypes', ctor));
}
