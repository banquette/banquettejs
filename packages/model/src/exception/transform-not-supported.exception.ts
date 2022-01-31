import { Exception } from "@banquette/exception/exception";
import { SystemException } from "@banquette/exception/system.exception";

/**
 * Exception thrown when the "transform" method is called on a transformer that doesn't implement it.
 */
export class TransformNotSupportedException extends SystemException {
    public slug: string = 'transform-not-supported';

    public constructor(message: string = 'The "transformInverse" method is not available for this transformer.', previous?: Exception|null, extra?: any) {
        super(message, previous, extra);
    }
}
