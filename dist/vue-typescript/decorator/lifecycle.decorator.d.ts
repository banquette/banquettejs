import { HOOKS } from "../constants";
export declare type LifecycleHook = typeof HOOKS[number];
/**
 * Mark a method as exposed to the template.
 */
export declare function Lifecycle(type: LifecycleHook | LifecycleHook[]): Function;
