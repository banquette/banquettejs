import { Exception, SystemException } from "@banquette/exception";
import { TransformContext } from "../transformer/transform-context";

/**
 * Exception thrown when no transformer have been found for a transform context.
 */
export class NoCompatibleTransformerFoundException extends SystemException {
    public readonly id: string = 'no-compatible-transformer-found';

    public constructor(public context: TransformContext , message: string, previous?: Exception|null, extra?: any) {
        super(message, previous, extra);
    }
}
