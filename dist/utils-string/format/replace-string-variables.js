/*!
 * Banquette UtilsString v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { getObjectValue } from '@banquette/utils-object/get-object-value';
import { isArray } from '@banquette/utils-type/is-array';
import { isObject } from '@banquette/utils-type/is-object';
import { isString } from '@banquette/utils-type/is-string';

/**
 * Replace all variables corresponding to the syntax "%variableName% in the input with the corresponding
 * value in the replacements parameter.
 *
 * This works on any number of levels.
 *
 * For example the string:
 *   "Hello %config.who%!"
 *   with a replacement object of: {config: {who: "World"}}
 *   will output: "Hello World!".
 *
 * Variables names are limited to the following range of characters:
 *   [a-zA-Z0-9*_-]
 * (with the addition of the "." (dot) to separate levels in the hierarchy)
 *
 * You can also chose the starting and ending characters.
 */
function replaceStringVariables(input, replacements, startChar, endChar) {
    if (startChar === void 0) { startChar = '%'; }
    if (endChar === void 0) { endChar = '%'; }
    if (isString(input)) {
        var reg = new RegExp(startChar + '([a-z0-9*._-]+)' + endChar, 'gi');
        var replacementsResults = {};
        var matches = void 0;
        /* tslint:disable:no-conditional-assignment */
        while ((matches = reg.exec(input)) !== null) {
            if (isArray(matches) && matches.length > 1) {
                var parts = matches[1].split('.');
                var value = getObjectValue(replacements, parts);
                if (value !== null) {
                    // Do not replace the value immediately because if you do so and the
                    // string auto reference itself you have an infinite loop.
                    replacementsResults[matches[0]] = value;
                }
            }
        }
        // Now we can safely replace the results.
        for (var toReplace in replacementsResults) {
            if (replacementsResults.hasOwnProperty(toReplace)) {
                input = input.replace(new RegExp(toReplace, 'g'), replacementsResults[toReplace]);
            }
        }
    }
    if (isArray(input)) {
        for (var i = 0; i < input.length; ++i) {
            input[i] = replaceStringVariables(input[i], replacements);
        }
    }
    if (isObject(input)) {
        for (var k in input) {
            if (input.hasOwnProperty(k)) {
                input[k] = replaceStringVariables(input[k], replacements);
            }
        }
    }
    return input;
}

export { replaceStringVariables };
