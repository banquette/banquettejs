/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var requestProgress_event = require('./request-progress.event.js');

/**
 * Separate type of event so it's easier to distinguish on the user side.
 */
var StatusChangeEvent = /** @class */ (function (_super) {
    _tslib.__extends(StatusChangeEvent, _super);
    function StatusChangeEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StatusChangeEvent;
}(requestProgress_event.RequestProgressEvent));

exports.StatusChangeEvent = StatusChangeEvent;
