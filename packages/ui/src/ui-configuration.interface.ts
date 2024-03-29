import { ConfigurationInterface } from "@banquette/config";
import { TableConfigurationInterface } from "./table/table-configuration.interface";

export interface UiConfigurationInterface extends ConfigurationInterface {
    /**
     * Configuration of the table view model.
     */
    table: TableConfigurationInterface;
}
