import { ConfigurationInterface } from "@banquette/config";
import { LogLevel } from "./constants";

export interface LogConfigurationInterface extends ConfigurationInterface {
    /**
     * Should the log manager register new logs?
     */
    level: LogLevel;

    /**
     * Name of the key where logs are stored in the local storage.
     */
    storageKey: string;

    /**
     * Maximum number of logs to store in the storage.
     * When this number is reached, old logs will be removed to make room for newer ones.
     */
    maximumCount: number;
}
