import { twoDigits } from "./utils";

/**
 * Convert a Date object into a UTC datetime string.
 */
export function toUTCDateTime(date: Date) {
    return date.getUTCFullYear() + "-" +
        twoDigits(1 + date.getUTCMonth()) + "-" +
        twoDigits(date.getUTCDate()) + " " +
        twoDigits(date.getUTCHours()) + ":" +
        twoDigits(date.getUTCMinutes()) + ":" +
        twoDigits(date.getUTCSeconds());
};
