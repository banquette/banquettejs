import { ltrim } from "@banquette/utils-string/format/ltrim";
import { rtrim } from "@banquette/utils-string/format/rtrim";
import { trim } from "@banquette/utils-string/format/trim";

/**
 * Parse a css source with no comments and extract the list of selectors and their position in the source.
 */
export function extractCssSelectors(source: string): Array<[string, number, number]> {
    let currentSelector = '';
    const scopesDelimiters = [['{', '}'], ['(', ')'], ['[', ']'], ["'", "'", true], ['"', '"', true]];
    const scopesStartDelimiters = scopesDelimiters.reduce((acc, item) => {
        acc.push(item[0]);
        return acc;
    }, []);
    let openedScopesIndexes: number[] = [];
    let currentScopeIndex: number|null = null;
    let selectors: Array<[string, number, number]> = [];
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
        if (scopesStartDelimiters.indexOf(c) > -1) {
            openedScopesIndexes.push(scopesStartDelimiters.indexOf(c));
            currentScopeIndex = openedScopesIndexes[openedScopesIndexes.length - 1];
            if (currentScopeIndex === 0) {
                appendSelector(i);
            }
        }
        if (openedScopesIndexes.indexOf(0) < 0) {
            if (c === ',') {
                appendSelector(i);
            } else {
                currentSelector += c;
            }
        }
        if (currentScopeIndex !== null && c === scopesDelimiters[currentScopeIndex][1]) {
            openedScopesIndexes.pop();
            currentScopeIndex = openedScopesIndexes.length > 0 ? openedScopesIndexes[openedScopesIndexes.length - 1] : null;
        }
    }
    return selectors;
}
