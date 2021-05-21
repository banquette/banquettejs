import { escapeRegex, trimArray } from "@banquette/utils";
import { MatchResult } from "./match-result";

/**
 * Match a path against a mask.
 */
export function matchMask(mask: string, path: string): MatchResult {
    if (mask === path) {
        return MatchResult.Full;
    }
    let highestMatchResult = MatchResult.Full;
    const patternSections = mask.split(':');
    for (let i = 1; i < patternSections.length; ++i) {
        if (patternSections[i] === 'async') {
            highestMatchResult = MatchResult.Async;
        } else if (patternSections[i] === 'sync') {
            highestMatchResult = MatchResult.Sync;
        }
    }
    // No pattern, simply use the modifier match result.
    if (patternSections[0] === '') {
        return highestMatchResult;
    }
    const patternParts = patternSections[0].split('/').filter((item, pos, arr) => pos === 0 || item !== '**' || item !== arr[pos - 1]);
    if (patternParts[0] !== '') {
        // Meaning the first character is not a "/". In which case nothing can match.
        return MatchResult.None;
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
                return highestMatchResult;
            }
            if (patternParts[i + 1] === '*') {
                return pathIndex >= pathParts.length ? MatchResult.Partial : MatchResult.Full;
            }
            let j;
            let matchFound = false;
            for (j = ++i; j < patternParts.length && pathIndex < pathParts.length && !(matchFound = matchPart(patternParts[j])); ++pathIndex);
            if (!matchFound && (j >= patternParts.length || pathIndex >= pathParts.length)) {
                return MatchResult.Partial;
            }
            matchGlobstar = true;
        } else if (pathIndex >= pathParts.length) {
            if (i === patternParts.length - 1 && patternParts[i] === '**') {
                return MatchResult.Full;
            }
            return MatchResult.Partial;
        } else if (!matchPart(p)) {
            return matchGlobstar ? MatchResult.Partial : MatchResult.None;
        }
        ++pathIndex;
    }
    return pathIndex < pathParts.length ? MatchResult.None : highestMatchResult;
}
