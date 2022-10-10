/**
 * Determines if a reference is an `Object`. Unlike `typeof` in JavaScript, `null`s are not
 * considered to be objects. Note that JavaScript arrays are objects.
 */
export declare function isObject(value: any, strict?: boolean): boolean;
/**
 * Test if the input is a literal object (created using the Object constructor directly).
 */
export declare function isObjectLiteral(value: any): boolean;
