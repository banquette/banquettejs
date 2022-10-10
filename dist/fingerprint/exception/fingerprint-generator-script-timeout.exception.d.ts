import { SystemException } from "@banquette/exception/system.exception";
/**
 * Thrown when the generator script failed to load.
 */
export declare class FingerprintGeneratorScriptTimeoutException extends SystemException {
    slug: string;
}
