/*!
 * Banquette Storage v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var eventArg = require('@banquette/event/_cjs/dev/event-arg');

/**
 * Event emitted when the whole storage is cleared.
 */
var StorageClearEvent = /** @class */ (function (_super) {
    _tslib.__extends(StorageClearEvent, _super);
    function StorageClearEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StorageClearEvent;
}(eventArg.EventArg));

exports.StorageClearEvent = StorageClearEvent;
