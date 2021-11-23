import { isUndefined } from "@banquette/utils-type/is-undefined";
import { proxy } from "./proxy";

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
export class WeakObjectMap<T = Object> {
    private map: Record<string, {obj: T, refsCount: number}> = {};

    /**
     * A map of timers ids, indexed by alias name.
     */
    private removeTimers: Record<string, number> = {};

    /**
     * Register a string alias for an object.
     */
    public register(obj: T, alias: string): void {
        this.map[alias] = {obj, refsCount: 0};
        this.clearTimer(alias);
    }

    /**
     * Test if an alias exists in the map.
     */
    public has(alias: string): boolean {
        return !isUndefined(this.map[alias]);
    }

    /**
     * Get a reference on a object by its alias name.
     *
     * Don't forget to call "release()" when the object is not used anymore
     * so the object can (maybe) be removed from the map.
     */
    public getRef(alias: string): WeakObjectRef<T>|null {
        if (isUndefined(this.map[alias])) {
            return null;
        }
        this.clearTimer(alias);
        let releaseCalled: boolean = false;
        return {
            obj: this.map[alias].obj,
            release: () => {
                if (!releaseCalled && !isUndefined(this.map[alias])) {
                    releaseCalled = true;
                    if (--this.map[alias].refsCount <= 0) {
                        this.scheduleMapRemoval(alias);
                    }
                }
            }
        };
    }

    /**
     * Remove an alias from the map.
     */
    public remove(alias: string): void {
        if (!isUndefined(this.map[alias])) {
            delete this.map[alias];
            this.clearTimer(alias);
        }
    }

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
    private scheduleMapRemoval(alias: string): void {
        if (isUndefined(this.removeTimers[alias])) {
            setTimeout(proxy(this.remove, this), 30000);
        }
    }

    /**
     * Remove the timer of an alias, if it exists.
     */
    private clearTimer(alias: string): void {
        if (!isUndefined(this.removeTimers[alias])) {
            clearTimeout(this.removeTimers[alias]);
            delete this.removeTimers[alias];
        }
    }
}
