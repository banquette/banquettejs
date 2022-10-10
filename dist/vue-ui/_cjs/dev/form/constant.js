/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ViewModelEvents = {
    /**
     * That's where you should set the configurable options, create composables and configure them.
     * Vue props are not guaranteed to be ready at this point.
     */
    Configure: Symbol('configure'),
    /**
     * At this point the view model expect the configuration to be ready to use.
     * Vue props are guaranteed to be ready to use.
     */
    Initialize: Symbol('initialize'),
    /**
     * The component is initialized and ready to use by the end-user.
     */
    Ready: Symbol('ready')
};
exports.ViewModelSequence = void 0;
(function (ViewModelSequence) {
    /**
     * Called when the view model is created.
     */
    ViewModelSequence["Initialize"] = "initialize";
    /**
     * Called just before the view model is destroyed.
     */
    ViewModelSequence["Dispose"] = "dispose";
})(exports.ViewModelSequence || (exports.ViewModelSequence = {}));
/**
 * To distinguish between `undefined` set from the end-user and the internal `undefined`.
 */
var UndefinedValue = Symbol('undefined');

exports.UndefinedValue = UndefinedValue;
exports.ViewModelEvents = ViewModelEvents;
