import { ConfigurationService } from "@banquette/config";
import { Inject, Service } from "@banquette/dependency-injection";
import { FingerprintService } from "@banquette/fingerprint";
import { StorageService } from "@banquette/storage";
import { noop, proxy } from "@banquette/utils-misc";
import { extend } from "@banquette/utils-object";
import { getCaller } from "@banquette/utils-reflection";
import { ensureArray, ensureSerializable, ensureString, isArray, isNullOrUndefined, isUndefined } from "@banquette/utils-type";
import { LogLevel } from './constants';
import { LogMessageInterface } from "./log-message.interface";
import { LoggerInterface } from "./logger.interface";

@Service()
export class LoggerService implements LoggerInterface {
    /**
     * Whole list of logs.
     */
    private logs!: LogMessageInterface[];

    /**
     * Logs that are waiting for the "logs" array to be loaded before being added to it.
     * Logs only transit here when the logger is loading the logs from the storage.
     */
    private logsQueue: LogMessageInterface[] = [];

    /**
     * Hold the promise returned by the load() method, in case multiple calls
     * are made before it can resolve.
     */
    private loadingPromise!: Promise<LogMessageInterface[]>|null;

    /**
     * True if persist() have been called and the processing is not finished yet.
     */
    private isPersisting: boolean = false;

    /**
     * True if persist() have been called while "isPersisting" is true.
     */
    private isWaitingForPersist: boolean = false;

    /**
     * Define the maximum log level to log.
     * The more critical the log, the lower the level.
     *
     * You can use LogLevel.ALL or LogLevel.NONE to easily capture all or none of the logs.
     */
    private maxLevel!: LogLevel;

    /**
     * A unique string identifying the visitor.
     * Can be null if the generator failed to generate a fingerprint.
     */
    private fingerprint!: string|null;

    constructor(@Inject(StorageService) private storage: StorageService,
                @Inject(ConfigurationService) private config: ConfigurationService,
                @Inject(FingerprintService) private fingerprintGenerator: FingerprintService) {
        this.listen(config.get('log.level'));
    }

    /**
     * Set the logger to listen a certain log level.
     * By default all log are registered but you can limit this using this method.
     *
     * If set for example to LogLevel.ERROR, only LogLevel.ERROR, LogLevel.CRITICAL, LogLevel.ALERT and
     * LogLevel.EMERGENCY logs will be recorded.
     */
    public listen(level: LogLevel): void {
        this.maxLevel = level;
    }

    /**
     * System is unusable.
     * This should trigger the SMS alerts and wake you up.
     */
    public emergency(message: string, context?:Record<string, any>): void {
        this.log(LogLevel.EMERGENCY, message, context);
    }

    /**
     * Action must be taken immediately.
     *
     * Example: Entire website down, database unavailable, etc. This should
     * trigger the SMS alerts and wake you up.
     */
    public alert(message: string, context?:Record<string, any>): void {
        this.log(LogLevel.ALERT, message, context);
    }

    /**
     * Critical conditions.
     *
     * Example: Application component unavailable, unexpected exception.
     */
    public critical(message: string, context?:Record<string, any>): void {
        this.log(LogLevel.CRITICAL, message, context);
    }

    /**
     * Runtime errors that do not require immediate action but should typically
     * be logged and monitored.
     */
    public error(message: string, context?:Record<string, any>): void {
        this.log(LogLevel.ERROR, message, context);
    }

    /**
     * Exceptional occurrences that are not errors.
     *
     * Example: Use of deprecated APIs, poor use of an API, undesirable things
     * that are not necessarily wrong.
     */
    public warning(message: string, context?:Record<string, any>): void {
        this.log(LogLevel.WARNING, message, context);
    }

    /**
     * Normal but significant events.
     */
    public notice(message: string, context?:Record<string, any>): void {
        this.log(LogLevel.NOTICE, message, context);
    }

    /**
     * Interesting events.
     *
     * Example: User logs in, SQL logs.
     */
    public info(message: string, context?:Record<string, any>): void {
        this.log(LogLevel.INFO, message, context);
    }

    /**
     * Detailed debug information.
     */
    public debug(message: string, context?:Record<string, any>): void {
        this.log(LogLevel.DEBUG, message, context);
    }

    /**
     * Logs with an arbitrary level.
     */
    public log(level: LogLevel, message: string, context?:Record<string, any>): void {
        if (level > this.maxLevel) {
            return ;
        }
        this.improveContext(context).then((newContext: Record<string, any>) => {
            const log: LogMessageInterface = {
                level,
                message: LoggerService.resolveMessagePlaceholders(message, newContext),
                context: ensureSerializable(newContext, 5)
            };
            this.register(log);
            if (this.config.get('env') === 'dev') {
                if (log.level <= LogLevel.ERROR) {
                    console.error(log.message);
                } else if (log.level === LogLevel.WARNING) {
                    console.warn(log.message);
                } else {
                    console.log(log.message);
                }
            }
        }).catch(noop);
    }

