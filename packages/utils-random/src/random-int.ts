/**
 * Generates a random integer between two values.
 */
export function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
