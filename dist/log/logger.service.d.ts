import { ConfigurationService } from "@banquette/config/config/configuration.service";
import { FingerprintService } from "@banquette/fingerprint/fingerprint.service";
import { StorageService } from "@banquette/storage/storage.service";
import { LogLevel } from './constants';
import { LogMessageInterface } from "./log-message.interface";
import { LoggerInterface } from "./logger.interface";
export declare class LoggerService implements LoggerInterface {
    private storage;
    private config;
    private fingerprintGenerator;
    /**
     * Whole list of logs.
     */
    private logs;
    /**
     * Logs that are waiting for the "logs" array to be loaded before being added to it.
     * Logs only transit here when the logger is loading the logs from the storage.
     */
    private logsQueue;
    /**
     * Hold the promise returned by the load() method, in case multiple calls
     * are made before it can resolve.
     */
    private loadingPromise;
    /**
     * True if persist() have been called and the processing is not finished yet.
     */
    private isPersisting;
    /**
     * True if persist() have been called while "isPersisting" is true.
     */
    private isWaitingForPersist;
    /**
     * Define the maximum log level to log.
     * The more critical the log, the lower the level.
     *
     * You can use LogLevel.ALL or LogLevel.NONE to easily capture all or none of the logs.
     */
    private maxLevel;
    /**
     * A unique string identifying the visitor.
     * Can be null if the generator failed to generate a fingerprint.
     */
    private fingerprint;
    constructor(storage: StorageService, config: ConfigurationService, fingerprintGenerator: FingerprintService);
    /**
     * Set the logger to listen a certain log level.
     * By default all log are registered but you can limit this using this method.
     *
     * If set for example to LogLevel.ERROR, only LogLevel.ERROR, LogLevel.CRITICAL, LogLevel.ALERT and
     * LogLevel.EMERGENCY logs will be recorded.
     */
    listen(level: LogLevel): void;
    /**
     * System is unusable.
     * This should trigger the SMS alerts and wake you up.
     */
    emergency(message: string, context?: Record<string, any>): void;
    /**
     * Action must be taken immediately.
     *
     * Example: Entire website down, database unavailable, etc. This should
     * trigger the SMS alerts and wake you up.
     */
    alert(message: string, context?: Record<string, any>): void;
    /**
     * Critical conditions.
     *
     * Example: Application component unavailable, unexpected exception.
     */
    critical(message: string, context?: Record<string, any>): void;
    /**
     * Runtime errors that do not require immediate action but should typically
     * be logged and monitored.
     */
    error(message: string, context?: Record<string, any>): void;
    /**
     * Exceptional occurrences that are not errors.
     *
     * Example: Use of deprecated APIs, poor use of an API, undesirable things
     * that are not necessarily wrong.
     */
    warning(message: string, context?: Record<string, any>): void;
    /**
     * Normal but significant events.
     */
    notice(message: string, context?: Record<string, any>): void;
    /**
     * Interesting events.
     *
     * Example: User logs in, SQL logs.
     */
    info(message: string, context?: Record<string, any>): void;
    /**
     * Detailed debug information.
     */
    debug(message: string, context?: Record<string, any>): void;
    /**
     * Logs with an arbitrary level.
     */
    log(level: LogLevel, message: string, context?: Record<string, any>): void;
    /**
     * Save a log locally.
     */
    private register;
    /**
     * Clear the logs.
     */
    clear(): void;
    /**
     * Get all logs including non yet persisted ones.
     */
    getAll(): Promise<LogMessageInterface[]>;
    /**
     * Check if existing logs have been loaded from the storage.
     */
    private isLoaded;
    /**
     * Load existing logs from the storage.
     *
     * The loading can never fail.
     * If an error occurs when trying to fetch the logs or to decode the result, the error is ignored and
     * an empty array will be sent as a result.
     *
     * Logs are an optional feature, a debug feature.
     */
    private load;
    /**
     * Write the current logs into the storage.
     */
    private persist;
    /**
     * Add some data to the context to better understand where it comes from.
     *
     * This includes:
     *   - a fingerprint of the visitor (key "_fp")
     *   - the caller function/method name (key "_caller")
     */
    private improveContext;
    /**
     * Allow for asynchronous processing when "improving" the context.
     *
     * This includes:
     *   - a fingerprint of the visitor (key "_fp")
     */
    private improveContextAsync;
    /**
     * Replace all the placeholders (like {foo}, {bar}) found in the message.
     */
    private static resolveMessagePlaceholders;
}
