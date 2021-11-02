import { ConfigurationInterface } from "@banquette/config";
import { ApiEndpointsConfigurationInterface } from "./api-endpoints-configuration.interface";

export interface ApiConfigurationInterface extends ConfigurationInterface {
    /**
     * Configuration relative to the endpoints.
     * That's not where you register endpoints, but where you configure the general behavior.
     */
    endpoints: ApiEndpointsConfigurationInterface;
}
