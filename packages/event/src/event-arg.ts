import { Writeable } from "@banquette/utils-type/types";

/**
 * Base class of all events.
 */
export class EventArg {
    /**
     * If `true` other events matching the tags on the current subscriber will not be called.
     */
    public readonly propagationStopped: boolean = false;

    /**
     * Stop the event propagation so no other listener with the same tags is called.
     */
    public stopPropagation(): void {
        (this as Writeable<EventArg>).propagationStopped = true;
    }

    /**
     * Restore the event propagation so other listeners can be called.
     */
    public restorePropagation(): void {
        (this as Writeable<EventArg>).propagationStopped = false;
    }
}
