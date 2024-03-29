import { SystemException } from "@banquette/exception";

/**
 * Thrown when the generator script failed to load.
 */
export class FingerprintGeneratorScriptTimeoutException extends SystemException {
    public slug: string = 'fingerprint-generator-script-timeout';
}
