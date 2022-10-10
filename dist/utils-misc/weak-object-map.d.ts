export interface WeakObjectRef<T> {
    obj: T;
    release: () => void;
}
/**
 * Offers a way to index objects by string while being as close as possible to a weak reference.
 *
 * It's meant to workaround the absence of "WeakRef", still in proposal at the time of writing:
 * @see https://tc39.es/proposal-weakrefs/#sec-weak-ref-objects
 */
export declare class WeakObjectMap<T = Object> {
    private map;
    /**
     * A map of timers ids, indexed by alias name.
     */
    private removeTimers;
    /**
     * Register a string alias for an object.
     */
    register(obj: T, alias: string): void;
    /**
     * Test if an alias exists in the map.
     */
    has(alias: string): boolean;
    /**
     * Get a reference on a object by its alias name.
     *
     * Don't forget to call "release()" when the object is not used anymore
     * so the object can (maybe) be removed from the map.
     */
    getRef(alias: string): WeakObjectRef<T> | null;
    /**
     * Remove an alias from the map.
     */
    remove(alias: string): void;
    /**
     * Queue an alias for removal.
     *
     * Removing the reference is important but doesn't require immediate action.
     * Giving some time where there is no reference left on the object is important as some
     * processing may be at play externally that may ask for a reference in a couple of frames.
     *
     * Here we give it 30 seconds, which should be more than enough in most cases.
     *
     * Using a WeakRef would be far better but it is still on proposal state at the time of writing:
     * @see https://tc39.es/proposal-weakrefs/#sec-weak-ref-objects
     */
    private scheduleMapRemoval;
    /**
     * Remove the timer of an alias, if it exists.
     */
    private clearTimer;
}
