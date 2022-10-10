/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var inject_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/inject.decorator');
var service_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/service.decorator');
var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var eventDispatcher_service = require('@banquette/event/_cjs/dev/event-dispatcher.service');
var vueBuilder = require('@banquette/vue-typescript/_cjs/dev/vue-builder');
var constant = require('./constant.js');
var hideDialog_eventArg = require('./event/hide-dialog.event-arg.js');
var showDialog_eventArg = require('./event/show-dialog.event-arg.js');

var DialogService = /** @class */ (function () {
    function DialogService(eventDispatcher) {
        this.eventDispatcher = eventDispatcher;
    }
    /**
     * Show a dialog by id.
     */
    DialogService.prototype.show = function (id, args) {
        if (args === void 0) { args = {}; }
        this.eventDispatcher.dispatch(constant.DialogEvents.Show, new showDialog_eventArg.ShowDialogEventArg(id, args));
    };
    /**
     * Hide a dialog by id.
     */
    DialogService.prototype.hide = function (id) {
        this.eventDispatcher.dispatch(constant.DialogEvents.Hide, new hideDialog_eventArg.HideDialogEventArg(id));
    };
    /**
     * Hide all visible dialogs.
     */
    DialogService.prototype.hideAll = function () {
        this.eventDispatcher.dispatch(constant.DialogEvents.HideAll);
    };
    DialogService = _tslib.__decorate([
        service_decorator.Service(),
        _tslib.__param(0, inject_decorator.Inject(eventDispatcher_service.EventDispatcherService)),
        _tslib.__metadata("design:paramtypes", [eventDispatcher_service.EventDispatcherService])
    ], DialogService);
    return DialogService;
}());
/**
 * Register global utilities.
 */
vueBuilder.VueBuilder.RegisterGlobalProperty('btShowDialog', function (id, args) {
    if (args === void 0) { args = {}; }
    injector.Injector.Get(DialogService).show(id, args);
});
vueBuilder.VueBuilder.RegisterGlobalProperty('btHideDialog', function (id) {
    injector.Injector.Get(DialogService).hide(id);
});
vueBuilder.VueBuilder.RegisterGlobalProperty('btHideAllDialogs', function () {
    injector.Injector.Get(DialogService).hideAll();
});

exports.DialogService = DialogService;
