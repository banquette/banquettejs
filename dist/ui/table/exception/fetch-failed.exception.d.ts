import { SystemException } from "@banquette/exception/system.exception";
/**
 * Thrown whenever a fetch fails for another reason than a cancellation.
 */
export declare class FetchFailedException extends SystemException {
    slug: string;
}
