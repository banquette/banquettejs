/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var noop = require('@banquette/utils-misc/_cjs/dev/noop');
var kebabCase = require('@banquette/utils-string/_cjs/dev/case/kebab-case');
var isNonEmptyString = require('@banquette/utils-string/_cjs/dev/is-non-empty-string');
var isFunction = require('@banquette/utils-type/_cjs/dev/is-function');
var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var vueBuilder = require('../vue-builder.js');

var maxId = 0;
var uidMap = {};
function getOrCreateInstance(ctor, factory, el) {
    if (isUndefined.isUndefined(ctor.__bvcDirCtorId)) {
        Object.defineProperty(ctor, '__bvcDirCtorId', {
            enumerable: false,
            writable: false,
            configurable: false,
            value: ++maxId
        });
    }
    if (isUndefined.isUndefined(el.__bvcDirInst)) {
        Object.defineProperty(el, '__bvcDirInst', {
            enumerable: false,
            writable: false,
            configurable: false,
            value: ++maxId
        });
    }
    var identifier = el.__bvcDirInst + '_' + ctor.__bvcDirCtorId;
    if (isUndefined.isUndefined(uidMap[identifier])) {
        uidMap[identifier] = factory();
    }
    return uidMap[identifier];
}
function getInstanceUid(ctor, el) {
    if (!isUndefined.isUndefined(ctor.__bvcDirCtorId) && !isUndefined.isUndefined(el.__bvcDirInst)) {
        return el.__bvcDirInst + '_' + ctor.__bvcDirCtorId;
    }
    return null;
}
function removeInstance(ctor, el) {
    var uid = getInstanceUid(ctor, el);
    if (uid && !isUndefined.isUndefined(uidMap[uid])) {
        delete uidMap[uid];
    }
}
function defineProxy(ctor, options, hook) {
    if (isUndefined.isUndefined(ctor.prototype[hook])) {
        return noop.noop;
    }
    return function () {
        var arguments$1 = arguments;

        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments$1[_i];
        }
        var inst = getOrCreateInstance(ctor, options.factory, args[0]);
        return inst[hook].apply(inst, args);
    };
}
function Directive(optionsOrName) {
    if (optionsOrName === void 0) { optionsOrName = {}; }
    return function (ctor) {
        var options = isString.isString(optionsOrName) ? { name: optionsOrName } : optionsOrName;
        if (isUndefined.isUndefined(options.name)) {
            if (!isNonEmptyString.isNonEmptyString(ctor.name)) {
                throw new usage_exception.UsageException("Unable get the directive name. Please set the \"name\" option in the \"@Directive\" decorator " +
                    "or ensure that constructors names are kept when you build your project for production.");
            }
            options.name = kebabCase.kebabCase(ctor.name);
        }
        options.group = options.group || undefined;
        options.factory = isFunction.isFunction(options.factory) ? options.factory : function () { return new ctor(); };
        vueBuilder.VueBuilder.RegisterDirective(options.name, {
            created: defineProxy(ctor, options, 'created'),
            beforeMount: defineProxy(ctor, options, 'beforeMount'),
            mounted: defineProxy(ctor, options, 'mounted'),
            beforeUpdate: defineProxy(ctor, options, 'beforeUpdate'),
            updated: defineProxy(ctor, options, 'updated'),
            beforeUnmount: defineProxy(ctor, options, 'beforeUnmount'),
            unmounted: (function () {
                var userCallback = defineProxy(ctor, options, 'unmounted');
                return function () {
                    var arguments$1 = arguments;

                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments$1[_i];
                    }
                    var inst = getOrCreateInstance(ctor, options.factory, args[0]);
                    if (inst.__watchStopHandle) {
                        inst.__watchStopHandle();
                    }
                    userCallback.apply(null, args);
                    removeInstance(ctor, args[0]);
                };
            })()
        }, options.group, ctor);
    };
}

exports.Directive = Directive;
