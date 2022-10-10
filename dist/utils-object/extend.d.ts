/**
 * Copy values from objs into dst, optionally recursively.
 * Promises are copied as is, so they will be shared between dst and objs.
 */
export declare function extend(dst: any, objs: any, deep?: boolean): any;
