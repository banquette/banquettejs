import { SystemException } from "@banquette/exception";

/**
 * Exception thrown when the browser doesn't support any of the registered adapters.
 */
export class NoAdapterAvailableException extends SystemException {
    public readonly id: string = 'no-adapter-available';

    constructor(message: string = 'None of the available storage adapters is supported by the current browser.') {
        super(message);
    }
}
