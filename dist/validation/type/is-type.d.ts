import { ValidatorOptionsInterface } from "../validator-options.interface";
import { ValidatorInterface } from "../validator.interface";
export declare enum Type {
    String = 1,
    Number = 2,
    Numeric = 4,
    Boolean = 8,
    Object = 16,
    Array = 32,
    Symbol = 64,
    Undefined = 128,
    Null = 256
}
/**
 * A validator checking the value matches a type.
 */
export declare function IsType(target: Type, options?: ValidatorOptionsInterface | string): ValidatorInterface;
