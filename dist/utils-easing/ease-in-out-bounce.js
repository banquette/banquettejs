/*!
 * Banquette UtilsEasing v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { easeInBounce } from './ease-in-bounce.js';
import { easeOutBounce } from './ease-out-bounce.js';

// Bounce in and bounce out
function easeInOutBounce(t) {
    if (t < 0.5) {
        return easeInBounce(t * 2) * 0.5;
    }
    return (easeOutBounce((t * 2) - 1) * 0.5) + 0.5;
}

export { easeInOutBounce };
