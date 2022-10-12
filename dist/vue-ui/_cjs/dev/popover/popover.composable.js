/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var noop = require('@banquette/utils-misc/_cjs/dev/noop');
var trim = require('@banquette/utils-string/_cjs/dev/format/trim');
var ensureArray = require('@banquette/utils-type/_cjs/dev/ensure-array');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isNumber = require('@banquette/utils-type/_cjs/dev/is-number');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var componentAware_composable = require('@banquette/vue-typescript/_cjs/dev/component-aware.composable');
var composable_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/composable.decorator');
var expose_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/expose.decorator');
var lifecycle_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/lifecycle.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var watch_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/watch.decorator');

var PopoverComposable = /** @class */ (function (_super) {
    _tslib.__extends(PopoverComposable, _super);
    function PopoverComposable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * The final configuration object, ready to use by the host component.
         */
        _this.config = {
            content: null,
            allowHtml: false,
            visible: false,
            showArrow: true,
            teleport: 'auto',
            zIndex: 'auto',
            stickToOptions: {}
        };
        _this.targets = [];
        _this.activeTarget = null;
        _this.unsubscribeFunctions = {};
        _this.scheduledVisibilityChange = null;
        _this.popoverEl = null;
        return _this;
    }
    PopoverComposable_1 = PopoverComposable;
    PopoverComposable.prototype.beforeUnmount = function () {
        this.clearEventsListeners();
        if (this.scheduledVisibilityChange !== null && this.scheduledVisibilityChange.timerId !== null) {
            clearTimeout(this.scheduledVisibilityChange.timerId);
        }
    };
    /**
     * Make the popover visible.
     */
    PopoverComposable.prototype.show = function () {
        var _this = this;
        if (this.config.visible) {
            return;
        }
        this.config.visible = true;
        if (this.interactive) {
            // Wait for the next tick so the template has time to update and the reference to be assigned.
            this.component.$nextTick(function () {
                if (_this.component.$refs.popover instanceof Element) {
                    _this.bindInteractionRetainers(_this.component.$refs.popover);
                }
            });
        }
    };
    /**
     * Hide the popover.
     */
    PopoverComposable.prototype.hide = function () {
        this.config.visible = false;
        this.clearEventsListeners('retainers');
    };
    /**
     * Copy applicable props into the view data.
     */
    PopoverComposable.prototype.updateBaseConfig = function () {
        this.config.content = this.content;
        this.config.showArrow = this.showArrow;
        this.config.allowHtml = this.allowHtml;
        this.config.teleport = this.teleport;
        this.config.zIndex = this.zIndex;
        // Meaning "if the control of the visibility is direct from the outside".
        if (this.visible !== null) {
            this.config.visible = this.visible;
        }
    };
    /**
     * Create a new options object that will be given to the `bt-stick-to` directive.
     */
    PopoverComposable.prototype.updateStickToOptions = function () {
        var targetsCandidates = (isString.isString(this.target) ? this.target.split(',') : ensureArray.ensureArray(this.target)).map(function (i) { return trim.trim(i); });
        if (!targetsCandidates.length && this.component.$el && this.component.$el.parentElement instanceof Element) {
            var component = this.component.$el.parentElement;
            if (component && component.$el) {
                this.targets = [component.$el];
            }
            else {
                this.targets = [this.component.$el.parentElement];
            }
        }
        else {
            this.targets = [];
            for (var _i = 0, targetsCandidates_1 = targetsCandidates; _i < targetsCandidates_1.length; _i++) {
                var candidate = targetsCandidates_1[_i];
                var resolved = this.resolveTarget(candidate);
                if (resolved !== null) {
                    this.targets = this.targets.concat(resolved);
                }
            }
        }
        // So values not defined anymore will be dropped.
        this.config.stickToOptions = {
            forceUpdate: noop.noop,
            placement: this.placement,
            target: this.activeTarget || this.targets[0] || null,
            popper: {
                modifiers: [{
                        name: 'preventOverflow',
                        enabled: this.preventOverflow,
                        options: {
                            altAxis: true
                        }
                    }, {
                        name: 'computeStyles',
                        enabled: this.computeStyles,
                        options: {
                            adaptive: false
                        },
                    }, {
                        name: 'flip',
                        enabled: this.flip
                    }, {
                        name: "arrow",
                        enabled: this.showArrow,
                        options: {
                            padding: 10
                        }
                    }, {
                        name: 'offset',
                        enabled: this.offset !== null,
                        options: {
                            offset: this.offset
                        }
                    }]
            }
        };
        Object.assign(this.config.stickToOptions.popper, this.popperOptions || {});
    };
    /**
     * Update the events listeners that will control the popover visibility.
     */
    PopoverComposable.prototype.updateEvents = function () {
        this.clearEventsListeners();
        if (this.visible === null) {
            for (var _i = 0, _a = this.targets; _i < _a.length; _i++) {
                var target = _a[_i];
                for (var _b = 0, _c = this.showOn; _b < _c.length; _b++) {
                    var eventType = _c[_b];
                    if (!isUndefined.isUndefined(PopoverComposable_1.SHOW_EVENTS_MAP[eventType])) {
                        this.registerShowEvent(target, PopoverComposable_1.SHOW_EVENTS_MAP[eventType].show);
                        if (this.hideOn === null) {
                            this.registerHideEvent(target, PopoverComposable_1.SHOW_EVENTS_MAP[eventType].hide);
                        }
                    }
                }
                if (this.hideOn !== null) {
                    for (var _d = 0, _e = this.hideOn; _d < _e.length; _d++) {
                        var eventType = _e[_d];
                        this.registerHideEvent(target, eventType);
                    }
                }
            }
        }
    };
    /**
     * Bind events that will retain the visibility of the popover even after it has left the target element.
     * Only used if the popover is interactive.
     */
    PopoverComposable.prototype.bindInteractionRetainers = function (element) {
        var _this = this;
        this.popoverEl = element;
        this.clearEventsListeners('retainers');
        this.addEventListener(this.popoverEl, 'mousedown', noop.noop, 'retainers'); // noop because we only want the preventPropagation
        this.addEventListener(this.popoverEl, 'click', noop.noop, 'retainers'); // noop because we only want the preventPropagation
        this.addEventListener(this.popoverEl, 'mouseenter', function () {
            if (_this.scheduledVisibilityChange !== null && _this.scheduledVisibilityChange.timerId !== null) {
                clearTimeout(_this.scheduledVisibilityChange.timerId);
                _this.scheduledVisibilityChange.timerId = null;
            }
        }, 'retainers');
        this.addEventListener(this.popoverEl, 'mouseleave', function () {
            if (_this.scheduledVisibilityChange !== null) {
                _this.scheduledVisibilityChange.timerId = setTimeout(function () {
                    _this.hide();
                    _this.scheduledVisibilityChange = null;
                }, _this.scheduledVisibilityChange.delay);
            }
        }, 'retainers');
    };
    /**
     * Bind an event to an element that will show the popover when triggered.
     */
    PopoverComposable.prototype.registerShowEvent = function (target, eventType) {
        var _this = this;
        this.addEventListener(target, eventType, function () {
            // Switch the current target to the element on which the event occurred.
            if (_this.config.stickToOptions.target !== target) {
                _this.activeTarget = target;
                _this.updateStickToOptions();
            }
            _this.scheduleVisibilityChange(true, eventType);
        });
    };
    /**
     * Bind an event to an element that will hide the popover when triggered.
     */
    PopoverComposable.prototype.registerHideEvent = function (target, eventType) {
        var _this = this;
        // Special case for *-outside events.
        if (eventType.substring(eventType.length - 8) === '-outside') {
            target = document.documentElement;
            eventType = eventType.substring(0, eventType.length - 8);
        }
        this.addEventListener(target, eventType, function () {
            _this.scheduleVisibilityChange(false, eventType);
        });
    };
    /**
     * Try to resolve the HTML element on which the popover should be attached.
     */
    PopoverComposable.prototype.resolveTarget = function (target) {
        if (target instanceof Element) {
            return [target];
        }
        if (isString.isString(target) && isObject.isObject(this.component.$refs)) {
            var parent_1 = this.component.$parent;
            while (parent_1) {
                var ref = parent_1.$refs[target];
                if (ref instanceof Element) {
                    return [ref];
                }
                if (isObject.isObject(ref) && ref.$el instanceof Element) {
                    return [ref.$el];
                }
                parent_1 = parent_1.$parent;
            }
        }
        if (isString.isString(target)) {
            var results = [];
            var queryResults = document.querySelectorAll(target);
            for (var _i = 0, _a = queryResults; _i < _a.length; _i++) {
                var queryResult = _a[_i];
                if (queryResult instanceof Element) {
                    results.push(queryResult);
                }
            }
            if (results.length > 0) {
                return results;
            }
            console.warn("Failed to resolve target string \"".concat(target, "\". ") +
                "Please ensure it's a valid selector or ref name.");
            return null;
        }
        return null;
    };
    /**
     * Add an event listener to an element and handle its de-registration.
     */
    PopoverComposable.prototype.addEventListener = function (target, eventType, callback, group) {
        if (group === void 0) { group = 'default'; }
        var eventCallback = function (event) {
            event.stopPropagation();
            callback();
        };
        target.addEventListener(eventType, eventCallback);
        if (isUndefined.isUndefined(this.unsubscribeFunctions[group])) {
            this.unsubscribeFunctions[group] = [];
        }
        this.unsubscribeFunctions[group].push(function () {
            target.removeEventListener(eventType, eventCallback);
        });
    };
    /**
     * Unregister all events listeners.
     */
    PopoverComposable.prototype.clearEventsListeners = function (group) {
        if (group === void 0) { group = null; }
        for (var _i = 0, _a = Object.keys(this.unsubscribeFunctions); _i < _a.length; _i++) {
            var groupCandidate = _a[_i];
            if (group === null || groupCandidate === group) {
                for (var _b = 0, _c = this.unsubscribeFunctions[groupCandidate]; _b < _c.length; _b++) {
                    var fn = _c[_b];
                    fn();
                }
                delete this.unsubscribeFunctions[groupCandidate];
            }
        }
    };
    /**
     * Schedule a call to `show()` or `hide()` after a certain delay.
     * If `delay` is `0`, the call is made immediately and synchronously.
     */
    PopoverComposable.prototype.scheduleVisibilityChange = function (visible, originEventType) {
        var _this = this;
        if (this.scheduledVisibilityChange !== null && this.scheduledVisibilityChange.timerId !== null) {
            clearTimeout(this.scheduledVisibilityChange.timerId);
        }
        var apply = function () {
            if (visible) {
                _this.show();
            }
            else {
                _this.hide();
            }
            _this.scheduledVisibilityChange = null;
        };
        var delayHolder = visible ? this.showDelay : this.hideDelay;
        var delay = isNumber.isNumber(delayHolder) ? delayHolder : (delayHolder[originEventType] || 0);
        if (delay > 0) {
            this.scheduledVisibilityChange = {
                timerId: setTimeout(apply, delay),
                delay: delay
            };
        }
        else {
            apply();
        }
    };
    var PopoverComposable_1;
    PopoverComposable.SHOW_EVENTS_MAP = {
        'mouseenter': { show: 'mouseenter', hide: 'mouseleave' },
        'mousedown': { show: 'mousedown', hide: 'mousedown-outside' },
        'click': { show: 'click', hide: 'click-outside' },
        'focus': { show: 'focus', hide: 'blur' }
    };
    _tslib.__decorate([
        prop_decorator.Prop({ type: [String, Object], default: null }),
        _tslib.__metadata("design:type", Object)
    ], PopoverComposable.prototype, "target", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], PopoverComposable.prototype, "content", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], PopoverComposable.prototype, "allowHtml", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: 'top' }),
        _tslib.__metadata("design:type", String)
    ], PopoverComposable.prototype, "placement", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: true }),
        _tslib.__metadata("design:type", Boolean)
    ], PopoverComposable.prototype, "showArrow", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: null }),
        _tslib.__metadata("design:type", Object)
    ], PopoverComposable.prototype, "visible", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [Array, String], default: 'mouseenter', transform: function (v) {
                if (isString.isString(v)) {
                    return v.split(',').map(function (i) { return trim.trim(i); });
                }
                return ensureArray.ensureArray(v);
            } }),
        _tslib.__metadata("design:type", Array)
    ], PopoverComposable.prototype, "showOn", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [Array, String], default: null, transform: function (v) {
                if (v === null) {
                    return null;
                }
                if (isString.isString(v)) {
                    return v.split(',').map(function (i) { return trim.trim(i); });
                }
                return ensureArray.ensureArray(v);
            } }),
        _tslib.__metadata("design:type", Object)
    ], PopoverComposable.prototype, "hideOn", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ default: 0, transform: function (v) { return !isObject.isObject(v) ? parseInt(v, 10) : v; } }),
        _tslib.__metadata("design:type", Object)
    ], PopoverComposable.prototype, "showDelay", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ default: { mouseleave: 0 }, transform: function (v) { return !isObject.isObject(v) ? parseInt(v, 10) : v; } }),
        _tslib.__metadata("design:type", Object)
    ], PopoverComposable.prototype, "hideDelay", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], PopoverComposable.prototype, "interactive", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: true }),
        _tslib.__metadata("design:type", Boolean)
    ], PopoverComposable.prototype, "flip", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: true }),
        _tslib.__metadata("design:type", Boolean)
    ], PopoverComposable.prototype, "preventOverflow", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: true }),
        _tslib.__metadata("design:type", Boolean)
    ], PopoverComposable.prototype, "computeStyles", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [Object, String], default: 'auto' }),
        _tslib.__metadata("design:type", Object)
    ], PopoverComposable.prototype, "teleport", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [Number, String], default: 'auto' }),
        _tslib.__metadata("design:type", Object)
    ], PopoverComposable.prototype, "zIndex", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [Array, Number], default: [0, 10], transform: function (v) {
                if (v === null) {
                    return null;
                }
                if (!isArray.isArray(v)) {
                    return [0, parseInt(v, 10)];
                }
                return v;
            } }),
        _tslib.__metadata("design:type", Object)
    ], PopoverComposable.prototype, "offset", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Object, default: null }),
        _tslib.__metadata("design:type", Object)
    ], PopoverComposable.prototype, "popperOptions", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Object)
    ], PopoverComposable.prototype, "config", void 0);
    _tslib.__decorate([
        lifecycle_decorator.Lifecycle('beforeUnmount'),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], PopoverComposable.prototype, "beforeUnmount", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], PopoverComposable.prototype, "show", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], PopoverComposable.prototype, "hide", null);
    _tslib.__decorate([
        watch_decorator.Watch(['content', 'visible', 'allowHtml', 'showArrow', 'teleport', 'zIndex'], { immediate: watch_decorator.ImmediateStrategy.BeforeMount }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], PopoverComposable.prototype, "updateBaseConfig", null);
    _tslib.__decorate([
        watch_decorator.Watch(['target', 'placement', 'offset', 'popperOptions'], { immediate: watch_decorator.ImmediateStrategy.Mounted }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], PopoverComposable.prototype, "updateStickToOptions", null);
    _tslib.__decorate([
        watch_decorator.Watch(['target', 'visible'], { immediate: watch_decorator.ImmediateStrategy.Mounted }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], PopoverComposable.prototype, "updateEvents", null);
    PopoverComposable = PopoverComposable_1 = _tslib.__decorate([
        composable_decorator.Composable()
    ], PopoverComposable);
    return PopoverComposable;
}(componentAware_composable.ComponentAwareComposable));

exports.PopoverComposable = PopoverComposable;