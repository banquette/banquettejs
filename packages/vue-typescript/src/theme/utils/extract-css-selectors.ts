import { ltrim, rtrim, trim } from "@banquette/utils-string";

/**
 * Parse a css source with no comments and extract the list of selectors and their position in the source.
 */
export function extractCssSelectors(source: string): Array<[string, number, number]> {
    let currentSelector = '';
    const scopesDelimiters: Array<[string, string, boolean?]> = [['{', '}'], ['(', ')'], ['[', ']'], ["'", "'", true], ['"', '"', true]];
    const scopesStartDelimiters = ['{', '(', '[', "'", '"'];
    let openedScopesIndexes: number[] = [];
    let currentScopeIndex: number|null = null;
    let selectors: Array<[string, number, number]> = [];
    let currentStrDelimiter: string|null = null;
    const appendSelector = (currentIndex: number) => {
        const trimedSelector = trim(currentSelector);
        if (trimedSelector.length > 0) {
            selectors.push([
                trimedSelector,
                (currentIndex - currentSelector.length) + (currentSelector.length - ltrim(currentSelector).length),
                currentIndex - currentSelector.length + rtrim(currentSelector).length
            ]);
        }
        currentSelector = '';
    };
    for (let i = 0; i < source.length; ++i) {
        const c = source[i];
        const scopeIdx = scopesStartDelimiters.indexOf(c);
        let newScope = false;
        if (c === '@' && trim(currentSelector) === '' && currentStrDelimiter === null) {
            for (; i < source.length && source[i] !== '{'; ++i);
            continue ;
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
            } else {
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
