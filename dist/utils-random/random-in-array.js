/*!
 * Banquette UtilsRandom v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { randomInt } from './random-int.js';

/**
 * Return a random element from an array.
 */
function randomInArray(arr) {
    return arr[randomInt(0, arr.length - 1)];
}

export { randomInArray };
