/*!
 * Banquette UtilsGlob v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var trimArray = require('@banquette/utils-array/_cjs/dev/trim-array');
var escapeRegex = require('@banquette/utils-string/_cjs/dev/format/escape-regex');
var constant = require('./constant.js');

/**
 * Match a mask against a path.
 */
function match(mask, path, tags) {
    if (tags === void 0) { tags = []; }
    var result = { pattern: constant.MatchType.Full, tags: constant.MatchType.Full };
    if (mask === path) {
        return result;
    }
    var sections = trimArray.trimArray(mask.split(':'));
    // If no tags are defined, totally ignore the tags part of the pattern, consider its a full match.
    if (sections.length > 1) {
        var maskTags = sections.slice(1);
        var matchingTags = maskTags.filter(function (tag) { return tags.indexOf(tag) > -1; });
        result.tags = maskTags.length === matchingTags.length ? constant.MatchType.Full : (matchingTags.length > 0 ? constant.MatchType.Partial : constant.MatchType.None);
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
            var candidates = trimArray.trimArray(patternPart.substring(1, patternPart.length - 1).split(','));
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
                var reg = new RegExp(escapeRegex.escapeRegex(patternPart.replace(/\*/g, '#')).replace(/#/g, '.*'));
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
                return constant.MatchType.Full;
            }
            if (patternParts[i + 1] === '*') {
                return pathIndex >= pathParts.length ? constant.MatchType.Partial : constant.MatchType.Full;
            }
            var j = void 0;
            var matchFound = false;
            for (j = ++i; j < patternParts.length && pathIndex < pathParts.length && !(matchFound = matchPart(patternParts[j])); ++pathIndex)
                { }
            if (!matchFound && (j >= patternParts.length || pathIndex >= pathParts.length)) {
                return constant.MatchType.Partial;
            }
            matchGlobstar = true;
        }
        else if (pathIndex >= pathParts.length) {
            if (i === patternParts.length - 1 && patternParts[i] === '**') {
                return constant.MatchType.Full;
            }
            return constant.MatchType.Partial;
        }
        else if (!matchPart(p)) {
            return matchGlobstar ? constant.MatchType.Partial : constant.MatchType.None;
        }
        ++pathIndex;
    }
    return pathIndex < pathParts.length ? constant.MatchType.None : constant.MatchType.Full;
}

exports.match = match;
