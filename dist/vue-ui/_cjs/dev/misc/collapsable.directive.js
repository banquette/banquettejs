/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var parseCssDuration = require('@banquette/utils-dom/_cjs/dev/parse-css-duration');
var directive_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/directive.decorator');

/**
 * A directive to animate the collapsing of an element to 0 height.
 */
var CollapsableDirective = /** @class */ (function () {
    function CollapsableDirective() {
        /**
         * Holds the current state of the transition.
         */
        this.transitioning = false;
        this.timerId = null;
        this.lastKnownAttributes = {
            targetHeight: 0,
            height: '',
            position: '',
            overflow: '',
            opacity: ''
        };
        this.transitionDuration = null;
    }
    /**
     * Vue lifecycle.
     */
    CollapsableDirective.prototype.mounted = function (el, bindings) {
        this.placeholder = document.createElement(el.tagName);
        this.placeholder.style.overflow = 'hidden';
        this.placeholder.style.height = '0px';
        this.placeholder.style.opacity = '0';
        this.placeholder.style.visibility = 'hidden';
        this.updated(el, bindings);
    };
    /**
     * Vue lifecycle.
     */
    CollapsableDirective.prototype.updated = function (el, bindings) {
        var _a;
        this.el = el;
        this.bindings = bindings;
        if ((_a = this.bindings.value) === null || _a === void 0 ? void 0 : _a.opened) {
            this.open();
        }
        else {
            this.close();
        }
    };
    /**
     * Vue lifecycle.
     */
    CollapsableDirective.prototype.unmounted = function () {
        if (this.timerId) {
            window.clearTimeout(this.timerId);
            this.timerId = null;
        }
        this.placeholder.remove();
    };
    /**
     * Expand the wrapper to make the content visible.
     */
    CollapsableDirective.prototype.open = function () {
        var _this = this;
        if (this.transitioning === 'down' || (this.transitioning === false && !this.collapsed)) {
            return;
        }
        if (this.timerId !== null) {
            window.clearTimeout(this.timerId);
            this.timerId = null;
        }
        // Parse the transition durations so we can replace the one targeting the "height".
        this.transitionDuration = this.parseTransitionDuration(this.el);
        // If no transition animation is defined, just instantly show the element.
        if (!this.transitionDuration || this.transitionDuration.heightMs <= 0) {
            this.collapsed = false;
            this.transitioning = false;
            this.restoreState(this.el);
            return;
        }
        // If we are not transitioning, we can assume the element is collapsed and invisible, so we need to measure its height.
        // If we don't know its height from a previous measurement, we need to measure it too.
        var isTransitioning = this.transitioning;
        var parentPosition = '';
        // Prepare the height measurement by making the element invisible and not colliding with the rest of the DOM.
        if (!isTransitioning) {
            if (this.el.parentNode instanceof HTMLElement) {
                parentPosition = this.el.parentNode.style.position;
                this.el.parentNode.style.position = 'relative';
            }
            // Insert a placeholder to keep something in the document flow in the hope to
            // disturb as little as possible the rendering while the real element is absolute.
            this.el.parentNode.insertBefore(this.placeholder, this.el);
            // Set the element as absolute and invisible so we can let it get its normal height, that we'll measure next.
            this.el.style.position = 'absolute';
            this.el.style.opacity = '0';
            if (this.transitionDuration) {
                // Set a very low transition duration but not 0 so the browser doesn't totally remove it.
                // That is done in the hope the transition becomes available more quickly when we set back the original duration.
                this.el.style.transitionDuration = this.transitionDuration.pattern.replace('{d}', '0.001s');
            }
        }
        this.transitioning = 'down';
        if (!isTransitioning) {
            this.el.style.height = this.lastKnownAttributes.height;
            this.el.style.overflow = this.lastKnownAttributes.overflow;
        }
        // Wait a cycle so the browser has the time to compute and render the new styles.
        this.timerId = window.setTimeout(function () {
            var targetHeight = _this.lastKnownAttributes.targetHeight;
            // Now we can measure the height of the element.
            // But only do so if we are not already in a transition.
            if (!isTransitioning) {
                targetHeight = _this.measureContentHeight();
                if (_this.el.parentNode instanceof HTMLElement) {
                    _this.el.parentNode.style.position = parentPosition;
                }
                // Remove the placeholder as the element will come back into the document flow.
                _this.placeholder.remove();
                _this.el.style.height = '0px';
                _this.el.style.overflow = 'hidden';
                _this.el.style.position = _this.lastKnownAttributes.position;
                _this.el.style.opacity = _this.lastKnownAttributes.opacity;
            }
            _this.timerId = window.setTimeout(function () {
                if (_this.transitionDuration) {
                    _this.el.style.transitionDuration = _this.transitionDuration.originalValue;
                }
                // Wait a long time to ensure the CSS transition is used when we set the height.
                // Transitions can take an arbitrary amount of time to be used so the browser can
                // start multiple transitions together.
                _this.timerId = window.setTimeout(function () {
                    var _a;
                    _this.el.style.height = targetHeight + 'px';
                    // Wait for the transition to finish.
                    _this.timerId = window.setTimeout(function () {
                        _this.restoreState(_this.el);
                        _this.collapsed = false;
                        _this.timerId = null;
                        _this.transitioning = false;
                        _this.el.dispatchEvent(new CustomEvent('collapsable-change', { detail: true }));
                    }, ((_a = _this.transitionDuration) === null || _a === void 0 ? void 0 : _a.heightMs) || 0);
                }, 50);
            });
        });
    };
    /**
     * Collapse the wrapper to hide the content.
     */
    CollapsableDirective.prototype.close = function () {
        var _this = this;
        if (this.transitioning === 'up' || (this.transitioning === false && this.collapsed)) {
            return;
        }
        if (this.timerId !== null) {
            window.clearTimeout(this.timerId);
            this.timerId = null;
        }
        // Only if we are not transitioning yet, save the current state, so we can restore it later.
        if (!this.transitioning) {
            this.saveState(this.el);
            // Ensure the height is set to the current height of the element, in px.
            this.lastKnownAttributes.targetHeight = this.measureContentHeight();
            this.el.style.height = this.lastKnownAttributes.targetHeight + 'px';
        }
        // Mark that we are now transitioning down.
        this.transitioning = 'up';
        // Hide the overflow.
        this.el.style.overflow = 'hidden';
        // Wait a cycle so the browser has the time to compute and render the new styles.
        this.timerId = window.setTimeout(function () {
            var _a;
            // Put the height to 0. The CSS transition will animate it.
            _this.el.style.height = '0px';
            // Wait for the transition to finish.
            _this.timerId = window.setTimeout(function () {
                _this.collapsed = true;
                _this.timerId = null;
                _this.transitioning = false;
                _this.el.dispatchEvent(new CustomEvent('collapsable-change', { detail: false }));
            }, ((_a = _this.transitionDuration) === null || _a === void 0 ? void 0 : _a.heightMs) || 0);
        }, 50);
    };
    /**
     * Get the current height of the content in px.
     */
    CollapsableDirective.prototype.measureContentHeight = function () {
        if (this.el) {
            return this.el.getBoundingClientRect().height;
        }
        return 0;
    };
    /**
     * Parse the transition durations so we can replace the one targeting the "height".
     */
    CollapsableDirective.prototype.parseTransitionDuration = function (el) {
        var cs = getComputedStyle(el);
        var properties = cs.transitionProperty.split(',');
        var i = properties.length;
        while (--i >= 0 && properties[i] !== 'height' && properties[i] !== 'all')
            { }
        if (i < properties.length) {
            var durations = cs.transitionDuration.split(',');
            if (durations.length > i) {
                var raw = durations[i];
                durations[i] = '{d}';
                return {
                    originalValue: cs.transitionDuration,
                    heightRaw: raw,
                    heightMs: parseCssDuration.parseCssDuration(raw),
                    pattern: durations.join(',')
                };
            }
        }
        return null;
    };
    /**
     * Save the current values of the styles that we'll override.
     */
    CollapsableDirective.prototype.saveState = function (el) {
        this.lastKnownAttributes.height = el.style.height;
        this.lastKnownAttributes.overflow = el.style.overflow;
        this.lastKnownAttributes.position = el.style.position;
        this.lastKnownAttributes.opacity = el.style.opacity;
    };
    /**
     * Restore the overridden styles to their original value.
     */
    CollapsableDirective.prototype.restoreState = function (el) {
        el.style.height = this.lastKnownAttributes.height;
        el.style.overflow = this.lastKnownAttributes.overflow;
        el.style.position = this.lastKnownAttributes.position;
        el.style.opacity = this.lastKnownAttributes.opacity;
    };
    CollapsableDirective = _tslib.__decorate([
        directive_decorator.Directive('bt-collapsable')
    ], CollapsableDirective);
    return CollapsableDirective;
}());

exports.CollapsableDirective = CollapsableDirective;
