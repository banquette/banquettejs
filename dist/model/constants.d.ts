/**
 * The tag to use when registering a root transformer into the Injector
 * so the transform service can import it.
 */
export declare const ModelTransformerTag: unique symbol;
/**
 * Events emitted by the model module through the event dispatcher singleton.
 */
export declare const ModelEvents: {
    /**
     * Emitted when a watched model changes.
     */
    ModelChange: symbol;
};
/**
 * Wildcard transformer name.
 */
export declare const Wildcard = "*";
/**
 * A reference on the base object constructor.
 */
export declare const ObjectCtor: any;
