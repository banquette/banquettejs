import { Exception } from "@banquette/exception/exception";
import { SystemException } from "@banquette/exception/system.exception";

/**
 * Exception thrown when parameters not defined in the endpoint's configuration have been given as input.
 */
export class UnsupportedParametersException extends SystemException {
    public slug: string = 'unsupported-parameters';

    public constructor(public parameters: string[], message: string, previous?: Exception|null, extra?: any) {
        super(message, previous, extra);
    }
}
