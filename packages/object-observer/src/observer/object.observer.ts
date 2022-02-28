import { isObject } from "@banquette/utils-type/is-object";
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
            target[key] = this.observeProperty(key, target[key]);
        }
    }
}
