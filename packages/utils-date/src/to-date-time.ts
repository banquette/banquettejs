import { twoDigits } from "./utils";

/**
 * Convert a Date object into a datetime string.
 */
export function toDateTime(date: Date) {
    return date.getFullYear() + "-" +
        twoDigits(1 + date.getMonth()) + "-" +
        twoDigits(date.getDate()) + " " +
        twoDigits(date.getHours()) + ":" +
        twoDigits(date.getMinutes()) + ":" +
        twoDigits(date.getSeconds());
};
