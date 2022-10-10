/*!
 * Banquette UtilsRandom v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var randomInt = require('./random-int.js');

var ALPHABETS = {
    ALPHA: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    ALPHANUMERIC: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    ALPHANUMERIC_SIMPLIFIED: "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ123456789",
    BASE_64: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/",
    COMPLEX: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/$^-_.(){}:<>?,;|[]*%#+!@~=",
    HEXADECIMAL: "abcdef0123456789",
    NUMERIC: "0123456789",
};
/**
 * Generates a random string.
 * Available alphabets are :
 *   - ALPHABETS.ALPHANUMERIC
 *   - ALPHABETS.ALPHA
 *   - ALPHABETS.ALPHANUMERIC
 *   - ALPHABETS.ALPHANUMERIC_SIMPLIFIED
 *   - ALPHABETS.BASE_64
 *   - ALPHABETS.COMPLEX
 *   - ALPHABETS.HEXADECIMAL
 *   - ALPHABETS.NUMERIC
 *
 * You can also provide your own.
 *
 * @param {number} length
 * @param {string} alphabet (optional, default: ALPHABETS.ALPHANUMERIC)
 *
 * @returns {string}
 */
function randomString(length, alphabet) {
    if (alphabet === void 0) { alphabet = ALPHABETS.ALPHANUMERIC; }
    if (length < 1 || !isString.isString(alphabet)) {
        return '';
    }
    var output = "";
    for (var i = 0; i < length; i++) {
        output += alphabet[randomInt.randomInt(0, alphabet.length - 1)];
    }
    return output;
}

exports.ALPHABETS = ALPHABETS;
exports.randomString = randomString;
