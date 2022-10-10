/*!
 * Banquette Fingerprint v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __awaiter, __decorate, __param, __metadata, __generator } from './_virtual/_tslib.js';
import { InjectMultiple } from '@banquette/dependency-injection/decorator/inject-multiple.decorator';
import { Inject } from '@banquette/dependency-injection/decorator/inject.decorator';
import { Service } from '@banquette/dependency-injection/decorator/service.decorator';
import { ExceptionFactory } from '@banquette/exception/exception.factory';
import { UsageException } from '@banquette/exception/usage.exception';
import { StorageService } from '@banquette/storage/storage.service';
import { noop } from '@banquette/utils-misc/noop';
import { isNullOrUndefined } from '@banquette/utils-type/is-null-or-undefined';
import './adapter/fingerprintjs.adapter.js';
import { AdapterTag } from './constant.js';

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
        if (isNullOrUndefined(this.promise)) {
            this.promise = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                var fingerprint, fingerprint, e_1;
                return __generator(this, function (_a) {
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
                                this.storage.set(FingerprintService_1.StorageKey, fingerprint).catch(noop); // Not much we can do if an error occurs.
                            }
                            resolve(fingerprint);
                            return [3 /*break*/, 5];
                        case 4:
                            e_1 = _a.sent();
                            reject(ExceptionFactory.EnsureException(e_1));
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
        return __awaiter(this, void 0, void 0, function () {
            var exception, _i, _a, adapter, e_2;
            return __generator(this, function (_b) {
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
                        exception = ExceptionFactory.EnsureException(e_2, 'Adapter failed for an unknown reason.', exception);
                        return [3 /*break*/, 5];
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6:
                        if (exception) {
                            throw exception;
                        }
                        throw new UsageException('No fingerprint adapter has been defined. ' +
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
    FingerprintService = FingerprintService_1 = __decorate([
        Service(),
        __param(0, Inject(StorageService)),
        __param(1, InjectMultiple(AdapterTag)),
        __metadata("design:paramtypes", [StorageService, Array])
    ], FingerprintService);
    return FingerprintService;
}());

export { FingerprintService };
