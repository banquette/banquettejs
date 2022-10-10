import { AbstractObserver } from "./abstract.observer";
export declare class ObjectObserver extends AbstractObserver<object> {
    /**
     * @inheritDoc
     */
    static Supports(target: any): boolean;
    /**
     * @inheritDoc
     */
    protected observe(target: any): void;
}
