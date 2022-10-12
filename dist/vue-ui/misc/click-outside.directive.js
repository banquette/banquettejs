/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __decorate } from '../_virtual/_tslib.js';
import { isServer } from '@banquette/utils-misc/is-server';
import { proxy } from '@banquette/utils-misc/proxy';
import { isFunction } from '@banquette/utils-type/is-function';
import { isObject } from '@banquette/utils-type/is-object';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { Directive } from '@banquette/vue-typescript/decorator/directive.decorator';

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
        if (isObject(bindings.value)) {
            this.enabled = !isUndefined(bindings.value.enabled) ? !!bindings.value.enabled : true;
            this.callback = bindings.value.callback || null;
        }
        else if (isFunction(bindings.value)) {
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
        var handler = proxy(this.onTrigger, this);
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
        return isObject(bindings.value) && bindings.value.eventType || 'mousedown';
    };
    ClickOutsideDirective.prototype.isOutside = function (target) {
        if (this.el === target || this.el.contains(target) || isServer()) {
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
    ClickOutsideDirective = __decorate([
        Directive('bt-click-outside')
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());

export { ClickOutsideDirective };
