/*!
 * Banquette UtilsRandom v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Generates a random integer between two values.
 */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export { randomInt };
