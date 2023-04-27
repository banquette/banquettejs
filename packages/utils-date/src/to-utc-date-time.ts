import { fixedDigits } from '@banquette/utils-string';

/**
 * Convert a Date object into a UTC datetime string.
 */
export function toUTCDateTime(date: Date) {
    return (
        date.getUTCFullYear() +
        '-' +
        fixedDigits(1 + date.getUTCMonth(), 2) +
        '-' +
        fixedDigits(date.getUTCDate(), 2) +
        ' ' +
        fixedDigits(date.getUTCHours(), 2) +
        ':' +
        fixedDigits(date.getUTCMinutes(), 2) +
        ':' +
        fixedDigits(date.getUTCSeconds(), 2)
    );
}
