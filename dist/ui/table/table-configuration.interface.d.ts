import { ConfigurationInterface } from "@banquette/config/config/configuration.interface";
export interface TableConfigurationInterface extends ConfigurationInterface {
    pagination: {
        pageParameterName: string;
        itemsPerPageParameterName: string;
        strategyParameterName: string | null;
    };
    filtering: {
        /**
         * If the filtering form value is flattened into a key/value pair on export (before the filters are sent to the server).
         * This option defines the character to use to concatenate the levels.
         *
         * Example:
         *
         * For a form value of:
         * {
         *     "group" {          // FormGroup
         *         "name": "test" // FormControl
         *     }
         * }
         *
         * With a `flattenConcatenator` of ".", the result will be:
         *
         * {
         *     "group.name": "test"
         * }
         */
        flattenConcatenator: string;
    };
    /**
     * HttpEvents priorities.
     */
    apiEventsPriorities: {
        beforeRequest: number;
        beforeResponse: number;
    };
}
