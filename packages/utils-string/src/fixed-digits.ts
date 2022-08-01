/**
 * Converts a number into a string while ensuring there are at least {digits} number of digits in it.
 */
export function fixedDigits(num: number, digits: number): string {
    let str = num.toString();
    let prefix = '';
    if (str[0] === '-') {
        prefix = '-';
        str = str.substring(1);
    }
    return prefix + '0'.repeat(Math.max(0, digits - str.length)) + str;
}
