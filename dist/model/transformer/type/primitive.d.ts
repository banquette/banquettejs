import { TransformerInterface } from "../transformer.interface";
export declare enum Type {
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
     * Convert the input into a number and round it.
     */
    Integer = 4,
    /**
     * Convert the input into a boolean.
     */
    Boolean = 8,
    /**
     * Allow the "null" value as input.
     *
     * For example, setting this in conjunction with "Type.String" (Type.String | Type.Null) means that
     * if "null" is given as input, it will not be converted to an empty string.
     */
    Null = 16
}
/**
 * Ensure the output type matches the ones given as parameters.
 */
export declare function Primitive(transformType?: Type, inverseType?: Type): TransformerInterface;
