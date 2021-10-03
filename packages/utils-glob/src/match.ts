import { trimArray } from "@banquette/utils-array";
import { escapeRegex } from "@banquette/utils-string";
import { isUndefined } from "@banquette/utils-type";
import { MatchType } from "./constant";
import { MatchResult } from "./match-result";

/**
 * Match a mask against a path.
 */
export function match(mask: string, path: string, tags?: string[]): MatchResult {
    const result: MatchResult = {pattern: MatchType.Full, tags: MatchType.Full};
    if (mask === path) {
        return result;
    }
    const sections = trimArray(mask.split(':'));

    // If "tags" is undefined, totally ignore the tags part of the pattern, consider its a full match.
    if (!isUndefined(tags)) {
        const maskTags = sections.slice(1);
        const matchingTags = maskTags.filter((tag: string) => tags.indexOf(tag) > -1);
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
function matchPattern(pattern: string, path: string): MatchType {
    const patternParts = pattern.split('/').filter((item, pos, arr) => pos === 0 || item !== '**' || item !== arr[pos - 1]);
    if (patternParts[0] !== '') {
        // Meaning the first character is not a "/". In which case nothing can match.
        return MatchType.None;
    }
    let pathIndex = 1;
    if (path[path.length - 1] === '/') {
        path = path.substring(0, path.length - 2);
    }
    const pathParts = path.split('/');
    const matchPart = (patternPart: string): boolean => {
        if (patternPart === '*') {
            return true;
        } else if (patternPart[0] === '{') {
            const candidates = trimArray(patternPart.substring(1, patternPart.length - 1).split(','));
            for (const candidate of candidates) {
                if (matchPart(candidate)) {
                    return true;
                }
            }
            return false;
        } else {
            if (patternPart.indexOf('*') >= 0) {
                const reg = new RegExp(escapeRegex(patternPart.replace(/\*/g, '#')).replace(/#/g, '.*'));
                return pathParts[pathIndex].match(reg) !== null;
            }
            if (patternPart === pathParts[pathIndex]) {
                return true;
            }
        }
        return false;
    };
    let matchGlobstar = false;
    for (let i = 1; i < patternParts.length; ++i) {
        const p = patternParts[i];
        if (p === '**') {
            if (i >= patternParts.length - 1) {
                return MatchType.Full;
            }
            if (patternParts[i + 1] === '*') {
                return pathIndex >= pathParts.length ? MatchType.Partial : MatchType.Full;
            }
            let j;
            let matchFound = false;
            for (j = ++i; j < patternParts.length && pathIndex < pathParts.length && !(matchFound = matchPart(patternParts[j])); ++pathIndex);
            if (!matchFound && (j >= patternParts.length || pathIndex >= pathParts.length)) {
                return MatchType.Partial;
            }
            matchGlobstar = true;
        } else if (pathIndex >= pathParts.length) {
            if (i === patternParts.length - 1 && patternParts[i] === '**') {
                return MatchType.Full;
            }
            return MatchType.Partial;
        } else if (!matchPart(p)) {
            return matchGlobstar ? MatchType.Partial : MatchType.None;
        }
        ++pathIndex;
    }
    return pathIndex < pathParts.length ? MatchType.None : MatchType.Full;
}
