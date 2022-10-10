import { AdapterInterface } from "./adapter.interface";
export declare class FingerprintjsAdapter implements AdapterInterface {
    /**
     * Maximum time to wait for the detection script to load.
     */
    private static ScriptLoadTimeout;
    /**
     * Test if the adapter is available in the current configuration.
     */
    generateFingerprint(): Promise<string>;
}
