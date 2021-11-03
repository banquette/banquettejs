import { Constructor, isUndefined } from "@banquette/utils-type";
import { TransformResult } from "../transform-result";

export class TransformContext {
    /**
     * The parent context, if applicable.
     */
    public readonly parent: TransformContext|null;

    /**
     * The type of transformation currently in process.
     * Available values should be defined in "T".
     */
    public readonly type: symbol;

    /**
     * Constructor of the target model.
     */
    public readonly ctor: Constructor;

    /**
     * The value being converted.
     */
    public readonly value: any;

    /**
     * The property being transformed.
     * Can be null in case the transformer is executed on the root model.
     */
    public readonly property: string|null;

    /**
     * The object holding the result of the current transformation.
     */
    public readonly result: TransformResult;

    /**
     * Extra data for transformers.
     */
    private readonly extra: Record<string, any>;

    public constructor(parent: TransformContext|null,
                       type: symbol,
                       ctor: Constructor,
                       value: any,
                       property?: string|null,
                       extra?: Record<string, any>) {
        this.parent = parent;
        this.type = type;
        this.ctor = ctor;
        this.value = value;
        this.property = property || null;
        this.extra = extra || {};
        this.result = new TransformResult(parent !== null ? parent.result : null);
    }

    /**
     * Get an extra value.
     */
    public getExtra(name: string, defaultValue?: any): any {
        if (!isUndefined(this.extra[name])) {
            return this.extra[name];
        }
        if (this.parent !== null) {
            return this.parent.getExtra(name, defaultValue);
        }
        return defaultValue;
    }
}
