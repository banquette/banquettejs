/**
 * Base class of all events.
 */
export declare class EventArg {
    /**
     * If `true` other events matching the tags on the current subscriber will not be called.
     */
    readonly propagationStopped: boolean;
    /**
     * If `true`, ask the caller of the event not to execute the scheduled action.
     */
    readonly defaultPrevented: boolean;
    /**
     * Stop the event propagation so no other listener with the same tags is called.
     */
    stopPropagation(): void;
    /**
     * Restore the event propagation so other listeners can be called.
     */
    restorePropagation(): void;
    /**
     * Ask the caller of the event not to execute the scheduled action.
     */
    preventDefault(): void;
}
