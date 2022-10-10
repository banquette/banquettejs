import { ArrayObserver } from "./array.observer";
export declare class TypedArrayObserver extends ArrayObserver<any> {
    private static TypedArrayOverrides;
    /**
     * @inheritDoc
     */
    static Supports(target: any): boolean;
    /**
     * Get handler that overrides some methods of Array.prototype.
     */
    protected get(target: any, key: string): any;
    /**
     * @inheritDoc
     */
    proxifiedSet: (source: any, offset: number) => boolean;
}
