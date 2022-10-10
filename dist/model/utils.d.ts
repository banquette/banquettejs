import { Complete } from "@banquette/utils-type/types";
import { RootTransformerInterface } from "./transformer/root-transformer.interface";
import { TransformerInterface } from "./transformer/transformer.interface";
/**
 * Ensure all methods defined in TransformerInterface are implemented
 * by adding the missing methods that will throw an error if called.
 *
 * This gives the end user the flexibility to only define what's needed while
 * making it easy for the rest of the system that will not have to check for the methods
 * existence each time they are used.
 */
export declare function ensureCompleteTransformer(transformer: TransformerInterface): Complete<TransformerInterface>;
/**
 * Same as ensureCompleteTransformer with the addition of methods specific to ModelTransformerInterface.
 */
export declare function ensureCompleteModelTransformer(transformer: RootTransformerInterface): Complete<RootTransformerInterface>;
