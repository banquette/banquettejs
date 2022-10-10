/*!
 * Banquette ObjectObserver v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var eventArg = require('@banquette/event/_cjs/dev/event-arg');

var MutationsCollectionEvent = /** @class */ (function (_super) {
    _tslib.__extends(MutationsCollectionEvent, _super);
    function MutationsCollectionEvent(mutations) {
        var _this = _super.call(this) || this;
        _this.mutations = mutations;
        return _this;
    }
    return MutationsCollectionEvent;
}(eventArg.EventArg));

exports.MutationsCollectionEvent = MutationsCollectionEvent;
