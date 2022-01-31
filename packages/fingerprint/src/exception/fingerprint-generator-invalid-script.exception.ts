import { SystemException } from "@banquette/exception/system.exception";

/**
 * Thrown after the generator script successfully loaded but cannot be exploited because of various possible reasons.
 */
export class FingerprintGeneratorInvalidScriptException extends SystemException {
    public slug: string = 'fingerprint-generator-invalid-script';
}
