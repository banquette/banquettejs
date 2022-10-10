/**
 * Return a promise that is resolved on the next the next render cycle.
 */
export declare function waitForNextCycle(): Promise<void>;
/**
 * Return a promise that is resolved after a certain delay (in ms).
 */
export declare function waitForDelay(duration: number): Promise<void>;
