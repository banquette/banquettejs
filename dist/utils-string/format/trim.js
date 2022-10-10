/*!
 * Banquette UtilsString v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
var TrimStrategy;
(function (TrimStrategy) {
    TrimStrategy[TrimStrategy["LEFT"] = 1] = "LEFT";
    TrimStrategy[TrimStrategy["RIGHT"] = 2] = "RIGHT";
    TrimStrategy[TrimStrategy["BOTH"] = 3] = "BOTH";
})(TrimStrategy || (TrimStrategy = {}));
/**
 * Trim a string.
 *
 * @source https://stackoverflow.com/a/55292366/1110635 (with slight modifications)
 */
function trim(input, chars, strategy) {
    if (chars === void 0) { chars = " \n\r\t"; }
    if (strategy === void 0) { strategy = TrimStrategy.BOTH; }
    var start = 0;
    var end = input.length;
    var multipleChars = chars.length > 1;
    if ((strategy & TrimStrategy.LEFT) === TrimStrategy.LEFT) {
        while (start < end && ((!multipleChars && input[start] === chars) || (multipleChars && chars.indexOf(input[start]) >= 0))) {
            ++start;
        }
    }
    if ((strategy & TrimStrategy.RIGHT) === TrimStrategy.RIGHT) {
        while (end > start && ((!multipleChars && input[end - 1] === chars) || (multipleChars && chars.indexOf(input[end - 1]) >= 0))) {
            --end;
        }
    }
    return (start > 0 || end < input.length) ? input.substring(start, end) : input;
}

export { TrimStrategy, trim };
