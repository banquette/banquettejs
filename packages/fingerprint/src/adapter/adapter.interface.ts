
export interface AdapterInterface {
    /**
     * Generate the fingerprint for the current visitor.
     */
    generateFingerprint(): Promise<string>;
}
