/*!
 * Banquette UtilsMisc v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __awaiter, __generator } from './_virtual/_tslib.js';

/**
 * Return a promise that is resolved on the next the next render cycle.
 */
function waitForNextCycle() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, waitForDelay(0)];
        });
    });
}
/**
 * Return a promise that is resolved after a certain delay (in ms).
 */
function waitForDelay(duration) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    setTimeout(resolve, duration);
                })];
        });
    });
}

export { waitForDelay, waitForNextCycle };
