/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __decorate, __param, __metadata } from '../_virtual/_tslib.js';
import { Inject } from '@banquette/dependency-injection/decorator/inject.decorator';
import { Service } from '@banquette/dependency-injection/decorator/service.decorator';
import { Injector } from '@banquette/dependency-injection/injector';
import { EventDispatcherService } from '@banquette/event/event-dispatcher.service';
import { VueBuilder } from '@banquette/vue-typescript/vue-builder';
import { DialogEvents } from './constant.js';
import { HideDialogEventArg } from './event/hide-dialog.event-arg.js';
import { ShowDialogEventArg } from './event/show-dialog.event-arg.js';

var DialogService = /** @class */ (function () {
    function DialogService(eventDispatcher) {
        this.eventDispatcher = eventDispatcher;
    }
    /**
     * Show a dialog by id.
     */
    DialogService.prototype.show = function (id, args) {
        if (args === void 0) { args = {}; }
        this.eventDispatcher.dispatch(DialogEvents.Show, new ShowDialogEventArg(id, args));
    };
    /**
     * Hide a dialog by id.
     */
    DialogService.prototype.hide = function (id) {
        this.eventDispatcher.dispatch(DialogEvents.Hide, new HideDialogEventArg(id));
    };
    /**
     * Hide all visible dialogs.
     */
    DialogService.prototype.hideAll = function () {
        this.eventDispatcher.dispatch(DialogEvents.HideAll);
    };
    DialogService = __decorate([
        Service(),
        __param(0, Inject(EventDispatcherService)),
        __metadata("design:paramtypes", [EventDispatcherService])
    ], DialogService);
    return DialogService;
}());
/**
 * Register global utilities.
 */
VueBuilder.RegisterGlobalProperty('btShowDialog', function (id, args) {
    if (args === void 0) { args = {}; }
    Injector.Get(DialogService).show(id, args);
});
VueBuilder.RegisterGlobalProperty('btHideDialog', function (id) {
    Injector.Get(DialogService).hide(id);
});
VueBuilder.RegisterGlobalProperty('btHideAllDialogs', function () {
    Injector.Get(DialogService).hideAll();
});

export { DialogService };
