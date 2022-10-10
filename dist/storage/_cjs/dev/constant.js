/*!
 * Banquette Storage v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Tag used to mark adapters in the container.
 */
var StorageAdapterTag = Symbol('StorageAdapter');
/**
 * Events identifiers.
 */
var StorageEvents = {
    /**
     * Triggerred on any change in the storage.
     */
    Change: Symbol('on-change')
};

exports.StorageAdapterTag = StorageAdapterTag;
exports.StorageEvents = StorageEvents;
