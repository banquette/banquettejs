/*!
 * Banquette Log v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Defines the logs levels.
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["NONE"] = 0] = "NONE";
    LogLevel[LogLevel["EMERGENCY"] = 1] = "EMERGENCY";
    LogLevel[LogLevel["ALERT"] = 2] = "ALERT";
    LogLevel[LogLevel["CRITICAL"] = 3] = "CRITICAL";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["WARNING"] = 5] = "WARNING";
    LogLevel[LogLevel["NOTICE"] = 6] = "NOTICE";
    LogLevel[LogLevel["INFO"] = 7] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 8] = "DEBUG";
    LogLevel[LogLevel["ALL"] = 9] = "ALL";
})(LogLevel || (LogLevel = {}));

export { LogLevel };