    /**
     * Save a log locally.
     */
    private register(log: LogMessageInterface): void {
        // If logs is undefined, it means they have not yet been loaded from the storage.
        if (!this.isLoaded()) {
            this.logsQueue.push(log);
            this.load().catch(noop).finally(proxy(this.persist, this));
        } else {
            this.logs.push(log);
            this.persist();
        }
    }

    /**
     * Clear the logs.
     */
    public clear(): void {
        this.logs = [];
        this.logsQueue = [];
        this.storage.remove(this.config.get('log.storageKey')).catch(noop);
    }

    /**
     * Get all logs including non yet persisted ones.
     */
    public async getAll(): Promise<LogMessageInterface[]> {
        if (this.isLoaded()) {
            return this.logs;
        }
        return await this.load();
    }

    /**
     * Check if existing logs have been loaded from the storage.
     */
    private isLoaded(): boolean {
        return isArray(this.logs);
    }

    /**
     * Load existing logs from the storage.
     *
     * The loading can never fail.
     * If an error occurs when trying to fetch the logs or to decode the result, the error is ignored and
     * an empty array will be sent as a result.
     *
     * Logs are an optional feature, a debug feature.
     */
    private load(): Promise<LogMessageInterface[]> {
        if (!isNullOrUndefined(this.loadingPromise)) {
            return this.loadingPromise;
        }
        this.loadingPromise = new Promise<LogMessageInterface[]>((resolve) => {
            this.storage.get(this.config.get('log.storageKey')).then((logs: LogMessageInterface[]|null) => {
                this.logs = ensureArray(logs);
            }).catch(() => {
                this.logs = [];
            }).finally(() => {
                this.loadingPromise = null;
                this.logs = this.logs.concat(this.logsQueue);
                this.logsQueue = [];
                resolve(this.logs);
            });
        });
        return this.loadingPromise;
    }

    /**
     * Write the current logs into the storage.
     */
    private persist(): void {
        if (!this.isLoaded()) {
            return ;
        }
        if (this.isPersisting) {
            this.isWaitingForPersist = true;
            return ;
        }
        this.isPersisting = true;
        if (this.logs.length > this.config.get<number>('log.maximumCount')) {
            this.logs = this.logs.splice(-this.config.get<number>('log.maximumCount'));
        }
        this.storage.set(this.config.get('log.storageKey'), this.logs).catch(noop).finally(() => {
            this.isPersisting = false;
            if (this.isWaitingForPersist) {
                this.isWaitingForPersist = false;
                this.persist();
            }
        });
    }

    /**
     * Add some data to the context to better understand where it comes from.
     *
     * This includes:
     *   - a fingerprint of the visitor (key "_fp")
     *   - the caller function/method name (key "_caller")
     */
    private improveContext(context?: Record<string, any>): Promise<Record<string, any>> {
        // That must be done before anything asynchronous of the callstack will be lost.
        // That's the reason why the processing is split into 2 methods (improveContext and improveContextSync).
        const caller = getCaller(/^LoggerService/);
        return new Promise<Record<string, any>>((resolve, reject) => {
            this.improveContextAsync(extend({_caller: caller}, context || {})).then(resolve, reject);
        });
    }

    /**
     * Allow for asynchronous processing when "improving" the context.
     *
     * This includes:
     *   - a fingerprint of the visitor (key "_fp")
     */
    private async improveContextAsync(context: Record<string, any>): Promise<Record<string, any>> {
        if (isUndefined(this.fingerprint)) {
            try {
                this.fingerprint = await this.fingerprintGenerator.getFingerprint();
            } catch (e) {
                this.fingerprint = null;
            }
        }
        return extend({_fp: this.fingerprint}, context);
    }

    /**
     * Replace all the placeholders (like {foo}, {bar}) found in the message.
     */
    private static resolveMessagePlaceholders(message: string, context: Record<string, any>): string {
        // Because most of the time we may not have any placeholder, do a fast check to avoid doing useless extra work.
        if (message.indexOf('{') < 0) {
            return message;
        }
        // If we found a "{" we MAY have placeholders.
        let output: string = message, match;
        const regex = new RegExp('{([a-z]\\w*)}', 'ig');
        while ((match = regex.exec(message)) !== null) {
            const replacement = ensureString(context[match[1]]);
            output = output.replace(match[0], replacement);
        }
        return output;
    }
}
