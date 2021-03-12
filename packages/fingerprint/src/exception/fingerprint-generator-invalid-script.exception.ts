import { SystemException } from "@banquette/core";

/**
 * Thrown after the generator script successfully loaded but cannot be exploited because of various possible reasons.
 */
export class FingerprintGeneratorInvalidScriptException extends SystemException {

}
