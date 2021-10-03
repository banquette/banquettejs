import { Constructor } from "./types";

/**
 * Test if the input value is an object constructor.
 */
export function isConstructor(value: any): value is Constructor {
    try {
        new new Proxy(value, {construct() { return {}; }});
        return true;
    } catch (err) {
        return false;
    }
}
