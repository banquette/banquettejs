import { AbstractObserver } from "./abstract.observer";
export declare class ArrayObserver<T extends any[] = any[]> extends AbstractObserver<T> {
    private static ArrayOverrides;
    /**
     * @inheritDoc
     */
    static Supports(target: any): boolean;
    /**
     * `Array.pop()` override.
     */
    proxifiedPop: () => any;
    /**
     * `Array.shift()` override.
     */
    proxifiedShift: () => any;
    /**
     * `Array.unshift()` override.
     */
    proxifiedUnshift: (...args: any[]) => any;
    /**
     * `Array.reverse()` override.
     */
    proxifiedReverse: () => any;
    /**
     * `Array.sort()` override.
     */
    proxifiedSort: (compareFn?: ((a: any, b: any) => number) | undefined) => any;
    /**
     * `Array.fill()` override.
     */
    proxifiedFill: (value: any, start?: number, end?: number) => any;
    /**
     * `Array.splice()` override.
     */
    proxifiedSplice: (start: number, deleteCount?: number, ...newItems: any[]) => any;
    /**
     * `Array.copyWithin()` override.
     */
    proxifiedCopyWithin: (targetStart: number, copyStart?: number, copyEnd?: number) => any;
    /**
     * @inheritDoc
     */
    protected observe(target: any[]): void;
    /**
     * Get handler that overrides some methods of Array.prototype.
     */
    protected get(target: any, key: string): any;
    /**
     * Update the name of each item of the array to ensure it corresponds to its index.
     */
    private reassignNames;
}
