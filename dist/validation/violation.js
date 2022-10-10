/*!
 * Banquette Validation v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
var Violation = /** @class */ (function () {
    function Violation(path, type, message) {
        this.path = path;
        this.type = type;
        this.message = message;
    }
    return Violation;
}());

export { Violation };
