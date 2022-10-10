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
export declare function replaceStringVariables(input: any, replacements: object, startChar?: string, endChar?: string): any;
