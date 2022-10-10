import { ConfigurationInterface } from "@banquette/config/config/configuration.interface";
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
        prefix: string;
    };
}
