/*!
 * Banquette Log v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __awaiter, __decorate, __param, __metadata, __generator } from './_virtual/_tslib.js';
import { ConfigurationService } from '@banquette/config/config/configuration.service';
import { Inject } from '@banquette/dependency-injection/decorator/inject.decorator';
import { Service } from '@banquette/dependency-injection/decorator/service.decorator';
import { FingerprintService } from '@banquette/fingerprint/fingerprint.service';
import { StorageService } from '@banquette/storage/storage.service';
import { noop } from '@banquette/utils-misc/noop';
import { proxy } from '@banquette/utils-misc/proxy';
import { extend } from '@banquette/utils-object/extend';
import { getCaller } from '@banquette/utils-reflection/get-caller';
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { ensureSerializable } from '@banquette/utils-type/ensure-serializable';
import { ensureString } from '@banquette/utils-type/ensure-string';
import { isArray } from '@banquette/utils-type/is-array';
import { isNullOrUndefined } from '@banquette/utils-type/is-null-or-undefined';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { LogLevel } from './constants.js';

var LoggerService = /** @class */ (function () {
    function LoggerService(storage, config, fingerprintGenerator) {
        this.storage = storage;
        this.config = config;
        this.fingerprintGenerator = fingerprintGenerator;
        /**
         * Logs that are waiting for the "logs" array to be loaded before being added to it.
         * Logs only transit here when the logger is loading the logs from the storage.
         */
        this.logsQueue = [];
        /**
         * True if persist() have been called and the processing is not finished yet.
         */
        this.isPersisting = false;
        /**
         * True if persist() have been called while "isPersisting" is true.
         */
        this.isWaitingForPersist = false;
        this.listen(config.get('log.level'));
    }
    LoggerService_1 = LoggerService;
    /**
     * Set the logger to listen a certain log level.
     * By default all log are registered but you can limit this using this method.
     *
     * If set for example to LogLevel.ERROR, only LogLevel.ERROR, LogLevel.CRITICAL, LogLevel.ALERT and
     * LogLevel.EMERGENCY logs will be recorded.
     */
    LoggerService.prototype.listen = function (level) {
        this.maxLevel = level;
    };
    /**
     * System is unusable.
     * This should trigger the SMS alerts and wake you up.
     */
    LoggerService.prototype.emergency = function (message, context) {
        this.log(LogLevel.EMERGENCY, message, context);
    };
    /**
     * Action must be taken immediately.
     *
     * Example: Entire website down, database unavailable, etc. This should
     * trigger the SMS alerts and wake you up.
     */
    LoggerService.prototype.alert = function (message, context) {
        this.log(LogLevel.ALERT, message, context);
    };
    /**
     * Critical conditions.
     *
     * Example: Application component unavailable, unexpected exception.
     */
    LoggerService.prototype.critical = function (message, context) {
        this.log(LogLevel.CRITICAL, message, context);
    };
    /**
     * Runtime errors that do not require immediate action but should typically
     * be logged and monitored.
     */
    LoggerService.prototype.error = function (message, context) {
        this.log(LogLevel.ERROR, message, context);
    };
    /**
     * Exceptional occurrences that are not errors.
     *
     * Example: Use of deprecated APIs, poor use of an API, undesirable things
     * that are not necessarily wrong.
     */
    LoggerService.prototype.warning = function (message, context) {
        this.log(LogLevel.WARNING, message, context);
    };
    /**
     * Normal but significant events.
     */
    LoggerService.prototype.notice = function (message, context) {
        this.log(LogLevel.NOTICE, message, context);
    };
    /**
     * Interesting events.
     *
     * Example: User logs in, SQL logs.
     */
    LoggerService.prototype.info = function (message, context) {
        this.log(LogLevel.INFO, message, context);
    };
    /**
     * Detailed debug information.
     */
    LoggerService.prototype.debug = function (message, context) {
        this.log(LogLevel.DEBUG, message, context);
    };
    /**
     * Logs with an arbitrary level.
     */
    LoggerService.prototype.log = function (level, message, context) {
        var _this = this;
        if (level > this.maxLevel) {
            return;
        }
        this.improveContext(context).then(function (newContext) {
            var log = {
                level: level,
                message: LoggerService_1.resolveMessagePlaceholders(message, newContext),
                context: ensureSerializable(newContext, 5)
            };
            _this.register(log);
            if (_this.config.get('env') === 'dev') {
                if (log.level <= LogLevel.ERROR) {
                    console.error(log.message);
                }
                else if (log.level === LogLevel.WARNING) {
                    console.warn(log.message);
                }
                else {
                    console.log(log.message);
                }
            }
        }).catch(noop);
    };
    /**
     * Save a log locally.
     */
    LoggerService.prototype.register = function (log) {
        // If logs is undefined, it means they have not yet been loaded from the storage.
        if (!this.isLoaded()) {
            this.logsQueue.push(log);
            this.load().catch(noop).finally(proxy(this.persist, this));
        }
        else {
            this.logs.push(log);
            this.persist();
        }
    };
    /**
     * Clear the logs.
     */
    LoggerService.prototype.clear = function () {
        this.logs = [];
        this.logsQueue = [];
        this.storage.remove(this.config.get('log.storageKey')).catch(noop);
    };
    /**
     * Get all logs including non yet persisted ones.
     */
    LoggerService.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isLoaded()) {
                            return [2 /*return*/, this.logs];
                        }
                        return [4 /*yield*/, this.load()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Check if existing logs have been loaded from the storage.
     */
    LoggerService.prototype.isLoaded = function () {
        return isArray(this.logs);
    };
    /**
     * Load existing logs from the storage.
     *
     * The loading can never fail.
     * If an error occurs when trying to fetch the logs or to decode the result, the error is ignored and
     * an empty array will be sent as a result.
     *
     * Logs are an optional feature, a debug feature.
     */
    LoggerService.prototype.load = function () {
        var _this = this;
        if (!isNullOrUndefined(this.loadingPromise)) {
            return this.loadingPromise;
        }
        this.loadingPromise = new Promise(function (resolve) {
            _this.storage.get(_this.config.get('log.storageKey')).then(function (logs) {
                _this.logs = ensureArray(logs);
            }).catch(function () {
                _this.logs = [];
            }).finally(function () {
                _this.loadingPromise = null;
                _this.logs = _this.logs.concat(_this.logsQueue);
                _this.logsQueue = [];
                resolve(_this.logs);
            });
        });
        return this.loadingPromise;
    };
    /**
     * Write the current logs into the storage.
     */
    LoggerService.prototype.persist = function () {
        var _this = this;
        if (!this.isLoaded()) {
            return;
        }
        if (this.isPersisting) {
            this.isWaitingForPersist = true;
            return;
        }
        this.isPersisting = true;
        if (this.logs.length > this.config.get('log.maximumCount')) {
            this.logs = this.logs.splice(-this.config.get('log.maximumCount'));
        }
        this.storage.set(this.config.get('log.storageKey'), this.logs).catch(noop).finally(function () {
            _this.isPersisting = false;
            if (_this.isWaitingForPersist) {
                _this.isWaitingForPersist = false;
                _this.persist();
            }
        });
    };
    /**
     * Add some data to the context to better understand where it comes from.
     *
     * This includes:
     *   - a fingerprint of the visitor (key "_fp")
     *   - the caller function/method name (key "_caller")
     */
    LoggerService.prototype.improveContext = function (context) {
        var _this = this;
        // That must be done before anything asynchronous of the callstack will be lost.
        // That's the reason why the processing is split into 2 methods (improveContext and improveContextSync).
        var caller = getCaller(/^LoggerService/);
        return new Promise(function (resolve, reject) {
            _this.improveContextAsync(extend({ _caller: caller }, context || {})).then(resolve, reject);
        });
    };
    /**
     * Allow for asynchronous processing when "improving" the context.
     *
     * This includes:
     *   - a fingerprint of the visitor (key "_fp")
     */
    LoggerService.prototype.improveContextAsync = function (context) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!isUndefined(this.fingerprint)) { return [3 /*break*/, 4]; }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.fingerprintGenerator.getFingerprint()];
                    case 2:
                        _a.fingerprint = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _b.sent();
                        this.fingerprint = null;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, extend({ _fp: this.fingerprint }, context)];
                }
            });
        });
    };
    /**
     * Replace all the placeholders (like {foo}, {bar}) found in the message.
     */
    LoggerService.resolveMessagePlaceholders = function (message, context) {
        // Because most of the time we may not have any placeholder, do a fast check to avoid doing useless extra work.
        if (message.indexOf('{') < 0) {
            return message;
        }
        // If we found a "{" we MAY have placeholders.
        var output = message, match;
        var regex = new RegExp('{([a-z]\\w*)}', 'ig');
        while ((match = regex.exec(message)) !== null) {
            var replacement = ensureString(context[match[1]]);
            output = output.replace(match[0], replacement);
        }
        return output;
    };
    var LoggerService_1;
    LoggerService = LoggerService_1 = __decorate([
        Service(),
        __param(0, Inject(StorageService)),
        __param(1, Inject(ConfigurationService)),
        __param(2, Inject(FingerprintService)),
        __metadata("design:paramtypes", [StorageService,
            ConfigurationService,
            FingerprintService])
    ], LoggerService);
    return LoggerService;
}());

export { LoggerService };
