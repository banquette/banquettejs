/*!
 * Banquette UtilsString v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fixedDigits = require('./fixed-digits.js');
var insertInString = require('./insert-in-string.js');
var isEmptyString = require('./is-empty-string.js');
var isNonEmptyString = require('./is-non-empty-string.js');
var utf8Size = require('./utf8-size.js');
var phpSerialize = require('./php-serialize.js');
var phpUnserialize = require('./php-unserialize.js');
var jsonDecode = require('./json-decode.js');
var jsonEncode = require('./json-encode.js');
var capitalize = require('./case/capitalize.js');
var camelCase = require('./case/camel-case.js');
var kebabCase = require('./case/kebab-case.js');
var trim = require('./format/trim.js');
var ltrim = require('./format/ltrim.js');
var rtrim = require('./format/rtrim.js');
var escapeRegex = require('./format/escape-regex.js');
var format = require('./format/format.js');
var humanSizeToByteCount = require('./format/human-size-to-byte-count.js');
var byteCountToHumanSize = require('./format/byte-count-to-human-size.js');
var numberFormat = require('./format/number-format.js');
var replaceStringVariables = require('./format/replace-string-variables.js');
var removeAccents = require('./format/remove-accents.js');
var slugify = require('./format/slugify.js');
var isUrl = require('./url/is-url.js');
var normalizeUrl = require('./url/normalize-url.js');



exports.fixedDigits = fixedDigits.fixedDigits;
exports.insertInString = insertInString.insertInString;
exports.isEmptyString = isEmptyString.isEmptyString;
exports.isNonEmptyString = isNonEmptyString.isNonEmptyString;
exports.utf8Size = utf8Size.utf8Size;
exports.phpSerialize = phpSerialize.phpSerialize;
exports.phpUnserialize = phpUnserialize.phpUnserialize;
exports.jsonDecode = jsonDecode.jsonDecode;
exports.jsonEncode = jsonEncode.jsonEncode;
exports.capitalize = capitalize.capitalize;
exports.camelCase = camelCase.camelCase;
exports.kebabCase = kebabCase.kebabCase;
Object.defineProperty(exports, 'TrimStrategy', {
	enumerable: true,
	get: function () { return trim.TrimStrategy; }
});
exports.trim = trim.trim;
exports.ltrim = ltrim.ltrim;
exports.rtrim = rtrim.rtrim;
exports.escapeRegex = escapeRegex.escapeRegex;
exports.format = format.format;
exports.humanSizeToByteCount = humanSizeToByteCount.humanSizeToByteCount;
exports.byteCountToHumanSize = byteCountToHumanSize.byteCountToHumanSize;
exports.numberFormat = numberFormat.numberFormat;
exports.replaceStringVariables = replaceStringVariables.replaceStringVariables;
exports.removeAccents = removeAccents.removeAccents;
exports.slugify = slugify.slugify;
exports.isUrl = isUrl.isUrl;
exports.normalizeUrl = normalizeUrl.normalizeUrl;
