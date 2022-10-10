/*!
 * Banquette UtilsGlob v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { trimArray } from '@banquette/utils-array/trim-array';
import { escapeRegex } from '@banquette/utils-string/format/escape-regex';
import { MatchType } from './constant.js';

/**
 * Match a mask against a path.
 */
function match(mask, path, tags) {
    if (tags === void 0) { tags = []; }
    var result = { pattern: MatchType.Full, tags: MatchType.Full };
    if (mask === path) {
        return result;
    }
    var sections = trimArray(mask.split(':'));
    // If no tags are defined, totally ignore the tags part of the pattern, consider its a full match.
    if (sections.length > 1) {
        var maskTags = sections.slice(1);
        var matchingTags = maskTags.filter(function (tag) { return tags.indexOf(tag) > -1; });
        result.tags = maskTags.length === matchingTags.length ? MatchType.Full : (matchingTags.length > 0 ? MatchType.Partial : MatchType.None);
    }
    // No pattern, consider its a perfect match.
    if (sections[0] === '') {
        return result;
    }
    result.pattern = matchPattern(sections[0], path);
    return result;
}
/**
 * Do the actual pattern matching.
 */
function matchPattern(pattern, path) {
    var pathIndex = 0;
    if (path[path.length - 1] === '/') {
        path = path.substring(0, path.length - 2);
    }
    var pathParts = path.split('/');
    var matchPart = function (patternPart) {
        if (patternPart === '*') {
            return true;
        }
        else if (patternPart[0] === '{') {
            var candidates = trimArray(patternPart.substring(1, patternPart.length - 1).split(','));
            for (var _i = 0, candidates_1 = candidates; _i < candidates_1.length; _i++) {
                var candidate = candidates_1[_i];
                if (matchPart(candidate)) {
                    return true;
                }
            }
            return false;
        }
        else {
            if (patternPart.indexOf('*') >= 0) {
                var reg = new RegExp(escapeRegex(patternPart.replace(/\*/g, '#')).replace(/#/g, '.*'));
                return pathParts[pathIndex].match(reg) !== null;
            }
            if (patternPart === pathParts[pathIndex]) {
                return true;
            }
        }
        return false;
    };
    var matchGlobstar = false;
    var patternParts = pattern.split('/').filter(function (item, pos, arr) { return pos === 0 || item !== '**' || item !== arr[pos - 1]; });
    for (var i = 0; i < patternParts.length; ++i) {
        var p = patternParts[i];
        if (p === '**') {
            if (i >= patternParts.length - 1) {
                return MatchType.Full;
            }
            if (patternParts[i + 1] === '*') {
                return pathIndex >= pathParts.length ? MatchType.Partial : MatchType.Full;
            }
            var j = void 0;
            var matchFound = false;
            for (j = ++i; j < patternParts.length && pathIndex < pathParts.length && !(matchFound = matchPart(patternParts[j])); ++pathIndex)
                { }
            if (!matchFound && (j >= patternParts.length || pathIndex >= pathParts.length)) {
                return MatchType.Partial;
            }
            matchGlobstar = true;
        }
        else if (pathIndex >= pathParts.length) {
            if (i === patternParts.length - 1 && patternParts[i] === '**') {
                return MatchType.Full;
            }
            return MatchType.Partial;
        }
        else if (!matchPart(p)) {
            return matchGlobstar ? MatchType.Partial : MatchType.None;
        }
        ++pathIndex;
    }
    return pathIndex < pathParts.length ? MatchType.None : MatchType.Full;
}

export { match };
