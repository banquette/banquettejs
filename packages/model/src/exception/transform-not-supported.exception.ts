import { Exception, SystemException } from "@banquette/exception";

/**
 * Exception thrown when the "transform" method is called on a transformer that doesn't implement it.
 */
export class TransformNotSupportedException extends SystemException {
    public constructor(message: string = 'The "transformInverse" method is not available for this transformer.', previous?: Exception|null, extra?: any) {
        super(message, previous, extra);
    }
}
