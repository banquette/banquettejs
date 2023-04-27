import { getObjectValue } from '@banquette/utils-object';
import { isArray, isObject, isString } from '@banquette/utils-type';

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
export function replaceStringVariables(
    input: any,
    replacements: object,
    startChar: string = '%',
    endChar: string = '%'
): any {
    if (isString(input)) {
        const reg: RegExp = new RegExp(
            startChar + '([a-z0-9*._-]+)' + endChar,
            'gi'
        );
        const replacementsResults: { [key: string]: any } = {};
        let matches: RegExpMatchArray | null;
        /* tslint:disable:no-conditional-assignment */
        while ((matches = reg.exec(input)) !== null) {
            if (isArray(matches) && matches.length > 1) {
                const parts = matches[1].split('.');
                const value = getObjectValue(replacements, parts);
                if (value !== null) {
                    // Do not replace the value immediately because if you do so and the
                    // string auto reference itself you have an infinite loop.
                    replacementsResults[matches[0]] = value;
                }
            }
        }
        // Now we can safely replace the results.
        for (const toReplace in replacementsResults) {
            if (replacementsResults.hasOwnProperty(toReplace)) {
                input = input.replace(
                    new RegExp(toReplace, 'g'),
                    replacementsResults[toReplace]
                );
            }
        }
    }
    if (isArray(input)) {
        for (let i = 0; i < input.length; ++i) {
            input[i] = replaceStringVariables(input[i], replacements);
        }
    }
    if (isObject(input)) {
        for (const k in input) {
            if (input.hasOwnProperty(k)) {
                input[k] = replaceStringVariables(input[k], replacements);
            }
        }
    }
    return input;
}
