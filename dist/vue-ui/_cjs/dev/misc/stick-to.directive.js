/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var areEqual = require('@banquette/utils-misc/_cjs/dev/are-equal');
var proxy = require('@banquette/utils-misc/_cjs/dev/proxy');
var throttle = require('@banquette/utils-misc/_cjs/dev/throttle');
var cloneDeepPrimitive = require('@banquette/utils-object/_cjs/dev/clone-deep-primitive');
var trim = require('@banquette/utils-string/_cjs/dev/format/trim');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isFunction = require('@banquette/utils-type/_cjs/dev/is-function');
var isNullOrUndefined = require('@banquette/utils-type/_cjs/dev/is-null-or-undefined');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var directive_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/directive.decorator');
var core = require('@popperjs/core');
var core$1 = require('@vueuse/core');

/**
 * A directive to make an element float around another.
 */
var StickToDirective = /** @class */ (function () {
    function StickToDirective() {
        this.target = null;
        this.mutationObserverUnsubscribeFn = null;
        this.sizeObserverUnsubscribeFns = [];
        this.popper = null;
    }
    StickToDirective_1 = StickToDirective;
    /**
     * Vue lifecycle.
     */
    StickToDirective.prototype.mounted = function (el, bindings) {
        this.updated(el, bindings);
    };
    StickToDirective.prototype.forceUpdate = function () {
        if (this.popper) {
            this.popper.forceUpdate();
        }
    };
    /**
     * Vue lifecycle.
     */
    StickToDirective.prototype.updated = function (el, bindings) {
        this.el = el;
        this.bindings = bindings;
        var newOptions = this.resolveOptions(bindings);
        if (!areEqual.areEqual(this.options || {}, newOptions)) {
            this.options = newOptions;
            bindings.value.forceUpdate = proxy.proxy(this.forceUpdate, this);
            this.doUpdate();
        }
    };
    /**
     * Vue lifecycle.
     */
    StickToDirective.prototype.unmounted = function () {
        var _this = this;
        if (this.mutationObserverUnsubscribeFn !== null) {
            this.mutationObserverUnsubscribeFn();
        }
        /**
         * Ugly fix to give time to the transition to execute before destroying popper.
         * @see https://github.com/vuejs/core/issues/5685
         * @see https://github.com/vuejs/core/issues/994
         */
        setTimeout(function () {
            _this.destroyPopper();
        }, 2000);
    };
    StickToDirective.prototype.doUpdate = function () {
        var newTarget = this.resolveTarget();
        if (newTarget !== null) {
            if (this.options.enabled) {
                this.attach(this.el, newTarget);
            }
            else {
                this.destroyPopper();
            }
        }
        else {
            // If the target is not found in the DOM, destroy the existing popper if there is one and
            // observer DOM changes in the look for the target.
            if (this.target !== null) {
                this.destroyPopper();
            }
            if (this.bindings.modifiers.observe || this.bindings.modifiers.ref) {
                this.observe();
            }
        }
        this.target = newTarget;
    };
    /**
     * Here we have a reference on both the sticking element and the target,
     * so we can do the actual sticking thing.
     */
    StickToDirective.prototype.attach = function (floatingEl, targetEl) {
        var _this = this;
        var existingPosition = floatingEl.style.position;
        if (existingPosition !== 'fixed' && existingPosition !== 'absolute') {
            floatingEl.style.position = 'absolute';
            existingPosition = 'absolute';
        }
        var popperOptions = Object.assign({
            strategy: existingPosition
        }, (isObject.isObject(this.options) && isObject.isObject(this.options.popper)) ? this.options.popper : {});
        // Only create a new popper if the target has changed
        if (this.target !== targetEl || !this.popper) {
            this.destroyPopper();
            this.popper = core.createPopper(targetEl, floatingEl, popperOptions);
            // The forceUpdate() reduces glitches when the target changes very quickly
            // and the floating element transform is animated.
            this.popper.forceUpdate();
            if (targetEl instanceof HTMLElement) {
                this.observeTargetSize(targetEl);
            }
            this.observeTargetSize(floatingEl);
        }
        else {
            this.popper.setOptions(popperOptions).catch(console.error);
        }
        setTimeout(function () {
            if (_this.popper) {
                _this.popper.forceUpdate();
            }
        });
    };
    /**
     * Try to resolve the target using the current value of the binding.
     */
    StickToDirective.prototype.resolveTarget = function () {
        var target = this.options.target;
        if (target instanceof Element) {
            return target;
        }
        if (!isString.isString(target)) {
            return null;
        }
        if (!this.bindings.modifiers.ref) {
            target = trim.trim(target);
            if (target[0] === '#') {
                return window.document.documentElement.querySelector(target);
            }
            return this.el.parentElement !== null ? this.el.parentElement.querySelector(target) : null;
        }
        if (isObject.isObject(this.el.__vueParentComponent) && isObject.isObject(this.el.__vueParentComponent.ctx)) {
            var $parent = this.el.__vueParentComponent.ctx;
            do {
                var candidate = isObject.isObject($parent.$refs) ? $parent.$refs[target] : null;
                if (!isNullOrUndefined.isNullOrUndefined(candidate) && candidate.$el instanceof Element) {
                    return candidate.$el;
                }
                $parent = $parent.$parent;
            } while ($parent);
        }
        return null;
    };
    /**
     * Observe the DOM for changes and call `resolveTarget` again each time a change is detected.
     */
    StickToDirective.prototype.observe = function () {
        var _this = this;
        if (this.mutationObserverUnsubscribeFn !== null) {
            return;
        }
        this.mutationObserverUnsubscribeFn = StickToDirective_1.Observe(throttle.throttle(function () {
            var newTarget = _this.resolveTarget();
            if (newTarget !== null) {
                if (_this.mutationObserverUnsubscribeFn !== null) {
                    _this.mutationObserverUnsubscribeFn();
                    _this.mutationObserverUnsubscribeFn = null;
                }
                if (newTarget !== _this.target) {
                    _this.target = newTarget;
                    _this.attach(_this.el, _this.target);
                }
            }
        }, 50));
    };
    /**
     * Observe the target resize to force Popper to update if a change is detected.
     */
    StickToDirective.prototype.observeTargetSize = function (target) {
        var _this = this;
        this.sizeObserverUnsubscribeFns.push(core$1.useResizeObserver(target, function () {
            if (_this.popper) {
                _this.popper.forceUpdate();
            }
        }).stop);
    };
    /**
     * Create a options object for Popper from the bindings value.
     */
    StickToDirective.prototype.resolveOptions = function (bindings) {
        var _this = this;
        var options = isFunction.isFunction(bindings.value) ? bindings.value() : bindings.value;
        if (options instanceof Element || !isObject.isObject(options)) {
            return { target: options, enabled: this.options ? this.options.enabled : true };
        }
        options = cloneDeepPrimitive.cloneDeepPrimitive(options);
        options.placement = options.placement || 'bottom';
        options.popper = options.popper || {};
        options.forceUpdate = this.options ? this.options.forceUpdate : function () { return _this.forceUpdate(); };
        if (isUndefined.isUndefined(options.popper.placement)) {
            options.popper.placement = options.placement;
        }
        if (!isUndefined.isUndefined(options.offset)) {
            if (!isArray.isArray(options.popper.modifiers)) {
                options.popper.modifiers = [];
            }
            options.popper.modifiers.push({
                name: 'offset',
                options: {
                    offset: options.offset
                }
            });
        }
        if (isUndefined.isUndefined(options.enabled)) {
            options.enabled = this.options ? this.options.enabled : true;
        }
        return options;
    };
    /**
     * Destroy the Popper instance if it exists.
     */
    StickToDirective.prototype.destroyPopper = function () {
        for (var _i = 0, _a = this.sizeObserverUnsubscribeFns; _i < _a.length; _i++) {
            var fn = _a[_i];
            fn();
        }
        this.sizeObserverUnsubscribeFns = [];
        if (this.popper !== null) {
            this.popper.destroy();
            this.popper = null;
        }
    };
    /**
     * Create a MutationObserver statically so only one observer ever exist
     * for any number of uses of the directive.
     *
     * The observer is automatically destroyed when not needed anymore.
     */
    StickToDirective.Observe = function (callback) {
        if (StickToDirective_1.Observer === null) {
            StickToDirective_1.Observer = new MutationObserver(function () {
                for (var _i = 0, _a = StickToDirective_1.ObserverListeners; _i < _a.length; _i++) {
                    var listener = _a[_i];
                    listener();
                }
            });
            StickToDirective_1.Observer.observe(window.document.documentElement, {
                childList: true,
                attributes: false,
                characterData: false,
                subtree: true,
                attributeOldValue: false,
                characterDataOldValue: false
            });
        }
        StickToDirective_1.ObserverListeners.push(callback);
        return function () {
            var pos = StickToDirective_1.ObserverListeners.indexOf(callback);
            if (pos > -1) {
                StickToDirective_1.ObserverListeners.splice(pos, 1);
                if (!StickToDirective_1.ObserverListeners.length) {
                    if (StickToDirective_1.Observer !== null) {
                        StickToDirective_1.Observer.disconnect();
                    }
                    StickToDirective_1.Observer = null;
                }
            }
        };
    };
    var StickToDirective_1;
    /**
     * A unique mutation observer common to all instances.
     */
    StickToDirective.Observer = null;
    StickToDirective.ObserverListeners = [];
    StickToDirective = StickToDirective_1 = _tslib.__decorate([
        directive_decorator.Directive('bt-stick-to')
    ], StickToDirective);
    return StickToDirective;
}());

exports.StickToDirective = StickToDirective;
