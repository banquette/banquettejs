/*!
 * Banquette Event v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var varHolder = require('@banquette/utils-misc/_cjs/dev/var-holder');
var eventArg = require('../event-arg.js');

var SequenceContext = /** @class */ (function (_super) {
    _tslib.__extends(SequenceContext, _super);
    function SequenceContext(sequence, result, parent) {
        if (parent === void 0) { parent = null; }
        var _this = _super.call(this) || this;
        _this.sequence = sequence;
        _this.result = result;
        _this.parent = parent;
        /**
         * A generic storage where you can store data to share between subscribers.
         */
        _this.bag = new varHolder.VarHolder();
        /**
         * Is the sequence stopped?
         *
         * This is different from `stopPropagation` which only stops the current event in the sequence.
         */
        _this.sequenceStopped = false;
        return _this;
    }
    /**
     * Stop the whole sequence, no more events will be dispatched at all for this sequence.
     *
     * If `recursive` is `true`, parent sequences will also be stopped.
     */
    SequenceContext.prototype.stopSequence = function (recursive) {
        if (recursive === void 0) { recursive = false; }
        // Stopping the sequence also means stopping the propagation of the current event.
        this.stopPropagation();
        this.sequenceStopped = true;
        if (recursive && this.parent) {
            this.parent.stopSequence(true);
        }
    };
    return SequenceContext;
}(eventArg.EventArg));

exports.SequenceContext = SequenceContext;
