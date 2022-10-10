/*!
 * Banquette Event v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constant = require('./constant.js');
var dispatchResult = require('./dispatch-result.js');
var eventArg = require('./event-arg.js');
var eventDispatcher_service = require('./event-dispatcher.service.js');
var eventDispatcher = require('./event-dispatcher.js');
var eventPipeline = require('./pipeline/event-pipeline.js');
var sequenceContext = require('./pipeline/sequence-context.js');



exports.DefaultSequenceErrorBehavior = constant.DefaultSequenceErrorBehavior;
exports.DefaultSequenceName = constant.DefaultSequenceName;
Object.defineProperty(exports, 'SequenceErrorBasicBehavior', {
	enumerable: true,
	get: function () { return constant.SequenceErrorBasicBehavior; }
});
exports.DispatchResult = dispatchResult.DispatchResult;
Object.defineProperty(exports, 'DispatchResultStatus', {
	enumerable: true,
	get: function () { return dispatchResult.DispatchResultStatus; }
});
exports.EventArg = eventArg.EventArg;
exports.EventDispatcherService = eventDispatcher_service.EventDispatcherService;
exports.EventDispatcher = eventDispatcher.EventDispatcher;
exports.EventPipeline = eventPipeline.EventPipeline;
exports.SequenceContext = sequenceContext.SequenceContext;
