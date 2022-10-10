/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

exports.ServerResult = ServerResult;
