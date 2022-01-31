import { Exception } from "@banquette/exception/exception";
import { SystemException } from "@banquette/exception/system.exception";

/**
 * Exception thrown when an endpoint name cannot be found.
 */
export class EndpointNotFoundException extends SystemException {
    public slug: string = 'endpoint-not-found';

    public constructor(public name: string, message: string, previous?: Exception|null, extra?: any) {
        super(message, previous, extra);
    }
}
