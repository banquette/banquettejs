/*!
 * Banquette UtilsString v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Escape all regex reserved characters so the string can be used as simple text inside a regular expression.
 *
 * @author bobince
 * @source https://stackoverflow.com/a/3561711/1110635
 */
function escapeRegex(input) {
    return input.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

exports.escapeRegex = escapeRegex;
