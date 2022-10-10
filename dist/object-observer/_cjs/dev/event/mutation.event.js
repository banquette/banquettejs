/*!
 * Banquette ObjectObserver v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var eventArg = require('@banquette/event/_cjs/dev/event-arg');

var MutationEvent = /** @class */ (function (_super) {
    _tslib.__extends(MutationEvent, _super);
    function MutationEvent(mutation) {
        var _this = _super.call(this) || this;
        _this.mutation = mutation;
        return _this;
    }
    return MutationEvent;
}(eventArg.EventArg));

exports.MutationEvent = MutationEvent;
