/*!
 * Banquette Fingerprint v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var injectMultiple_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/inject-multiple.decorator');
var inject_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/inject.decorator');
var service_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/service.decorator');
var exception_factory = require('@banquette/exception/_cjs/dev/exception.factory');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var storage_service = require('@banquette/storage/_cjs/dev/storage.service');
var noop = require('@banquette/utils-misc/_cjs/dev/noop');
var isNullOrUndefined = require('@banquette/utils-type/_cjs/dev/is-null-or-undefined');
require('./adapter/fingerprintjs.adapter.js');
var constant = require('./constant.js');

var FingerprintService = /** @class */ (function () {
    function FingerprintService(storage, adapters) {
        this.storage = storage;
        this.adapters = adapters;
    }
    FingerprintService_1 = FingerprintService;
    /**
     * Generate a string that uniquely identify the current visitor.
     *
     * @param useCache boolean (optional, default: true) if true, the fingerprint can be fetched from the local storage if available.
     *                         If you NEED the fingerprint to be reliable, set it to false so a full detection is made each time,
     *                         comes with a huge performance cost.
     */
    FingerprintService.prototype.getFingerprint = function (useCache) {
        var _this = this;
        if (useCache === void 0) { useCache = true; }
        if (isNullOrUndefined.isNullOrUndefined(this.promise)) {
            this.promise = new Promise(function (resolve, reject) { return _tslib.__awaiter(_this, void 0, void 0, function () {
                var fingerprint, fingerprint, e_1;
                return _tslib.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!useCache) { return [3 /*break*/, 2]; }
                            return [4 /*yield*/, this.storage.get(FingerprintService_1.StorageKey)];
                        case 1:
                            fingerprint = _a.sent();
                            if (fingerprint) {
                                return [2 /*return*/, void resolve(fingerprint)];
                            }
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            return [4 /*yield*/, this.generateFingerprint()];
                        case 3:
                            fingerprint = _a.sent();
                            if (useCache) {
                                this.storage.set(FingerprintService_1.StorageKey, fingerprint).catch(noop.noop); // Not much we can do if an error occurs.
                            }
                            resolve(fingerprint);
                            return [3 /*break*/, 5];
                        case 4:
                            e_1 = _a.sent();
                            reject(exception_factory.ExceptionFactory.EnsureException(e_1));
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            }); });
        }
        return this.promise;
    };
    /**
     * Try to generate the fingerprint by loading FingerprintJS dynamically.
     */
    FingerprintService.prototype.generateFingerprint = function () {
        return _tslib.__awaiter(this, void 0, void 0, function () {
            var exception, _i, _a, adapter, e_2;
            return _tslib.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        exception = null;
                        _i = 0, _a = this.adapters;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) { return [3 /*break*/, 6]; }
                        adapter = _a[_i];
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, adapter.generateFingerprint()];
                    case 3: return [2 /*return*/, _b.sent()];
                    case 4:
                        e_2 = _b.sent();
                        exception = exception_factory.ExceptionFactory.EnsureException(e_2, 'Adapter failed for an unknown reason.', exception);
                        return [3 /*break*/, 5];
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6:
                        if (exception) {
                            throw exception;
                        }
                        throw new usage_exception.UsageException('No fingerprint adapter has been defined. ' +
                            'Please define at least one adapter by registering it in the container using the "AdapterInterfaceSymbol" symbol.');
                }
            });
        });
    };
    var FingerprintService_1;
    /**
     * Name of the key to use to store the fingerprint in cache.
     * "efp" stands for: banquette-fingerprint
     */
    FingerprintService.StorageKey = 'efp';
    FingerprintService = FingerprintService_1 = _tslib.__decorate([
        service_decorator.Service(),
        _tslib.__param(0, inject_decorator.Inject(storage_service.StorageService)),
        _tslib.__param(1, injectMultiple_decorator.InjectMultiple(constant.AdapterTag)),
        _tslib.__metadata("design:paramtypes", [storage_service.StorageService, Array])
    ], FingerprintService);
    return FingerprintService;
}());

exports.FingerprintService = FingerprintService;
