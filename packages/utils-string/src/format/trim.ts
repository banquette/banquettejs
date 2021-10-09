
export enum TrimStrategy {
    LEFT    = 1,
    RIGHT   = 2,
    BOTH    = 4
}

/**
 * Trim a string.
 *
 * @source https://stackoverflow.com/a/55292366/1110635 (with slight modifications)
 */
export function trim(input: string, chars: string = " \n\r\t", strategy: TrimStrategy = TrimStrategy.BOTH): string {
    let start = 0;
    let end = input.length;
    let multipleChars = chars.length > 1;

    if ((strategy & TrimStrategy.LEFT) === TrimStrategy.LEFT) {
        while (start < end && (!multipleChars && input[start] === chars) || (multipleChars && chars.indexOf(input[start]) >= 0)) {
            ++start;
        }
    }
    if ((strategy & TrimStrategy.RIGHT) === TrimStrategy.RIGHT) {
        while (end > start && (!multipleChars && input[end - 1] === chars) || (multipleChars && chars.indexOf(input[end - 1]) >= 0)) {
            --end;
        }
    }
    return (start > 0 || end < input.length) ? input.substring(start, end) : input;
}
