import { ensureArray, escapeRegex, isObject, trimArray } from "@banquette/utils";
import { SimplifiedValidatorInterface } from "./simplified-validator.interface";
import { ValidationContext } from "./validation-context";
import { ValidationResult } from "./validation-result";
import { ValidatorContainerInterface } from "./validator-container.interface";
import { ValidatorInterface } from "./validator.interface";

export enum MatchResult {
    None,    // Never match.
    Partial, // Only match if it's a validator container.
    Async,   // Only match if it's an asynchronous validator.
    Sync,    // Only match if it's an synchronous validator.
    Full     // Always match.
}

export function isValidatorContainer(input: any): input is ValidatorContainerInterface {
    return isObject(input) && 'validate' in input && 'set' in input && 'remove' in input && 'has' in input;
}

/**
 * Abstract the context creation when building validators.
 */
export function simplifyValidator(validator: SimplifiedValidatorInterface): ValidatorInterface {
    return {
        validate(value: any, maskOrContext?: ValidationContext|string|string[]): ValidationResult {
            return validator.validate(ensureValidationContext(value, maskOrContext));
        }
    };
}

/**
 * Ensure a ValidationContext object is returned from a ValidatorInterface signature.
 */
export function ensureValidationContext(value: any, maskOrContext?: ValidationContext|string|string[]): ValidationContext {
    if (!(maskOrContext instanceof ValidationContext)) {
        return new ValidationContext(
            null,
            null,
            value,
            ensureArray(maskOrContext) as string[]
        );
    }
    return maskOrContext as ValidationContext;
}

/**
 * Ensure we always have an array of masks and each of its entries are relative to the root context.
 */
export function normalizeMasks(mask: string|string[], path: string): string[] {
    const output: string[] = [];
    const masks = ensureArray(mask);
    for (let mask of masks) {
        if (!mask.length) {
            continue ;
        }
        // The mask is relative to the current context, so make it absolute.
        if (mask[0] !== '/' && mask[0] !== ':') {
            mask = path + (path[path.length - 1] !== '/' ? '/' : '') + mask;
        }
        output.push(mask);
    }
    return output;
}

/**
 * Split a path into an array.
 */
export function splitPath(path: string): string[] {
    return (path.length > 0 && path[0] === '/' ? path.substring(1) : path).split('/');
}

/**
 * Test each pattern against a path and return the strongest match result.
 */
export function findBestPathMatch(patterns: string[], path: string): MatchResult {
    let bestResult: number = MatchResult.None;
    for (const pattern of patterns) {
        bestResult = Math.max(bestResult, matchPath(pattern, path));
    }
    return bestResult;
}

/**
 * Match a path against a pattern.
 */
export function matchPath(pattern: string, path: string): MatchResult {
    if (pattern === path) {
        return MatchResult.Full;
    }
    let highestMatchResult = MatchResult.Full;
    const patternSections = pattern.split(':');
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
