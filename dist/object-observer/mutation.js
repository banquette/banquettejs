/*!
 * Banquette ObjectObserver v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Represent a single mutation of an observed object.
 */
var Mutation = /** @class */ (function () {
    function Mutation(
    /**
    * The type of change that has been observed.
    */
    type, 
    /**
     * Array of properties' names that form a path from the root object being observed and the attribute that mutated.
     */
    pathParts, 
    /**
     * The value of the property before the mutation.
     */
    oldValue, 
    /**
     * The value of the property after the mutation.
     */
    newValue, 
    /**
     * Object on which the change has occurred.
     */
    target) {
        this.type = type;
        this.pathParts = pathParts;
        this.oldValue = oldValue;
        this.newValue = newValue;
        this.target = target;
    }
    Object.defineProperty(Mutation.prototype, "path", {
        /**
         * The absolute path to the property, as a string.
         */
        get: function () {
            return '/' + this.pathParts.join('/');
        },
        enumerable: false,
        configurable: true
    });
    return Mutation;
}());

export { Mutation };
