/**
 * Tag used to mark adapters in the container.
 */
export const StorageAdapterTag = Symbol('StorageAdapter');

/**
 * Events identifiers.
 */
export const StorageEvents = {
    /**
     * Triggerred on any change in the storage.
     */
    Change: Symbol('on-change')
}
