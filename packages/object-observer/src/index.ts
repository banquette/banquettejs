/**
 * This package is inspired by `gullerya/object-observer`.
 *
 * Very few code is directly reused but the main spirit of the implementation is the same.
 * Unit tests are also inspired by it.
 *
 * @see https://github.com/gullerya/object-observer
 *
 * The main difference, expect for the internal implementation, is that `gullerya/object-observer` doesn't mutate
 * the observed object, but make a clone as a literal object.
 *
 * The @banquette version DOES mutate the objects being observed so its possible to observe complex objects (like classes)
 * while preserving their logic, inheritance, etc.
 */
export { MutationType } from './constant';
export * from "./observer.factory";
export * from './event/mutation.event';
export * from './event/mutations-collection.event';
