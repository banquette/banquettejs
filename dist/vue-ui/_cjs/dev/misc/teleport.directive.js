/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var isNonEmptyString = require('@banquette/utils-string/_cjs/dev/is-non-empty-string');
var ensureArray = require('@banquette/utils-type/_cjs/dev/ensure-array');
var isFunction = require('@banquette/utils-type/_cjs/dev/is-function');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var directive_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/directive.decorator');

/**
 * A simple directive that will teleport a ref of a component (or array of components) into the host.
 */
var TeleportDirective = /** @class */ (function () {
    function TeleportDirective() {
        this.teleported = [];
    }
    TeleportDirective.prototype.created = function (el, bindings) {
        this.doTeleport(el, bindings);
    };
    TeleportDirective.prototype.updated = function (el, bindings) {
        this.doTeleport(el, bindings);
    };
    TeleportDirective.prototype.unmounted = function () {
        for (var _i = 0, _a = this.teleported; _i < _a.length; _i++) {
            var item = _a[_i];
            item.comment.replaceWith(item.el);
        }
        this.teleported = [];
    };
    TeleportDirective.prototype.doTeleport = function (el, bindings) {
        var options = this.resolveOptions(bindings);
        var components = ensureArray.ensureArray(options.target);
        var teleported = [];
        var _loop_1 = function (component) {
            if (!isUndefined.isUndefined(component)) {
                var componentEl_1 = options.ref !== null ? component.$refs[options.ref] : null;
                if (componentEl_1 instanceof HTMLElement) {
                    var idx = this_1.teleported.findIndex(function (i) { return i.el === componentEl_1; });
                    var commentEl = void 0;
                    if (idx > -1) {
                        commentEl = this_1.teleported[idx].comment;
                    }
                    else {
                        commentEl = document.createComment('bt-teleport');
                        componentEl_1.replaceWith(commentEl);
                        el.appendChild(componentEl_1);
                    }
                    teleported.push({
                        el: componentEl_1,
                        comment: commentEl
                    });
                }
                else {
                    console.warn("Ref \"".concat(options.ref, "\" not found."));
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, components_1 = components; _i < components_1.length; _i++) {
            var component = components_1[_i];
            _loop_1(component);
        }
        var _loop_2 = function (previousTeleported) {
            if (teleported.findIndex(function (i) { return i.el === previousTeleported.el; }) < 0) {
                previousTeleported.comment.replaceWith(previousTeleported.el);
            }
        };
        for (var _a = 0, _b = this.teleported; _a < _b.length; _a++) {
            var previousTeleported = _b[_a];
            _loop_2(previousTeleported);
        }
        this.teleported = teleported;
    };
    /**
     * Try to extract the options from the binding or throw.
     */
    TeleportDirective.prototype.resolveOptions = function (bindings) {
        var value = bindings.value;
        if (isFunction.isFunction(value)) {
            value = value();
        }
        if (!this.isOptionsInterface(value)) {
            throw new usage_exception.UsageException('Invalid binding value for "bt-teleport".');
        }
        return value;
    };
    /**
     * Type guard for the binding value.
     */
    TeleportDirective.prototype.isOptionsInterface = function (input) {
        return isObject.isObject(input) && isNonEmptyString.isNonEmptyString(input.ref);
    };
    TeleportDirective = _tslib.__decorate([
        directive_decorator.Directive('bt-teleport')
    ], TeleportDirective);
    return TeleportDirective;
}());

exports.TeleportDirective = TeleportDirective;
