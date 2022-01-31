import { Service } from "@banquette/dependency-injection/decorator/service.decorator";
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
            let timeoutId: number = -1;
            const script = document.createElement('script');
            const onLoad = () => {
                window.clearTimeout(timeoutId);
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
            timeoutId = window.setTimeout(() => {
                script.removeEventListener('load', onLoad);
                reject(new FingerprintGeneratorScriptTimeoutException('Failed to load FingerprintJS (timeout reached).'));
            }, FingerprintjsAdapter.ScriptLoadTimeout);
            script.src = '//cdn.jsdelivr.net/npm/@fingerprintjs/fingerprintjs@3/dist/fp.min.js';
            script.addEventListener('load', onLoad);
            document.head.appendChild(script);
        });
    }
}
