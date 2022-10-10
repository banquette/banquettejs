/*!
 * Banquette Fingerprint v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __decorate } from '../_virtual/_tslib.js';
import { Service } from '@banquette/dependency-injection/decorator/service.decorator';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { FingerprintGeneratorInvalidScriptException } from '../exception/fingerprint-generator-invalid-script.exception.js';
import { FingerprintGeneratorScriptTimeoutException } from '../exception/fingerprint-generator-script-timeout.exception.js';
import { AdapterTag } from '../constant.js';

var FingerprintjsAdapter = /** @class */ (function () {
    function FingerprintjsAdapter() {
    }
    FingerprintjsAdapter_1 = FingerprintjsAdapter;
    /**
     * Test if the adapter is available in the current configuration.
     */
    FingerprintjsAdapter.prototype.generateFingerprint = function () {
        return new Promise(function (resolve, reject) {
            var timeoutId = -1;
            var script = document.createElement('script');
            var onLoad = function () {
                window.clearTimeout(timeoutId);
                if (isUndefined(window.FingerprintJS)) {
                    return void reject(new FingerprintGeneratorInvalidScriptException('FingerprintJS not found after importing the script.'));
                }
                var generator = window.FingerprintJS;
                generator.load().then(function (fp) {
                    fp.get().then(function (result) {
                        resolve(result.visitorId);
                    }).catch(reject);
                }).catch(reject);
            };
            timeoutId = window.setTimeout(function () {
                script.removeEventListener('load', onLoad);
                reject(new FingerprintGeneratorScriptTimeoutException('Failed to load FingerprintJS (timeout reached).'));
            }, FingerprintjsAdapter_1.ScriptLoadTimeout);
            script.src = '//cdn.jsdelivr.net/npm/@fingerprintjs/fingerprintjs@3/dist/fp.min.js';
            script.addEventListener('load', onLoad);
            document.head.appendChild(script);
        });
    };
    var FingerprintjsAdapter_1;
    /**
     * Maximum time to wait for the detection script to load.
     */
    FingerprintjsAdapter.ScriptLoadTimeout = 5000;
    FingerprintjsAdapter = FingerprintjsAdapter_1 = __decorate([
        Service(AdapterTag)
    ], FingerprintjsAdapter);
    return FingerprintjsAdapter;
}());

export { FingerprintjsAdapter };
