/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * The tag to use when registering a root transformer into the Injector
 * so the transform service can import it.
 */
var ModelTransformerTag = Symbol('model-transformer');
/**
 * Events emitted by the model module through the event dispatcher singleton.
 */
var ModelEvents = {
    /**
     * Emitted when a watched model changes.
     */
    ModelChange: Symbol('model:change')
};
/**
 * Wildcard transformer name.
 */
var Wildcard = '*';
/**
 * A reference on the base object constructor.
 */
var ObjectCtor = Object.getPrototypeOf(Object);

exports.ModelEvents = ModelEvents;
exports.ModelTransformerTag = ModelTransformerTag;
exports.ObjectCtor = ObjectCtor;
exports.Wildcard = Wildcard;
