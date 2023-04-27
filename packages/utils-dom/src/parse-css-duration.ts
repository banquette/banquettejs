import { ensureNumber, isString } from '@banquette/utils-type';

/**
 * Parse a css duration into a number of milliseconds.
 */
export function parseCssDuration(input: any): number {
    if (isString(input)) {
        let asNum = parseFloat(input);
        if (input.match(/[^m]s\s*$/)) {
            asNum *= 1000;
        }
        return asNum;
    }
    return ensureNumber(input);
}
