/**
 * Take any input and prepare it so it can safely be encoded into a string so it can be transferred or dumped.
 *
 * This is a lossy operation, the resulting object is not intended to be used as the original one.
 *
 * The original object is not affected.
 */
export declare function ensureSerializable(input: any, maxDepth?: number, onlyTraversePojo?: boolean): any;
