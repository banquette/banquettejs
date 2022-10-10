/*!
 * Banquette Log v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var configuration_service = require('@banquette/config/_cjs/dev/config/configuration.service');
var inject_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/inject.decorator');
var service_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/service.decorator');
var fingerprint_service = require('@banquette/fingerprint/_cjs/dev/fingerprint.service');
var storage_service = require('@banquette/storage/_cjs/dev/storage.service');
var noop = require('@banquette/utils-misc/_cjs/dev/noop');
var proxy = require('@banquette/utils-misc/_cjs/dev/proxy');
var extend = require('@banquette/utils-object/_cjs/dev/extend');
var getCaller = require('@banquette/utils-reflection/_cjs/dev/get-caller');
var ensureArray = require('@banquette/utils-type/_cjs/dev/ensure-array');
var ensureSerializable = require('@banquette/utils-type/_cjs/dev/ensure-serializable');
var ensureString = require('@banquette/utils-type/_cjs/dev/ensure-string');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isNullOrUndefined = require('@banquette/utils-type/_cjs/dev/is-null-or-undefined');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var constants = require('./constants.js');

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
        this.log(constants.LogLevel.EMERGENCY, message, context);
    };
    /**
     * Action must be taken immediately.
     *
     * Example: Entire website down, database unavailable, etc. This should
     * trigger the SMS alerts and wake you up.
     */
    LoggerService.prototype.alert = function (message, context) {
        this.log(constants.LogLevel.ALERT, message, context);
    };
    /**
     * Critical conditions.
     *
     * Example: Application component unavailable, unexpected exception.
     */
    LoggerService.prototype.critical = function (message, context) {
        this.log(constants.LogLevel.CRITICAL, message, context);
    };
    /**
     * Runtime errors that do not require immediate action but should typically
     * be logged and monitored.
     */
    LoggerService.prototype.error = function (message, context) {
        this.log(constants.LogLevel.ERROR, message, context);
    };
    /**
     * Exceptional occurrences that are not errors.
     *
     * Example: Use of deprecated APIs, poor use of an API, undesirable things
     * that are not necessarily wrong.
     */
    LoggerService.prototype.warning = function (message, context) {
        this.log(constants.LogLevel.WARNING, message, context);
    };
    /**
     * Normal but significant events.
     */
    LoggerService.prototype.notice = function (message, context) {
        this.log(constants.LogLevel.NOTICE, message, context);
    };
    /**
     * Interesting events.
     *
     * Example: User logs in, SQL logs.
     */
    LoggerService.prototype.info = function (message, context) {
        this.log(constants.LogLevel.INFO, message, context);
    };
    /**
     * Detailed debug information.
     */
    LoggerService.prototype.debug = function (message, context) {
        this.log(constants.LogLevel.DEBUG, message, context);
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
                context: ensureSerializable.ensureSerializable(newContext, 5)
            };
            _this.register(log);
            if (_this.config.get('env') === 'dev') {
                if (log.level <= constants.LogLevel.ERROR) {
                    console.error(log.message);
                }
                else if (log.level === constants.LogLevel.WARNING) {
                    console.warn(log.message);
                }
                else {
                    console.log(log.message);
                }
            }
        }).catch(noop.noop);
    };
    /**
     * Save a log locally.
     */
    LoggerService.prototype.register = function (log) {
        // If logs is undefined, it means they have not yet been loaded from the storage.
        if (!this.isLoaded()) {
            this.logsQueue.push(log);
            this.load().catch(noop.noop).finally(proxy.proxy(this.persist, this));
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
        this.storage.remove(this.config.get('log.storageKey')).catch(noop.noop);
    };
    /**
     * Get all logs including non yet persisted ones.
     */
    LoggerService.prototype.getAll = function () {
        return _tslib.__awaiter(this, void 0, void 0, function () {
            return _tslib.__generator(this, function (_a) {
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
        return isArray.isArray(this.logs);
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
        if (!isNullOrUndefined.isNullOrUndefined(this.loadingPromise)) {
            return this.loadingPromise;
        }
        this.loadingPromise = new Promise(function (resolve) {
            _this.storage.get(_this.config.get('log.storageKey')).then(function (logs) {
                _this.logs = ensureArray.ensureArray(logs);
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
        this.storage.set(this.config.get('log.storageKey'), this.logs).catch(noop.noop).finally(function () {
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
        var caller = getCaller.getCaller(/^LoggerService/);
        return new Promise(function (resolve, reject) {
            _this.improveContextAsync(extend.extend({ _caller: caller }, context || {})).then(resolve, reject);
        });
    };
    /**
     * Allow for asynchronous processing when "improving" the context.
     *
     * This includes:
     *   - a fingerprint of the visitor (key "_fp")
     */
    LoggerService.prototype.improveContextAsync = function (context) {
        return _tslib.__awaiter(this, void 0, void 0, function () {
            var _a;
            return _tslib.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!isUndefined.isUndefined(this.fingerprint)) { return [3 /*break*/, 4]; }
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
                    case 4: return [2 /*return*/, extend.extend({ _fp: this.fingerprint }, context)];
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
            var replacement = ensureString.ensureString(context[match[1]]);
            output = output.replace(match[0], replacement);
        }
        return output;
    };
    var LoggerService_1;
    LoggerService = LoggerService_1 = _tslib.__decorate([
        service_decorator.Service(),
        _tslib.__param(0, inject_decorator.Inject(storage_service.StorageService)),
        _tslib.__param(1, inject_decorator.Inject(configuration_service.ConfigurationService)),
        _tslib.__param(2, inject_decorator.Inject(fingerprint_service.FingerprintService)),
        _tslib.__metadata("design:paramtypes", [storage_service.StorageService,
            configuration_service.ConfigurationService,
            fingerprint_service.FingerprintService])
    ], LoggerService);
    return LoggerService;
}());

exports.LoggerService = LoggerService;
