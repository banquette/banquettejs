/*!
 * Banquette UtilsRandom v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * The list of all generated ids.
 * This gives a better insurance the id is unique, at least for the current execution context.
 */
var existingIds = [];
/**
 * Generate a unique id string.
 *
 * @param length the length of the id to generate
 * @param ensureUnique if `true` the id is confronted to all ids previously generated to ensure uniqueness
 */
function uniqueId(length, ensureUnique) {
    if (length === void 0) { length = 9; }
    if (ensureUnique === void 0) { ensureUnique = true; }
    var output = '';
    length = Math.max(1, length);
    do {
        var part = Math.random().toString(36).substring(2, 2 + (length - output.length));
        if (output === '') {
            part = part.replace(/^[0-9]+/, '');
        }
        output += part;
        if (output.length < length) {
            continue;
        }
        if (!ensureUnique || existingIds.indexOf(output) < 0) {
            existingIds.push(output);
            return output;
        }
        // Not unique? Try again.
        output = '';
    } while (true);
}

exports.uniqueId = uniqueId;
