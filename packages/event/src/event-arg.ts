/**
 * Base class of all events.
 */
export class EventArg {
    /**
     * If `true` other events matching the tags on the current subscriber will not be called.
     */
    public readonly propagationStopped: boolean = false;

    /**
     * If `true`, ask the caller of the event not to execute the scheduled action.
     */
    public readonly defaultPrevented: boolean = false;

    /**
     * Stop the event propagation so no other listener with the same tags is called.
     */
    public stopPropagation(): void {
        (this as any /* Writeable<EventArg> */).propagationStopped = true;
    }

    /**
     * Restore the event propagation so other listeners can be called.
     */
    public restorePropagation(): void {
        (this as any /* Writeable<EventArg> */).propagationStopped = false;
    }

    /**
     * Ask the caller of the event not to execute the scheduled action.
     */
    public preventDefault(): void {
        (this as any /* Writeable<EventArg> */).defaultPrevented = true;
    }
}
