/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var eventArg = require('@banquette/event/_cjs/dev/event-arg');

var TableResponseEvent = /** @class */ (function (_super) {
    _tslib.__extends(TableResponseEvent, _super);
    function TableResponseEvent(result, state, httpEvent) {
        var _this = _super.call(this) || this;
        _this.result = result;
        _this.state = state;
        _this.httpEvent = httpEvent;
        return _this;
    }
    return TableResponseEvent;
}(eventArg.EventArg));

exports.TableResponseEvent = TableResponseEvent;
