/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __decorate } from '../_virtual/_tslib.js';
import { UsageException } from '@banquette/exception/usage.exception';
import { isNonEmptyString } from '@banquette/utils-string/is-non-empty-string';
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { isFunction } from '@banquette/utils-type/is-function';
import { isObject } from '@banquette/utils-type/is-object';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { Directive } from '@banquette/vue-typescript/decorator/directive.decorator';

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
        var components = ensureArray(options.target);
        var teleported = [];
        var _loop_1 = function (component) {
            if (!isUndefined(component)) {
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
        if (isFunction(value)) {
            value = value();
        }
        if (!this.isOptionsInterface(value)) {
            throw new UsageException('Invalid binding value for "bt-teleport".');
        }
        return value;
    };
    /**
     * Type guard for the binding value.
     */
    TeleportDirective.prototype.isOptionsInterface = function (input) {
        return isObject(input) && isNonEmptyString(input.ref);
    };
    TeleportDirective = __decorate([
        Directive('bt-teleport')
    ], TeleportDirective);
    return TeleportDirective;
}());

export { TeleportDirective };
