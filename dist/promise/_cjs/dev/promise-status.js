/*!
 * Banquette Promise v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

exports.PromiseStatus = void 0;
(function (PromiseStatus) {
    /**
     * When the promise operation has finished successfully.
     */
    PromiseStatus["Fulfilled"] = "Fulfilled";
    /**
     * When the promise operation failed to execute.
     */
    PromiseStatus["Rejected"] = "Rejected";
    /**
     * When the promise operation is neither fulfilled nor rejected.
     */
    PromiseStatus["Pending"] = "Pending";
})(exports.PromiseStatus || (exports.PromiseStatus = {}));
