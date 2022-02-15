import { ConfigurationInterface } from "@banquette/config/config/configuration.interface";

export interface TableConfigurationInterface extends ConfigurationInterface {
    pagination: {
        pageParameterName: string;
        itemsPerPageParameterName: string;
        strategyParameterName: string|null;
    },

    /**
     * HttpEvents priorities.
     */
    apiEventsPriorities: {
        beforeRequest: number;
        beforeResponse: number;
    }
}
