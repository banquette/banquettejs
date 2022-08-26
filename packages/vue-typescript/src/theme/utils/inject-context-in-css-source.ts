import { trim } from "@banquette/utils-string/format/trim";
import { insertInString } from "@banquette/utils-string/insert-in-string";
import { extractCssSelectors } from "./extract-css-selectors";

/**
 * Very basic utility function that takes a raw css sources and inject the class of the variant and optionally the component's scope id.
 * The utility is not meant to be foolproof and is only tested for basic css syntax.
 */
export function injectContextInCssSource(source: string, themeId: string, variantId: string, scopeId: string|null): string {
    source = trim(source.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, ''));
    const selectors = extractCssSelectors(source).reverse();
    const scopesDelimiters: Array<[string, string, boolean?]> = [['{', '}'], ['(', ')'], ['[', ']']];
    const scopesStartDelimiters = ['{', '(', '['];
    for (let i = 0; i < selectors.length; ++i) {
        // Globals part of the selector.
        const globals: string[] = [];

        // Scope id
        if (scopeId !== null) {
            let scopeIdPos = null;
            let strChar: string|null = null;
            const openedScopesIndexes: number[] = [];
            let currentScopeIndex: number|null = null;
            for (let j = 0; j < selectors[i][0].length; j++) {
                const c = selectors[i][0][j];
                const scopeIdx = scopesStartDelimiters.indexOf(c);
                if (scopeIdx > -1 && !strChar) {
                    openedScopesIndexes.push(scopeIdx);
                    currentScopeIndex = openedScopesIndexes[openedScopesIndexes.length - 1];
                }
                if (c === strChar) {
                    strChar = null;
                } else if (!strChar && (c === '"' || c === "'")) {
                    strChar = c;
                }
                if (strChar) {
                    continue ;
                }
                if (c === ' ' && !openedScopesIndexes.length) {
                    scopeIdPos = null;
                }
                if (c === ':') {
                    scopeIdPos = scopeIdPos === null ? j : scopeIdPos;
                    if (selectors[i][0].substring(j, j + 5) === ':deep') {
                        const offset1 = selectors[i][1] + j;
                        const offset2 = source.indexOf('(', offset1 + 5);
                        const offset3 = source.indexOf(')', offset1 + 5);
                        if (offset2 > offset1 && offset3 > offset1) {
                            source = source.substring(0, offset3) + source.substring(offset3 + 1);
                            source = source.substring(0, offset1) + source.substring(offset2 + 1);
                        }
                        while (--j >= 0 && selectors[i][0][j].match(/\s/));
                        scopeIdPos = j + 1;
                        break ;
                    } else if (selectors[i][0].substring(j, j + 7) === ':global') {
                        scopeIdPos = null;
                        const offset1 = selectors[i][1] + j;
                        const offset2 = source.indexOf('(', offset1 + 7);
                        const offset3 = source.indexOf(')', offset1 + 7);
                        const modifierContent = source.substring(offset2 + 1, offset3);
                        let end = i + (offset3 - offset1) + 1;
                        while (end < selectors[i][0].length && selectors[i][0][end].match(/\s/) && ++end);
                        source = trim(source.substring(0, offset1) + source.substring(offset1 + (end -i)));
                        selectors[i][0] = selectors[i][0].substring(end);
                        selectors[i][2] -= end - i - 1;
                        globals.push(modifierContent);
                        --j;
                    }
                }
                if (currentScopeIndex !== null && c === scopesDelimiters[currentScopeIndex][1]) {
                    openedScopesIndexes.pop();
                    currentScopeIndex = openedScopesIndexes.length > 0 ? openedScopesIndexes[openedScopesIndexes.length - 1] : null;
                }
            }
            if (scopeIdPos === null) {
                scopeIdPos = selectors[i][0].length;
            }
            source = insertInString(source, scopeIdPos + selectors[i][1], `[${scopeId}]` + (scopeIdPos === 0 ? ' ' : ''));
        }

        // Variant id
        if (selectors[i][0][0] === '&') {
            source = source.substring(0, selectors[i][1]) + source.substring(selectors[i][1] + 1);
            let offset = selectors[i][1];
            while (source[offset].match(/\s/) && ++offset < source.length);
            source = insertInString(source, offset, `[${variantId}]`);
        } else {
            source = insertInString(source, selectors[i][1], `[${variantId}] `);
        }

        // Theme id
        source = insertInString(source, selectors[i][1], `.${themeId} ${globals.join(' ') + (globals.length ? ' ' : '')}`);
    }
    return source;
}
