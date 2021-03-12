/**
 * Return a promise that is resolved on the next the next render cycle.
 */
export async function waitForNextCycle(): Promise<void> {
    return waitForDelay(0);
}

/**
 * Return a promise that is resolved after a certain delay (in ms).
 */
export async function waitForDelay(duration: number): Promise<void> {
    return new Promise<void>((resolve) => {
        window.setTimeout(resolve, duration);
    });
}
