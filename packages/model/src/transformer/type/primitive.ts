import {
    ensureInteger,
    ensureNumber,
    ensureString,
    ensureBoolean,
    ensureScalarOrCompound
} from "@banquette/utils-type";
import { UsageException } from "@banquette/exception";
import { TransformerInterface } from "../transformer.interface";
import { TransformContext } from "../transform-context";
import { TransformResult } from "../../transform-result";

export enum Type {
    /**
     * Ensure the output is a scalar or compound type.
     * If not, converts it to string.
     */
    Any = 0,

    /**
     * Convert the input into a string.
     */
    String = 1,

    /**
     * Convert the input into a number.
     */
    Number = 2,

    /**
     * Convert the input into a number an round it.
     */
    Integer = 4,

    /**
     * Convert the input into a boolean.
     */
    Boolean = 8,

    /**
     * Allow the "null" value as input.
     *
     * Setting thins in conjunction with "Type.String" (Type.String | Type.Null) means that
     * if "null" is given as input, it will not be converted to an empty string.
     */
    Null = 16
}

/**
 * Ensure the output type matches the one given as parameter (in both directions).
 */
export function Primitive(transformType: Type = Type.Any, inverseType: Type = Type.Any): TransformerInterface {
    const ensureType = (type: Type, value: any) => {
        if ((type & Type.Null) === Type.Null && value === null) {
            return null;
        }
        if (type === Type.Any) {
            return ensureScalarOrCompound(value);
        }
        if ((type &  Type.Integer) === Type.Integer) {
            return ensureInteger(value);
        }
        if ((type &  Type.Number) === Type.Number) {
            return ensureNumber(value);
        }
        if ((type &  Type.String) === Type.String) {
            return ensureString(value);
        }
        if ((type &  Type.Boolean) === Type.Boolean) {
            return ensureBoolean(value);
        }
        throw new UsageException(`Invalid type "${String(type)}".`);
    };
    return {
        /**
         * @inheritDoc
         */
        transform(context: TransformContext): TransformResult {
            context.result.setResult(ensureType(transformType, context.value));
            return context.result;
        },

        /**
         * @inheritDoc
         */
        transformInverse(context: TransformContext): TransformResult {
            context.result.setResult(ensureType(inverseType, context.value));
            return context.result;
        }
    };
}
