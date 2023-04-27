import { ConfigurationInterface } from "@banquette/config";

export interface ApiConfigurationInterface extends ConfigurationInterface {
    /**
     * HttpEvents priorities.
     */
    eventsPriorities: {
        beforeRequest: number;
        beforeResponse: number;
        requestSuccess: number;
        requestFailure: number;
    }
}
