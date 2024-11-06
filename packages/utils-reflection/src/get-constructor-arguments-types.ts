import { AnyConstructor, ensureArray } from '@banquette/utils-type';
import 'reflect-metadata';

/**
 * Get an array containing the type of each parameter of a constructor.
 */
export function getConstructorArgumentsTypes(ctor: AnyConstructor): any[] {
    return ensureArray((Reflect as any).getMetadata('design:paramtypes', ctor));
}
