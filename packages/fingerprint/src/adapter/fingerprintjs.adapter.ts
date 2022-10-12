import { Service } from "@banquette/dependency-injection/decorator/service.decorator";
import { isServer } from "@banquette/utils-misc/is-server";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { FingerprintGeneratorInvalidScriptException } from "../exception/fingerprint-generator-invalid-script.exception";
import { FingerprintGeneratorScriptTimeoutException } from "../exception/fingerprint-generator-script-timeout.exception";
import { AdapterInterface } from "./adapter.interface";
import { AdapterTag } from "../constant";

@Service(AdapterTag)
export class FingerprintjsAdapter implements AdapterInterface {
    /**
     * Maximum time to wait for the detection script to load.
     */
    private static ScriptLoadTimeout: number = 5000;

    /**
     * Test if the adapter is available in the current configuration.
     */
    public generateFingerprint(): Promise<string> {
        return new Promise((resolve, reject) => {
            if (isServer()) {
                resolve('sever');
                return ;
            }
            let timeoutId: number|NodeJS.Timeout|null = null;
            const script = document.createElement('script');
            const onLoad = () => {
                if (timeoutId !== null) {
                    clearTimeout(timeoutId);
                }
                if (isUndefined((window as any).FingerprintJS)) {
                    return void reject(new FingerprintGeneratorInvalidScriptException('FingerprintJS not found after importing the script.'));
                }
                const generator: {load: () => Promise<{get: () => Promise<{visitorId: string}>}>} = (window as any).FingerprintJS;
                generator.load().then((fp) => {
                    fp.get().then((result: {visitorId: string}) => {
                        resolve(result.visitorId);
                    }).catch(reject);
                }).catch(reject);
            };
            timeoutId = setTimeout(() => {
                script.removeEventListener('load', onLoad);
                reject(new FingerprintGeneratorScriptTimeoutException('Failed to load FingerprintJS (timeout reached).'));
            }, FingerprintjsAdapter.ScriptLoadTimeout);
            script.src = '//cdn.jsdelivr.net/npm/@fingerprintjs/fingerprintjs@3/dist/fp.min.js';
            script.addEventListener('load', onLoad);
            document.head.appendChild(script);
        });
    }
}
