/*!
 * Banquette ObjectObserver v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { ArrayObserver } from './observer/array.observer.js';
import { ObjectObserver } from './observer/object.observer.js';
import { ObserverFactory } from './observer.factory.js';
export { ObserverFactory } from './observer.factory.js';
import { TypedArrayObserver } from './observer/typed-array.observer.js';
export { MutationType } from './constant.js';
export { MutationEvent } from './event/mutation.event.js';
export { MutationsCollectionEvent } from './event/mutations-collection.event.js';

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
ObserverFactory.RegisterObserver(ArrayObserver);
ObserverFactory.RegisterObserver(TypedArrayObserver);
ObserverFactory.RegisterObserver(ObjectObserver);
