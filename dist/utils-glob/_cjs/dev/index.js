/*!
 * Banquette UtilsGlob v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constant = require('./constant.js');
var match = require('./match.js');
var matchBest = require('./match-best.js');



Object.defineProperty(exports, 'MatchType', {
	enumerable: true,
	get: function () { return constant.MatchType; }
});
exports.match = match.match;
exports.matchBest = matchBest.matchBest;
