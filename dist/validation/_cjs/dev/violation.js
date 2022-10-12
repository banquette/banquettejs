/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Violation = /** @class */ (function () {
    function Violation(path, type, message) {
        this.path = path;
        this.type = type;
        this.message = message;
    }
    return Violation;
}());

exports.Violation = Violation;