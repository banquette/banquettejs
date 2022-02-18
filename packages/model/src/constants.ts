/**
 * The tag to use when registering a root transformer into the Injector
 * so the transform service can import it.
 */
export const ModelTransformerTag = Symbol('model-transformer');

/**
 * Events emitted by the model module through the event dispatcher singleton.
 */
export const ModelEvents = {
    /**
     * Emitted when a watched model changes.
     */
    ModelChange: Symbol('model:change')
};

/**
 * Wildcard transformer name.
 */
export const Wildcard = '*';

/**
 * A reference on the base object constructor.
 */
export const ObjectCtor = Object.getPrototypeOf(Object);
