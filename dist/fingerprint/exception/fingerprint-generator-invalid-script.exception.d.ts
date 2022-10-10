import { SystemException } from "@banquette/exception/system.exception";
/**
 * Thrown after the generator script successfully loaded but cannot be exploited because of various possible reasons.
 */
export declare class FingerprintGeneratorInvalidScriptException extends SystemException {
    slug: string;
}
