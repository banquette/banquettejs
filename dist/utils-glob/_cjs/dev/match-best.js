/*!
 * Banquette UtilsGlob v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constant = require('./constant.js');
var match = require('./match.js');

/**
 * Match multiple patterns and keep the best result.
 */
function matchBest(masks, path, tags) {
    if (tags === void 0) { tags = []; }
    var bestCombinedResult = { pattern: constant.MatchType.None, tags: constant.MatchType.None };
    for (var _i = 0, masks_1 = masks; _i < masks_1.length; _i++) {
        var mask = masks_1[_i];
        var subResult = match.match(mask, path, tags);
        bestCombinedResult.pattern = Math.max(bestCombinedResult.pattern, subResult.pattern);
        bestCombinedResult.tags = Math.max(bestCombinedResult.tags, subResult.tags);
    }
    return bestCombinedResult;
}

exports.matchBest = matchBest;
