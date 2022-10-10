/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var getObjectValue = require('@banquette/utils-object/_cjs/dev/get-object-value');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var directive_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/directive.decorator');
var vue = require('vue');
require('./popover.component.vue.js');
var popover_component_vue_vue_type_script_lang = require('./popover.component.vue_vue_type_script_lang.vue.js');

var PopoverDirective = /** @class */ (function () {
    function PopoverDirective() {
        this.instance = null;
    }
    PopoverDirective_1 = PopoverDirective;
    PopoverDirective.prototype.created = function (el, bindings) {
        this.getOrCreateInstance(el, bindings);
    };
    PopoverDirective.prototype.updated = function (el, bindings) {
        this.getOrCreateInstance(el, bindings);
    };
    PopoverDirective.prototype.unmounted = function () {
        if (this.instance !== null) {
            if (this.instance.options.group !== null) {
                this.removeFromGroup(this.instance.options.group);
            }
            else {
                this.instance.app.unmount();
            }
            this.instance = null;
        }
    };
    PopoverDirective.prototype.getOrCreateInstance = function (el, bindings) {
        var _this = this;
        var options = this.resolveOptions(el, bindings);
        if (this.instance !== null && this.instance.options.group !== null && this.instance.options.group !== options.group) {
            this.removeFromGroup(this.instance.options.group);
        }
        if (options.group !== null) {
            this.instance = this.addToGroup(el, options.group, function () { return _this.createInstance(options); });
        }
        if (this.instance === null) {
            this.instance = this.createInstance(options);
        }
        else {
            // The targets from the newly created options are not up to date.
            // The target is not under the user control, so there is no way they changed it.
            // But if multiple directives have been set with the same group, multiple targets have been added to the instance.
            // So it's necessary to copy the targets from the instance before merging the new options with the existing props.
            // Otherwise the popover will only have 1 target (the element on which the current directive is set).
            options.props.target = this.instance.options.props.target;
            Object.assign(this.instance.options.props, options.props);
        }
        return this.instance;
    };
    PopoverDirective.prototype.createInstance = function (options) {
        // mount() clears its container before adding the component to it.
        // So a wrapper is required to preserve the content of the element the tooltip has been setup on.
        var container = document.createElement(options.target instanceof SVGElement ? 'foreignObject' : 'div');
        // Make the wrapper absolute, so it doesn't disturb the document's flow
        container.style.position = 'absolute';
        var app = vue.createApp({
            /**
             * Wrap the component into a root component so props can be reactive.
             * @see https://github.com/vuejs/core/issues/4874#issuecomment-959008724
             */
            render: function () { return vue.h(popover_component_vue_vue_type_script_lang, options.props); }
        });
        options.target.append(container);
        app.mount(container);
        return { el: container, app: app, options: options };
    };
    PopoverDirective.prototype.addToGroup = function (el, group, factory) {
        if (!isUndefined.isUndefined(PopoverDirective_1.Groups[group])) {
            PopoverDirective_1.Groups[group].count++;
            PopoverDirective_1.Groups[group].instance.options.props.target.push(el);
            return PopoverDirective_1.Groups[group].instance;
        }
        var newInstance = factory();
        PopoverDirective_1.Groups[group] = { count: 1, instance: newInstance };
        return newInstance;
    };
    PopoverDirective.prototype.removeFromGroup = function (group) {
        if (!(--PopoverDirective_1.Groups[group].count)) {
            PopoverDirective_1.Groups[group].instance.app.unmount();
            delete PopoverDirective_1.Groups[group];
        }
    };
    PopoverDirective.prototype.resolveOptions = function (el, bindings) {
        var props = isObject.isObject(bindings.value) ? bindings.value : { content: String(bindings.value) };
        props.target = [el];
        return {
            target: el,
            group: getObjectValue.getObjectValue(Object.keys(bindings.modifiers || {}), 0, null),
            props: vue.reactive(props)
        };
    };
    var PopoverDirective_1;
    PopoverDirective.Groups = {};
    PopoverDirective = PopoverDirective_1 = _tslib.__decorate([
        directive_decorator.Directive({ name: 'bt-popover' })
    ], PopoverDirective);
    return PopoverDirective;
}());

exports.PopoverDirective = PopoverDirective;
