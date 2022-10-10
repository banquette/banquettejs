/*!
 * Banquette UtilsDate v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { fixedDigits } from '@banquette/utils-string/fixed-digits';

/**
 * Convert a Date object into a datetime string.
 */
function toDateTime(date) {
    return date.getFullYear() + "-" +
        fixedDigits(1 + date.getMonth(), 2) + "-" +
        fixedDigits(date.getDate(), 2) + " " +
        fixedDigits(date.getHours(), 2) + ":" +
        fixedDigits(date.getMinutes(), 2) + ":" +
        fixedDigits(date.getSeconds(), 2);
}

export { toDateTime };
