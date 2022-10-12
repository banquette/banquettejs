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
import { isServer } from '@banquette/utils-misc/is-server';
import { proxy } from '@banquette/utils-misc/proxy';
import { ensureBoolean } from '@banquette/utils-type/ensure-boolean';
import { isString } from '@banquette/utils-type/is-string';
import { VueBuilder } from '@banquette/vue-typescript/vue-builder';
import { createApp } from 'vue';
import './component/alerts-stack/alerts-stack.component.vue.js';
import { AlertEvents } from './constant.js';
import { ShowAlertEvent } from './event/show-alert.event.js';
import AlertsStackComponent from './component/alerts-stack/alerts-stack.component.vue_vue_type_script_lang.vue.js';

var AlertService = /** @class */ (function () {
    function AlertService(eventDispatcher) {
        this.eventDispatcher = eventDispatcher;
        this.queue = [];
    }
    AlertService.prototype.show = function (optionsOrMessage, variant, ttl) {
        this.showAlert(this.normalizeShortenedOptions(optionsOrMessage, variant, ttl));
    };
    /**
     * Hide all visible alerts that have been added through the alert service.
     */
    AlertService.prototype.hideAll = function () {
        this.eventDispatcher.dispatch(AlertEvents.HideAll);
    };
    /**
     * Show an alert.
     */
    AlertService.prototype.showAlert = function (options) {
        if (isServer()) {
            return;
        }
        this.flushQueue();
        var result = this.eventDispatcher.dispatch(AlertEvents.Show, new ShowAlertEvent(options));
        if (!result.error && result.results.indexOf(true) < 0) {
            if (!this.queue.length) {
                var wrapper = document.createElement('div');
                createApp(AlertsStackComponent).mount(wrapper);
                document.body.appendChild(wrapper);
                setTimeout(proxy(this.flushQueue, this));
            }
            this.queue.push(options);
        }
    };
    /**
     * Show alerts queued while the stack component was being created.
     */
    AlertService.prototype.flushQueue = function () {
        var items = this.queue;
        this.queue = [];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.showAlert(item);
        }
    };
    /**
     * Normalize the input from a shorthand method into a AlertOptionsInterface.
     */
    AlertService.prototype.normalizeShortenedOptions = function (optionsOrMessage, variant, ttl) {
        if (isString(optionsOrMessage)) {
            return this.normalizeShortenedOptions({
                message: optionsOrMessage,
                variant: variant || '',
                ttl: ttl || null
            });
        }
        return Object.assign({}, {
            variant: optionsOrMessage.variant,
            message: optionsOrMessage.message,
            title: optionsOrMessage.title || null,
            icon: optionsOrMessage.icon || null,
            ttl: optionsOrMessage.ttl || null,
            closable: ensureBoolean(optionsOrMessage.closable),
            stack: optionsOrMessage.stack,
            allowHtml: optionsOrMessage.allowHtml || false,
            position: optionsOrMessage.position
        });
    };
    AlertService = __decorate([
        Service(),
        __param(0, Inject(EventDispatcherService)),
        __metadata("design:paramtypes", [EventDispatcherService])
    ], AlertService);
    return AlertService;
}());
VueBuilder.RegisterGlobalProperty('btShowAlert', function (optionsOrMessage, variant, ttl) {
    Injector.Get(AlertService).show(optionsOrMessage, variant, ttl);
});
VueBuilder.RegisterGlobalProperty('btHideAllAlerts', function () {
    Injector.Get(AlertService).hideAll();
});

export { AlertService };
