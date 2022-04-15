import { isObject } from "@banquette/utils-type/is-object";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { AbstractObserver } from "./abstract.observer";

export class ObjectObserver extends AbstractObserver<object> {
    /**
     * @inheritDoc
     */
    public static Supports(target: any): boolean {
        return isObject(target) && !(target instanceof Date);
    }

    /**
     * @inheritDoc
     */
    protected observe(target: any): void {
        for (const key of Object.keys(target)) {
            const descriptor = Object.getOwnPropertyDescriptor(target, key);
            // Test for readonly properties.
            if (isUndefined(descriptor) || descriptor.writable || !isUndefined(descriptor.set)) {
                try {
                    target[key] = this.observeProperty(key, target[key]);
                } catch (e) {
                    // If the property fails to assign, we may have a setter that throws an exception.
                    // In such a case, there is not much we can do, simply ignore the error and accept
                    // the fact that this property will not be observed.
                }
            }
        }
    }
}
