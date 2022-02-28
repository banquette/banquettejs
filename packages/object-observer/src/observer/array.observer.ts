import { isArray } from "@banquette/utils-type/is-array";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { MutationType } from "../constant";
import { Mutation } from "../mutation";
import { AbstractObserver } from "./abstract.observer";

export class ArrayObserver<T extends any[] = any[]> extends AbstractObserver<T> {
    private static ArrayOverrides: Record<string, Partial<keyof ArrayObserver>> = {
        pop: 'proxifiedPop',
        shift: 'proxifiedShift',
        unshift: 'proxifiedUnshift',
        reverse: 'proxifiedReverse',
        sort: 'proxifiedSort',
        splice: 'proxifiedSplice',
        fill: 'proxifiedFill',
        copyWithin: 'proxifiedCopyWithin',
    };

    /**
     * @inheritDoc
     */
    public static Supports(target: any): boolean {
        return isArray(target);
    }

    /**
     * `Array.pop()` override.
     */
    public proxifiedPop = (): any => {
        if (!this.proxy.length) {
            return undefined;
        }
        let removedItem = this.target.pop();
        this.detachValue(removedItem);
        this.notify(new Mutation(
            MutationType.Delete,
            [String(this.proxy.length)],
            removedItem,
            undefined
        ));
        return removedItem;
    };

    /**
     * `Array.shift()` override.
     */
    public proxifiedShift = (): any => {
        if (!this.proxy.length) {
            return undefined;
        }
        let removedItem = this.target.shift();
        this.detachValue(removedItem);
        this.notify(new Mutation(
            MutationType.Delete,
            ['0'],
            removedItem,
            undefined
        ));
        return removedItem;
    };

    /**
     * `Array.unshift()` override.
     */
    public proxifiedUnshift = (...args: any[]): any => {
        for (let i = 0; i < args.length; ++i) {
            args[i] = this.observeProperty(String(i), args[i]);
        }
        const unshiftResult = Reflect.apply(this.target.unshift, this.target, args);
        for (let i = 0; i < args.length; ++i) {
            this.notify(new Mutation(
                MutationType.Insert,
                [String(i)],
                undefined,
                args[i]
            ));
        }
        return unshiftResult;
    };

    /**
     * `Array.reverse()` override.
     */
    public proxifiedReverse = (): any => {
        if (this.target.length > 0) {
            this.target.reverse();
            this.reassignNames();
            this.notify(new Mutation(
                MutationType.Reverse,
                [],
                undefined,
                this.proxy
            ));
        }
        return this.proxy;
    };

    /**
     * `Array.sort()` override.
     */
    public proxifiedSort = (compareFn?: (a: any, b: any) => number): any => {
        if (this.target.length > 0) {
            this.target.sort(compareFn);
            this.reassignNames();
            this.notify(new Mutation(
                MutationType.Sort,
                [],
                undefined,
                this.proxy
            ));
        }
        return this.proxy;
    };

    /**
     * `Array.fill()` override.
     */
    public proxifiedFill = (value: any, start?: number, end?: number): any => {
        const clone = this.target.slice(0);
        this.target.fill(value, start, end);

        for (let i = 0; i < this.target.length; ++i) {
            this.target[i] = this.observeProperty(String(i), this.target[i]);
            if (clone[i] !== this.target[i]) {
                this.notify(new Mutation(
                    MutationType.Update,
                    [String(i)],
                    clone[i],
                    this.target[i]
                ));
            }
        }
        return this.proxy;
    };

    /**
     * `Array.splice()` override.
     */
    public proxifiedSplice = (start: number, deleteCount?: number, ...newItems: any[]): any => {
        const positiveStart = start < 0 ? Math.max(0, this.target.length + start) : start;
        const spliceResult = this.target.splice.apply(this.target, [start].concat(deleteCount ? [deleteCount] : [], newItems) as any);
        for (let i = 0; i < spliceResult.length; ++i) {
            this.detachValue(spliceResult[i]);
            this.notify(new Mutation(
                MutationType.Delete,
                [String(positiveStart + i)],
                spliceResult[i],
                undefined
            ));
        }
        for (let i = 0; i < newItems.length; ++i) {
            this.target[positiveStart + i] = this.observeProperty(String(i), newItems[i]);
            this.notify(new Mutation(
                MutationType.Insert,
                [String(positiveStart + i)],
                undefined,
                this.target[positiveStart + i]
            ));
        }
        this.reassignNames();
        return spliceResult;
    };

    /**
     * `Array.copyWithin()` override.
     */
    public proxifiedCopyWithin = (targetStart: number, copyStart: number = 0, copyEnd: number = this.target.length): any => {
        const positiveTargetStart = targetStart < 0 ? Math.max(0, this.target.length + targetStart) : targetStart;
        const positiveCopyStart = targetStart < 0 ? Math.max(0, this.target.length + targetStart) : targetStart;
        const positiveCopyEnd = copyEnd < 0 ? Math.max(0, this.target.length + copyEnd) : copyEnd;
        const clone = this.target.slice(0);

        this.target.copyWithin(targetStart, copyStart, copyEnd);

        for (let i = positiveTargetStart, l = positiveCopyEnd - positiveCopyStart; i < l; ++i) {
            if (clone[i] !== this.target[i]) {
                this.notify(new Mutation(
                    MutationType.Update,
                    [String(i)],
                    clone[i],
                    this.target[i]
                ));
            }
        }
        return this.target;
    }

    /**
     * @inheritDoc
     */
    protected observe(target: any[]): void {
        for (let i = 0; i < target.length; ++i) {
            target[i] = this.observeProperty(String(i), target[i]);
        }
    }

    /**
     * Get handler that overrides some methods of Array.prototype.
     */
    protected get(target: any, key: string): any {
        if (isUndefined(ArrayObserver.ArrayOverrides[key])) {
            return target[key];
        }
        return this[ArrayObserver.ArrayOverrides[key]];
    }

    /**
     * Update the name of each item of the array to ensure it corresponds to its index.
     */
    private reassignNames(): void {
        for (let i = 0; i < this.target.length; i++) {
            const observer = AbstractObserver.ExtractObserver(this.target[i]);
            if (observer !== null) {
                (observer as any).updateName(String(i), this);
            }
        }
    }
}
