/*!
 * Banquette Fingerprint v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var service_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/service.decorator');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var fingerprintGeneratorInvalidScript_exception = require('../exception/fingerprint-generator-invalid-script.exception.js');
var fingerprintGeneratorScriptTimeout_exception = require('../exception/fingerprint-generator-script-timeout.exception.js');
var constant = require('../constant.js');

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
                if (isUndefined.isUndefined(window.FingerprintJS)) {
                    return void reject(new fingerprintGeneratorInvalidScript_exception.FingerprintGeneratorInvalidScriptException('FingerprintJS not found after importing the script.'));
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
                reject(new fingerprintGeneratorScriptTimeout_exception.FingerprintGeneratorScriptTimeoutException('Failed to load FingerprintJS (timeout reached).'));
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
    FingerprintjsAdapter = FingerprintjsAdapter_1 = _tslib.__decorate([
        service_decorator.Service(constant.AdapterTag)
    ], FingerprintjsAdapter);
    return FingerprintjsAdapter;
}());

exports.FingerprintjsAdapter = FingerprintjsAdapter;
