import { LogLevel } from "./constants";

/**
 * Describes a logger instance.
 *
 * Uses the PHP's Psr\Log logger interface.
 * @see https://github.com/php-fig/log/blob/master/Psr/Log/LoggerInterface.php
 *
 * The message MAY contain placeholders in the form: {foo} where foo
 * will be replaced by the context data in key "foo".
 *
 * The context array can contain arbitrary data. The only assumption that
 * can be made by implementors is that if an Exception instance is given
 * to produce a stack trace, it MUST be in a key named "exception".
 *
 * @see https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-3-logger-interface.md
 * for the full interface specification.
 */
export interface LoggerInterface
{
    /**
     * System is unusable.
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
}
