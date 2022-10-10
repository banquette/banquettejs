/*!
 * Banquette Storage v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
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

export { StorageAdapterTag, StorageEvents };
