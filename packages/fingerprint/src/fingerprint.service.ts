import { InjectMultiple, Inject, Service } from "@banquette/dependency-injection";
import { Exception, ExceptionFactory, UsageException } from "@banquette/exception";
import { StorageService } from "@banquette/storage";
import { noop } from "@banquette/utils-misc";
import { isNullOrUndefined } from "@banquette/utils-type";
import { AdapterInterface } from "./adapter/adapter.interface";
import './adapter/fingerprintjs.adapter';
import { AdapterTag } from "./constant";

@Service()
export class FingerprintService {
    /**
     * Name of the key to use to store the fingerprint in cache.
     * "efp" stands for: banquette-fingerprint
     */
    private static StorageKey: string = 'efp';

    /**
     * In case multiple calls are made to getFingerprint() before the promise can resolve.
     */
    private promise!: Promise<string>;

    public constructor(@Inject(StorageService) private storage: StorageService,
                       @InjectMultiple(AdapterTag) private adapters: AdapterInterface[]) {
    }

    /**
     * Generate a string that uniquely identify the current visitor.
     *
     * @param useCache boolean (optional, default: true) if true, the fingerprint can be fetched from the local storage if available.
     *                         If you NEED the fingerprint to be reliable, set it to false so a full detection is made each time,
     *                         comes with a huge performance cost.
     */
    public getFingerprint(useCache: boolean = true): Promise<string> {
        if (isNullOrUndefined(this.promise)) {
            this.promise = new Promise<string>(async (resolve, reject) => {
                if (useCache) {
                    const fingerprint = await this.storage.get(FingerprintService.StorageKey);
                    if (fingerprint) {
                        return void resolve(fingerprint);
                    }
                }
                try {
                    const fingerprint = await this.generateFingerprint();
                    if (useCache) {
                        this.storage.set(FingerprintService.StorageKey, fingerprint).catch(noop); // Not much we can do if an error occurs.
                    }
                    resolve(fingerprint);
                } catch (e) {
                    reject(ExceptionFactory.EnsureException(e));
                }
            });
        }
        return this.promise;
    }

    /**
     * Try to generate the fingerprint by loading FingerprintJS dynamically.
     */
    private async generateFingerprint(): Promise<string> {
        // This single exception will be used to create an error stack containing the errors
        // of all the adapters using the "previous" attribute.
        // The exception will only throw if no adapter succeeded.
        let exception: Exception|null = null;
        for (const adapter of this.adapters) {
            try {
                return await adapter.generateFingerprint();
            } catch (e) {
                exception = ExceptionFactory.EnsureException(e, 'Adapter failed for an unknown reason.', exception);
            }
        }
        if (exception) {
            throw exception;
        }
        throw new UsageException(
            'No fingerprint adapter has been defined. '+
            'Please define at least one adapter by registering it in the container using the "AdapterInterfaceSymbol" symbol.'
        );
    }
}
