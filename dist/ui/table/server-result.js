/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
var ServerResult = /** @class */ (function () {
    function ServerResult() {
        /**
         * Unique identifier of the result.
         */
        this.id = ++ServerResult.MaxId;
        /**
         * Array of items to show.
         */
        this.items = [];
    }
    ServerResult.MaxId = 0;
    return ServerResult;
}());

export { ServerResult };
