/*!
 * Banquette Event v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

exports.SequenceErrorBasicBehavior = void 0;
(function (SequenceErrorBasicBehavior) {
    /**
     * The default behavior.
     * An undefined behavior means the pipeline will fallback to the parent item, if no parent the default behavior is used.
     */
    SequenceErrorBasicBehavior[SequenceErrorBasicBehavior["Undefined"] = 0] = "Undefined";
    /**
     * The error is ignored, following events are executed as if nothing happened.
     */
    SequenceErrorBasicBehavior[SequenceErrorBasicBehavior["Ignore"] = 1] = "Ignore";
    /**
     * The current sequence is stopped, but parent sequences will continue as is.
     */
    SequenceErrorBasicBehavior[SequenceErrorBasicBehavior["StopSequence"] = 2] = "StopSequence";
    /**
     * Stop every the current sequence and all sequences related to it.
     */
    SequenceErrorBasicBehavior[SequenceErrorBasicBehavior["StopAll"] = 3] = "StopAll";
})(exports.SequenceErrorBasicBehavior || (exports.SequenceErrorBasicBehavior = {}));
/**
 * So the sequence name can be omitted for single sequence pipeline.
 */
var DefaultSequenceName = 'default';
/**
 * The default behavior of the pipeline when a sequence item fails to execute.
 */
var DefaultSequenceErrorBehavior = exports.SequenceErrorBasicBehavior.StopAll;

exports.DefaultSequenceErrorBehavior = DefaultSequenceErrorBehavior;
exports.DefaultSequenceName = DefaultSequenceName;
