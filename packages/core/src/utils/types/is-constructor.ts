import { ConstructorFunction } from "./constructor-function.type";

/**
 * Test if the input value is an object constructor.
 */
export function isConstructor(value: any): value is ConstructorFunction<any> {
    try {
        new new Proxy(value, {construct() { return {}; }});
        return true;
    } catch (err) {
        return false;
    }
}
