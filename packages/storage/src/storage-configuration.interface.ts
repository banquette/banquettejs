import { ConfigurationInterface } from "@banquette/config";
import { AdapterIdentifier } from "./types";

export interface StorageConfigurationInterface extends ConfigurationInterface {
    /**
     * Define the default adapter to use.
     */
    defaultAdapter: AdapterIdentifier<any>;

    /**
     * Configuration specific to the cookie adapter.
     */
    cookieAdapter: {
        // Prefix to be able to differentiate between cookies managed by the storage and cookies who don't.
        prefix: string;
    }
}
