import { Exception } from "@banquette/exception/exception";
import { SystemException } from "@banquette/exception/system.exception";
import { TransformContext } from "../transformer/transform-context";
/**
 * Exception thrown when no transformer have been found for a transform context.
 */
export declare class NoCompatibleTransformerFoundException extends SystemException {
    context: TransformContext;
    slug: string;
    constructor(context: TransformContext, message: string, previous?: Exception | null, extra?: any);
}
