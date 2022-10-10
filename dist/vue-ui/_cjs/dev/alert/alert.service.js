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
var proxy = require('@banquette/utils-misc/_cjs/dev/proxy');
var ensureBoolean = require('@banquette/utils-type/_cjs/dev/ensure-boolean');
var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var vueBuilder = require('@banquette/vue-typescript/_cjs/dev/vue-builder');
var vue = require('vue');
require('./component/alerts-stack/alerts-stack.component.vue.js');
var constant = require('./constant.js');
var showAlert_event = require('./event/show-alert.event.js');
var alertsStack_component_vue_vue_type_script_lang = require('./component/alerts-stack/alerts-stack.component.vue_vue_type_script_lang.vue.js');

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
        this.eventDispatcher.dispatch(constant.AlertEvents.HideAll);
    };
    /**
     * Show an alert.
     */
    AlertService.prototype.showAlert = function (options) {
        this.flushQueue();
        var result = this.eventDispatcher.dispatch(constant.AlertEvents.Show, new showAlert_event.ShowAlertEvent(options));
        if (!result.error && result.results.indexOf(true) < 0) {
            if (!this.queue.length) {
                var wrapper = document.createElement('div');
                vue.createApp(alertsStack_component_vue_vue_type_script_lang).mount(wrapper);
                document.body.appendChild(wrapper);
                setTimeout(proxy.proxy(this.flushQueue, this));
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
        if (isString.isString(optionsOrMessage)) {
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
            closable: ensureBoolean.ensureBoolean(optionsOrMessage.closable),
            stack: optionsOrMessage.stack,
            allowHtml: optionsOrMessage.allowHtml || false,
            position: optionsOrMessage.position
        });
    };
    AlertService = _tslib.__decorate([
        service_decorator.Service(),
        _tslib.__param(0, inject_decorator.Inject(eventDispatcher_service.EventDispatcherService)),
        _tslib.__metadata("design:paramtypes", [eventDispatcher_service.EventDispatcherService])
    ], AlertService);
    return AlertService;
}());
vueBuilder.VueBuilder.RegisterGlobalProperty('btShowAlert', function (optionsOrMessage, variant, ttl) {
    injector.Injector.Get(AlertService).show(optionsOrMessage, variant, ttl);
});
vueBuilder.VueBuilder.RegisterGlobalProperty('btHideAllAlerts', function () {
    injector.Injector.Get(AlertService).hideAll();
});

exports.AlertService = AlertService;
