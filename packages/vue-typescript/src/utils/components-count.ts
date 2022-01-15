let count: number = 0;

/**
 * Get the total number of components active in the page.
 */
export function getActiveComponentsCount() {
    return count;
}

/**
 * Increment the total number of active components by 1.
 */
export function incrementActiveComponentsCount() {
    count++;
}

/**
 * Decrement the total number of active components by 1.
 */
export function decrementActiveComponentsCount() {
    count--
}
