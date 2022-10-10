import { Constructor } from "@banquette/utils-type/types";
/**
 * Try to get a property descriptor in the whole prototype chain.
 */
export declare function getPropertyDescriptor(ctor: Constructor, property: string): any;
