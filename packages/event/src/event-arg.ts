/**
 * Base class of all events.
 */
export class EventArg {
    /**
     * Holds if the propagation is stopped.
     */
    private propagationStopped: boolean = false;

    /**
     * Stop the event propagation so no other listener with the same tags is called.
     */
    public stopPropagation(): void {
        this.propagationStopped = true;
    }

    /**
     * Restore the event propagation so other listeners can be called.
     */
    public restorePropagation(): void {
        this.propagationStopped = false;
    }

    /**
     * Test if the propagation has been stopped for this event.
     */
    public isPropagationStopped(): boolean {
        return this.propagationStopped;
    }
}
