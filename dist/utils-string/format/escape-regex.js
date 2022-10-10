/*!
 * Banquette UtilsString v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Escape all regex reserved characters so the string can be used as simple text inside a regular expression.
 *
 * @author bobince
 * @source https://stackoverflow.com/a/3561711/1110635
 */
function escapeRegex(input) {
    return input.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

export { escapeRegex };
