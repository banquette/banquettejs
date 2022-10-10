/*!
 * Banquette UtilsGlob v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { MatchType } from './constant.js';
import { match } from './match.js';

/**
 * Match multiple patterns and keep the best result.
 */
function matchBest(masks, path, tags) {
    if (tags === void 0) { tags = []; }
    var bestCombinedResult = { pattern: MatchType.None, tags: MatchType.None };
    for (var _i = 0, masks_1 = masks; _i < masks_1.length; _i++) {
        var mask = masks_1[_i];
        var subResult = match(mask, path, tags);
        bestCombinedResult.pattern = Math.max(bestCombinedResult.pattern, subResult.pattern);
        bestCombinedResult.tags = Math.max(bestCombinedResult.tags, subResult.tags);
    }
    return bestCombinedResult;
}

export { matchBest };
