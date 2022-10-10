/*!
 * Banquette ObjectObserver v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var array_observer = require('./observer/array.observer.js');
var object_observer = require('./observer/object.observer.js');
var observer_factory = require('./observer.factory.js');
var typedArray_observer = require('./observer/typed-array.observer.js');
var constant = require('./constant.js');
var mutation_event = require('./event/mutation.event.js');
var mutationsCollection_event = require('./event/mutations-collection.event.js');

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
observer_factory.ObserverFactory.RegisterObserver(array_observer.ArrayObserver);
observer_factory.ObserverFactory.RegisterObserver(typedArray_observer.TypedArrayObserver);
observer_factory.ObserverFactory.RegisterObserver(object_observer.ObjectObserver);

exports.ObserverFactory = observer_factory.ObserverFactory;
Object.defineProperty(exports, 'MutationType', {
	enumerable: true,
	get: function () { return constant.MutationType; }
});
exports.MutationEvent = mutation_event.MutationEvent;
exports.MutationsCollectionEvent = mutationsCollection_event.MutationsCollectionEvent;
