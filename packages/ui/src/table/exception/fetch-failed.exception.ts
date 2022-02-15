import { SystemException } from "@banquette/exception/system.exception";

/**
 * Thrown whenever a fetch fails for another reason than a cancellation.
 */
export class FetchFailedException extends SystemException {
    public slug: string = 'fetch-failed';
}
