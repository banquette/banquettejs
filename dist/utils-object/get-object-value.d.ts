/**
 * Extract a value from an object and ensure it is a string.
 * If the key is not found, the default value is returned.
 */
export declare function getObjectValueAsString(data: any, key: string, defaultValue?: string): string;
/**
 * Extract a value from an object and ensure it is a valid number.
 * If the key is not found, the default value is returned.
 */
export declare function getObjectValueAsNumber(data: any, key: string, defaultValue?: number): number;
/**
 * Extract a value from an object and ensure it is a boolean.
 * If the key is not found, the default value is returned.
 */
export declare function getObjectValueAsBoolean(data: any, key: string, defaultValue?: boolean): boolean;
/**
 * Extract a value from an object and ensure it is an array.
 * If the key is not found, the default value is returned.
 */
export declare function getObjectValueAsArray<T>(data: any, key: string, defaultValue?: any[]): any[];
/**
 * Extract a value from an object and ensure it is an object.
 * If the key is not found, the default value is returned.
 */
export declare function getObjectValueAsObject(data: any, key: string, defaultValue?: any): any;
/**
 * Try to get a value from an object and returns a default value if not found.
 * The "key" parameter can be an array for multi-dimensional search.
 * You can also write it as a string separated with "->".
 */
export declare function getObjectValue(data: any, key: string | number | Array<string | number>, defaultValue?: any): any;
/**
 * Try to find a value in an object.
 *
 * @deprecated Use getObjectValue instead.
 */
export declare function getValueInObject(data: any, search: string[], defaultValue?: any): any;
