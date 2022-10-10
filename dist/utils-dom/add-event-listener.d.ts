import { VoidCallback } from "@banquette/utils-type/types";
/**
 * Wrapper to the native `addEventListener` that offers an unsubscribe function.
 */
export declare function addEventListener(target: Document | HTMLElement, eventName: keyof DocumentEventMap, cb: EventListenerOrEventListenerObject): VoidCallback;
