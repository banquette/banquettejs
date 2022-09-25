import { UsageException } from "@banquette/exception/usage.exception";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Constructor } from "@banquette/utils-type/types";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { TransformResult } from "../transform-result";

export class TransformContext {
    /**
     * The parent context, if applicable.
     */
    public readonly parent: TransformContext|null;

    /**
     * The type of the root transformer currently running.
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
    public readonly extra: Record<string, any>;

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

    /**
     * Get the highest context of the hierarchy that has the same constructor and a property name./
     */
    public getHighestContextWithProperty(): TransformContext {
        let result: TransformContext = this;
        let currentContext: TransformContext = this;
        while (currentContext.parent !== null && currentContext.ctor === currentContext.parent.ctor) {
            if (currentContext.property) {
                result = currentContext;
            } else {
                break ;
            }
            currentContext = currentContext.parent;
        }
        if (currentContext.property) {
            result = currentContext;
        }
        return result;
    }

    /**
     * Get one or multiple extra value with an additional validation check.
     */
    public getValidatedExtra(targets: Record<string, [ValidatorInterface|null, any]>): Record<string, any> {
        const output: Record<string, any> = {};
        for (const key of Object.keys(targets)) {
            const config = targets[key];
            const value = this.getExtra(key, config[1]);
            const validator = config[0];
            if (validator !== null) {
                const validationResult = validator.validate(value);
                if (validationResult.waiting) {
                    throw new UsageException('Asynchronous validators are not supported in "TransformContext::getValidatedExtra".');
                }
                if (validationResult.invalid) {
                    throw new UsageException(validationResult.getViolationsStringsArray().join(', '));
                }
            }
            output[key] = value;
        }
        return output;
    }
}
