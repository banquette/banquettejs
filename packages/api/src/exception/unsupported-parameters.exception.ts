import { Exception, SystemException } from "@banquette/exception";

/**
 * Exception thrown when parameters not defined in the endpoint's configuration have been given as input.
 */
export class UnsupportedParametersException extends SystemException {
    public readonly id: string = 'unsupported-parameters';

    public constructor(public parameters: string[], message: string, previous?: Exception|null, extra?: any) {
        super(message, previous, extra);
    }
}
