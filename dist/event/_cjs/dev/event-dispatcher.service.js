/*!
 * Banquette Event v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var service_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/service.decorator');
var eventDispatcher = require('./event-dispatcher.js');

var EventDispatcherService = /** @class */ (function (_super) {
    _tslib.__extends(EventDispatcherService, _super);
    function EventDispatcherService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventDispatcherService = _tslib.__decorate([
        service_decorator.Service()
    ], EventDispatcherService);
    return EventDispatcherService;
}(eventDispatcher.EventDispatcher));

exports.EventDispatcherService = EventDispatcherService;
