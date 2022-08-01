import { fixedDigits } from "@banquette/utils-string/fixed-digits";

/**
 * Convert a Date object into a datetime string.
 */
export function toDateTime(date: Date) {
    return date.getFullYear() + "-" +
        fixedDigits(1 + date.getMonth(), 2) + "-" +
        fixedDigits(date.getDate(), 2) + " " +
        fixedDigits(date.getHours(), 2) + ":" +
        fixedDigits(date.getMinutes(), 2) + ":" +
        fixedDigits(date.getSeconds(), 2);
};
