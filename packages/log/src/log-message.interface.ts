import { LogLevel } from "./constants";

/**
 * Keys are a short as possible to preserve storage space.
 */
export interface LogMessageInterface {
    /**
     * Level of the log.
     */
    level: LogLevel;

    /**
     * The message.
     */
    message: string;

    /**
     * Context information.
     */
    context: Record<string, any>;
}
