/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var isType = require('@banquette/utils-type/_cjs/dev/is-type');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var vue = require('vue');
var converters = require('./utils/converters.js');
var isInstanceOf = require('./utils/is-instance-of.js');

/**
 * Base class components can inherit from the access Vue's public properties and methods.
 */
var Vue = /** @class */ (function () {
    function Vue() {
    }
    // Fake implementation of the public attributes of the vue instance.
    // The real implementation will be swapped when the component is initialized if it extends this class.
    Vue.prototype.$emit = function (eventName) {
    };
    Vue.prototype.$forceUpdate = function () { };
    Vue.prototype.$forceUpdateComputed = function () { };
    Vue.prototype.$nextTick = function (fn) { return Promise.resolve(); };
    Vue.prototype.$watch = function (source, cb, options) { return function () { }; };
    /**
     * Test if a slot is defined.
     */
    Vue.prototype.hasSlot = function (name) {
        return isObject.isObject(this.$slots) && Object.keys(this.$slots).indexOf(name) > -1;
    };
    /**
     * Test if a slot is defined and not empty.
     */
    Vue.prototype.hasNonEmptySlot = function (name) {
        if (!this.hasSlot(name)) {
            return false;
        }
        var isNonEmptyNode = function (node) {
            if (node.type === vue.Fragment) {
                if (isArray.isArray(node.children)) {
                    for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                        var child = _a[_i];
                        if (isNonEmptyNode(child)) {
                            return true;
                        }
                    }
                }
                return false;
            }
            return node.type !== vue.Comment;
        };
        return this.$slots[name]().findIndex(function (node) { return isNonEmptyNode(node); }) > -1;
    };
    /**
     * Test if a slot exists, render it if so and extract is text content.
     * Return `null` is the slot doesn't exist.
     */
    Vue.prototype.getSlotTextContent = function (name) {
        if (!this.hasSlot(name)) {
            return null;
        }
        return this.getVNodesText(this.$slots[name]());
    };
    /**
     * Try to get a reference on a specific parent component.
     */
    Vue.prototype.getParent = function (component) {
        var $parent = this.$parent;
        while ($parent !== null) {
            var resolved = converters.maybeResolveTsInst($parent);
            if (!isString.isString(component)) {
                if (isInstanceOf.isInstanceOf(resolved, component)) {
                    return $parent;
                }
            }
            else {
                var prototype = converters.anyToComponentCtor($parent);
                while (prototype) {
                    // Loop over the prototype chain to get the metadata of all parents.
                    // The component may be a parent class.
                    var metadata = converters.anyToComponentMetadata(prototype);
                    if (metadata && metadata.component.name === component) {
                        return resolved;
                    }
                    prototype = Object.getPrototypeOf(prototype);
                }
            }
            $parent = $parent.$parent;
        }
        return null;
    };
    /**
     * Get an array of all Vue Typescript parent components.
     */
    Vue.prototype.getParentsNamesStack = function () {
        var $parent = this.$parent;
        var output = [];
        while ($parent !== null) {
            var prototype = converters.anyToComponentCtor($parent);
            while (prototype) {
                var metadata = converters.anyToComponentMetadata(prototype);
                if (metadata && metadata.component.name) {
                    output.push(metadata.component.name);
                }
                prototype = Object.getPrototypeOf(prototype);
            }
            $parent = $parent.$parent;
        }
        return output;
    };
    /**
     * Test if component is found in the parent hierarchy.
     */
    Vue.prototype.hasParent = function (component) {
        return this.getParent(component) !== null;
    };
    /**
     * Get the Vue Typescript's metadata object for the component.
     */
    Vue.prototype.getMetadata = function () {
        return converters.vccOptsToMetadata(this.$.type);
    };
    /**
     * Extract all the text content from an array of vnodes.
     */
    Vue.prototype.getVNodesText = function (nodes) {
        var _this = this;
        return nodes.map(function (node) {
            if (isType.isType(node.children, isArray.isArray)) {
                return _this.getVNodesText(node.children);
            }
            return isString.isString(node.children) ? node.children : '';
        }).join('');
    };
    /**
     * Render a slot or return a default value if it does not exist.
     */
    Vue.prototype.renderSlot = function (name, defaultValue) {
        if (defaultValue === void 0) { defaultValue = ''; }
        var slot = this.$slots[name];
        if (!isUndefined.isUndefined(slot)) {
            return slot();
        }
        if (!isString.isString(defaultValue)) {
            return defaultValue;
        }
        return vue.createElementBlock('span', null, defaultValue);
    };
    return Vue;
}());

exports.Vue = Vue;
