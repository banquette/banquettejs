import { VoidCallback } from "@banquette/utils-type/types";

/**
 * Wrapper to the native `addEventListener` that offers an unsubscribe function.
 */
export function addEventListener(target: Document|HTMLElement, eventName: keyof DocumentEventMap, cb: EventListenerOrEventListenerObject): VoidCallback {
    let removed: boolean = false;
    target.addEventListener(eventName, cb);
    return () => {
        if (!removed) {
            target.removeEventListener(eventName, cb);
            removed = true;
        }
    };
}
