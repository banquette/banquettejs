/*!
 * Banquette UtilsString v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Converts a number into a string while ensuring there are at least {digits} number of digits in it.
 */
function fixedDigits(num, digits) {
    var str = num.toString();
    var prefix = '';
    if (str[0] === '-') {
        prefix = '-';
        str = str.substring(1);
    }
    return prefix + '0'.repeat(Math.max(0, digits - str.length)) + str;
}

export { fixedDigits };
