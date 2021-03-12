import { Adapter } from "./types";

export interface StorageConfigurationInterface {
    /**
     * Define the default adapter to use.
     */
    defaultAdapter: Adapter;

    /**
     * Configuration specific to the cookie adapter.
     */
    cookieAdapter: {
        // Prefix to be able to differentiate between cookies managed by the storage and cookies who don't.
        prefix: string;
    }
}
