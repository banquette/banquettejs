import 'reflect-metadata';
import { Constructor } from "@banquette/utils-type/types";
/**
 * Get an array containing the type of each parameter of a constructor.
 */
export declare function getConstructorArgumentsTypes(ctor: Constructor): any[];
