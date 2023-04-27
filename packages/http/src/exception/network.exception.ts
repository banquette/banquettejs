import { Exception, SystemException } from '@banquette/exception';

/**
 * Exception thrown when a request fails at the network level
 * (like if the timeout is reached or if the request is canceled).
 *
 * More specific error types may extend this exception.
 */
export class NetworkException extends SystemException {
    public slug: string = 'network';

    public constructor(
        public readonly retryable: boolean,
        message: string = 'An error occurred during the transaction.',
        previous?: Exception | null,
        extra?: any
    ) {
        super(message, previous, extra);
    }
}
