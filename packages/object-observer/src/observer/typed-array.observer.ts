import { isUndefined } from "@banquette/utils-type/is-undefined";
import { MutationType } from "../constant";
import { Mutation } from "../mutation";
import { ArrayObserver } from "./array.observer";

export class TypedArrayObserver extends ArrayObserver<any> {
    private static TypedArrayOverrides: Record<string, keyof TypedArrayObserver> = {
        reverse: 'proxifiedReverse',
        sort: 'proxifiedSort',
        fill: 'proxifiedFill',
        copyWithin: 'proxifiedCopyWithin',
        set: 'proxifiedSet'
    };

    /**
     * @inheritDoc
     */
    public static Supports(target: any): boolean {
        return ArrayBuffer.isView(target);
    }

    /**
     * Get handler that overrides some methods of Array.prototype.
     */
    protected get(target: any, key: string): any {
        if (isUndefined(TypedArrayObserver.TypedArrayOverrides[key])) {
            return target[key];
        }
        return this[TypedArrayObserver.TypedArrayOverrides[key]];
    }

    /**
     * @inheritDoc
     */
    public proxifiedSet = (source: any, offset: number): boolean => {
        const sourceLength = source.length;
        const clone = this.target.slice(0);
        offset = offset || 0;

        this.target.set(source, offset);
        for (let i = offset; i < sourceLength + offset; i++) {
            if (clone[i] !== this.target[i]) {
                this.notify(new Mutation(
                    MutationType.Update,
                    [String(i)],
                    clone[i],
                    this.target[i]
                ));
            }
        }
        return true;
    };
}
