import { StorageService } from "@banquette/storage/storage.service";
import { AdapterInterface } from "./adapter/adapter.interface";
import './adapter/fingerprintjs.adapter';
export declare class FingerprintService {
    private storage;
    private adapters;
    /**
     * Name of the key to use to store the fingerprint in cache.
     * "efp" stands for: banquette-fingerprint
     */
    private static StorageKey;
    /**
     * In case multiple calls are made to getFingerprint() before the promise can resolve.
     */
    private promise;
    constructor(storage: StorageService, adapters: AdapterInterface[]);
    /**
     * Generate a string that uniquely identify the current visitor.
     *
     * @param useCache boolean (optional, default: true) if true, the fingerprint can be fetched from the local storage if available.
     *                         If you NEED the fingerprint to be reliable, set it to false so a full detection is made each time,
     *                         comes with a huge performance cost.
     */
    getFingerprint(useCache?: boolean): Promise<string>;
    /**
     * Try to generate the fingerprint by loading FingerprintJS dynamically.
     */
    private generateFingerprint;
}
