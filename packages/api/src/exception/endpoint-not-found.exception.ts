import { Exception, SystemException } from "@banquette/exception";

/**
 * Exception thrown when an endpoint name cannot be found.
 */
export class EndpointNotFoundException extends SystemException {
    public readonly id: string = 'endpoint-not-found';

    public constructor(public name: string, message: string, previous?: Exception|null, extra?: any) {
        super(message, previous, extra);
    }
}
