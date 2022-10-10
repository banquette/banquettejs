/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { ltrim } from '@banquette/utils-string/format/ltrim';
import { rtrim } from '@banquette/utils-string/format/rtrim';
import { trim } from '@banquette/utils-string/format/trim';

/**
 * Parse a css source with no comments and extract the list of selectors and their position in the source.
 */
function extractCssSelectors(source) {
    var currentSelector = '';
    var scopesDelimiters = [['{', '}'], ['(', ')'], ['[', ']'], ["'", "'", true], ['"', '"', true]];
    var scopesStartDelimiters = ['{', '(', '[', "'", '"'];
    var openedScopesIndexes = [];
    var currentScopeIndex = null;
    var selectors = [];
    var currentStrDelimiter = null;
    var appendSelector = function (currentIndex) {
        var trimedSelector = trim(currentSelector);
        if (trimedSelector.length > 0) {
            selectors.push([
                trimedSelector,
                (currentIndex - currentSelector.length) + (currentSelector.length - ltrim(currentSelector).length),
                currentIndex - currentSelector.length + rtrim(currentSelector).length
            ]);
        }
        currentSelector = '';
    };
    for (var i = 0; i < source.length; ++i) {
        var c = source[i];
        var scopeIdx = scopesStartDelimiters.indexOf(c);
        var newScope = false;
        if (c === '@' && trim(currentSelector) === '' && currentStrDelimiter === null) {
            for (; i < source.length && source[i] !== '{'; ++i)
                { }
            continue;
        }
        if (scopeIdx > -1 && currentStrDelimiter === null) {
            if (scopesDelimiters[scopeIdx][2]) {
                currentStrDelimiter = scopesDelimiters[scopeIdx][0];
            }
            openedScopesIndexes.push(scopeIdx);
            currentScopeIndex = openedScopesIndexes[openedScopesIndexes.length - 1];
            if (currentScopeIndex === 0) {
                appendSelector(i);
            }
            newScope = true;
        }
        if (openedScopesIndexes.indexOf(0) < 0) {
            if (c === ',' && currentStrDelimiter === null) {
                appendSelector(i);
            }
            else {
                currentSelector += c;
            }
        }
        if (!newScope && currentScopeIndex !== null && c === scopesDelimiters[currentScopeIndex][1]) {
            openedScopesIndexes.pop();
            currentScopeIndex = openedScopesIndexes.length > 0 ? openedScopesIndexes[openedScopesIndexes.length - 1] : null;
            if (currentStrDelimiter === c) {
                currentStrDelimiter = null;
            }
        }
    }
    return selectors;
}

export { extractCssSelectors };
