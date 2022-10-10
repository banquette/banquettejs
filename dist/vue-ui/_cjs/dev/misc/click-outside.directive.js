/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var proxy = require('@banquette/utils-misc/_cjs/dev/proxy');
var isFunction = require('@banquette/utils-type/_cjs/dev/is-function');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var directive_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/directive.decorator');

/**
 * A click handler that will only trigger if an event is detected outside the host element.
 */
var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective() {
        this.enabled = true;
        this.callback = null;
        this.unbindHandler = null;
    }
    ClickOutsideDirective.prototype.beforeMount = function (el, bindings) {
        this.updated(el, bindings);
    };
    ClickOutsideDirective.prototype.updated = function (el, bindings) {
        this.el = el;
        if (isObject.isObject(bindings.value)) {
            this.enabled = !isUndefined.isUndefined(bindings.value.enabled) ? !!bindings.value.enabled : true;
            this.callback = bindings.value.callback || null;
        }
        else if (isFunction.isFunction(bindings.value)) {
            this.callback = bindings.value;
        }
        if (this.enabled) {
            this.bindHandler(this.resolveHandlerType(bindings));
        }
        else {
            this.unbind();
        }
    };
    ClickOutsideDirective.prototype.unmounted = function () {
        this.unbind();
    };
    ClickOutsideDirective.prototype.bindHandler = function (eventType) {
        this.unbind();
        var handler = proxy.proxy(this.onTrigger, this);
        window.addEventListener(eventType, handler);
        this.unbindHandler = function () { return window.removeEventListener(eventType, handler); };
    };
    ClickOutsideDirective.prototype.unbind = function () {
        if (this.unbindHandler) {
            this.unbindHandler();
            this.unbindHandler = null;
        }
    };
    ClickOutsideDirective.prototype.onTrigger = function (event) {
        var target = event.target;
        if ((!(target instanceof HTMLElement) && !(target instanceof SVGElement)) || this.isOutside(target)) {
            if (this.callback !== null) {
                this.callback();
            }
            this.el.dispatchEvent(new CustomEvent('click-outside'));
        }
    };
    ClickOutsideDirective.prototype.resolveHandlerType = function (bindings) {
        return isObject.isObject(bindings.value) && bindings.value.eventType || 'mousedown';
    };
    ClickOutsideDirective.prototype.isOutside = function (target) {
        if (this.el === target || this.el.contains(target)) {
            return false;
        }
        while (target) {
            if (target.dataset.teleportedFrom) {
                var virtualTarget = document.getElementById(target.dataset.teleportedFrom);
                return virtualTarget !== null && !this.el.contains(virtualTarget);
            }
            if (!target.parentElement) {
                break;
            }
            target = target.parentElement;
        }
        return true;
    };
    ClickOutsideDirective = _tslib.__decorate([
        directive_decorator.Directive('bt-click-outside')
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());

exports.ClickOutsideDirective = ClickOutsideDirective;
