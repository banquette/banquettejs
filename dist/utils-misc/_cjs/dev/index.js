/*!
 * Banquette UtilsMisc v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var areEqual = require('./are-equal.js');
var debounce = require('./debounce.js');
var doAndRetry = require('./do-and-retry.js');
var makeReassignable = require('./make-reassignable.js');
var noop = require('./noop.js');
var not = require('./not.js');
var oncePerCycleProxy = require('./once-per-cycle-proxy.js');
var proxy = require('./proxy.js');
var recursionSafeProxy = require('./recursion-safe-proxy.js');
var recursionSafeSideEffectProxy = require('./recursion-safe-side-effect-proxy.js');
var setIntervalWithTimeout = require('./set-interval-with-timeout.js');
var throttle = require('./throttle.js');
var timeout = require('./timeout.js');
var varHolder = require('./var-holder.js');
var weakObjectMap = require('./weak-object-map.js');



exports.areEqual = areEqual.areEqual;
exports.debounce = debounce.debounce;
exports.doAndRetry = doAndRetry.doAndRetry;
exports.doAndRetryFactory = doAndRetry.doAndRetryFactory;
exports.isReassignable = makeReassignable.isReassignable;
exports.makeReassignable = makeReassignable.makeReassignable;
exports.reassign = makeReassignable.reassign;
exports.unmakeReassignable = makeReassignable.unmakeReassignable;
exports.noop = noop.noop;
exports.Not = not.Not;
exports.oncePerCycleProxy = oncePerCycleProxy.oncePerCycleProxy;
exports.proxy = proxy.proxy;
exports.recursionSafeProxy = recursionSafeProxy.recursionSafeProxy;
exports.recursionSafeSideEffectProxy = recursionSafeSideEffectProxy.recursionSafeSideEffectProxy;
exports.setIntervalWithTimeout = setIntervalWithTimeout.setIntervalWithTimeout;
exports.throttle = throttle.throttle;
exports.waitForDelay = timeout.waitForDelay;
exports.waitForNextCycle = timeout.waitForNextCycle;
exports.VarHolder = varHolder.VarHolder;
exports.WeakObjectMap = weakObjectMap.WeakObjectMap;
