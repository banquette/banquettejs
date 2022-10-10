/*!
 * Banquette UtilsDate v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { fixedDigits } from '@banquette/utils-string/fixed-digits';

/**
 * Convert a Date object into a UTC datetime string.
 */
function toUTCDateTime(date) {
    return date.getUTCFullYear() + "-" +
        fixedDigits(1 + date.getUTCMonth(), 2) + "-" +
        fixedDigits(date.getUTCDate(), 2) + " " +
        fixedDigits(date.getUTCHours(), 2) + ":" +
        fixedDigits(date.getUTCMinutes(), 2) + ":" +
        fixedDigits(date.getUTCSeconds(), 2);
}

export { toUTCDateTime };
