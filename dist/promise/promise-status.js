/*!
 * Banquette Promise v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
var PromiseStatus;
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
})(PromiseStatus || (PromiseStatus = {}));

export { PromiseStatus };
