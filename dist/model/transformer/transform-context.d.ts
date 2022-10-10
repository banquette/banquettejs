import { Constructor } from "@banquette/utils-type/types";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { TransformResult } from "../transform-result";
export declare class TransformContext {
    /**
     * The parent context, if applicable.
     */
    readonly parent: TransformContext | null;
    /**
     * The type of the root transformer currently running.
     */
    readonly type: symbol;
    /**
     * Constructor of the target model.
     */
    readonly ctor: Constructor;
    /**
     * The value being converted.
     */
    readonly value: any;
    /**
     * The property being transformed.
     * Can be null in case the transformer is executed on the root model.
     */
    readonly property: string | null;
    /**
     * The object holding the result of the current transformation.
     */
    readonly result: TransformResult;
    /**
     * Extra data for transformers.
     */
    readonly extra: Record<string, any>;
    constructor(parent: TransformContext | null, type: symbol, ctor: Constructor, value: any, property?: string | null, extra?: Record<string, any>);
    /**
     * Get an extra value.
     */
    getExtra(name: string, defaultValue?: any): any;
    /**
     * Get the highest context of the hierarchy that has the same constructor and a property name./
     */
    getHighestContextWithProperty(): TransformContext;
    /**
     * Get one or multiple extra value with an additional validation check.
     */
    getValidatedExtra(targets: Record<string, [ValidatorInterface | null, any]>): Record<string, any>;
}
