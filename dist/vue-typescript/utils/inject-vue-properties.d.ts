/**
 * These properties are set by the exportHelper of vue-loader after __vccOpts has been created.
 *
 * The problem is that we'll have to create __vccOpts multiple times out of the exportHelper,
 * so these additional properties will not be present.
 *
 * So the trick is to save the object generated by the first call, because we know exportHelper will add what's missing.
 *
 * Then for subsequent calls we'll just have to copy the values from the first object into the current one.
 */
export declare function injectVueProperties(source: any, target: any): void;