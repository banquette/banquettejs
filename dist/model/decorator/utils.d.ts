import { Constructor } from "@banquette/utils-type/types";
import { TransformerInterface } from "../transformer/transformer.interface";
/**
 * Utility function that ensures the decorator has been set on a property and which
 * resolves the argument name if set on a constructor argument.
 */
export declare function propertyDecorator(cb: (ctor: Constructor, propertyKey: string) => any, errorMessage?: string): any;
export declare function createTransformableDecorator(type: symbol, transformer: TransformerInterface): any;
export declare function createRelationAwareTransformableDecorator(type: symbol, transformer: TransformerInterface | undefined, defaultTransformer: TransformerInterface): any;
