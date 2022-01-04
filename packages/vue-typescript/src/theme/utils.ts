import { randomString, ALPHABETS } from "@banquette/utils-random/random-string";
import { ltrim } from "@banquette/utils-string/format/ltrim";
import { rtrim } from "@banquette/utils-string/format/rtrim";
import { trim } from "@banquette/utils-string/format/trim";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { PrivateThemeableDecoratorOptions } from "../decorator/themeable.decorator";
import { Vue } from "../vue";
import { VueTheme } from "./vue-theme";

interface ThemeMetadata {
    className: string;
    useCount: 0;
    stylesEl: HTMLElement|null;
}

const themesMetadata: WeakMap<VueTheme, ThemeMetadata> = new WeakMap<VueTheme, ThemeMetadata>();
const knownRandomIds: string[] = [];

function getThemeMetadata(theme: VueTheme): ThemeMetadata {
    let metadata = themesMetadata.get(theme);
    if (isUndefined(metadata)) {
        metadata = {className: getUniqueRandomId(), useCount: 0, stylesEl: null};
        themesMetadata.set(theme, metadata);
    }
    return metadata;
}

function getUniqueRandomId(): string {
    let candidate: string;
    do {
        candidate = randomString(1, ALPHABETS.ALPHA) + randomString(7);
    } while (knownRandomIds.indexOf(candidate) > -1);
    knownRandomIds.push(candidate);
    return candidate;
}

/**
 * Add a class corresponding a theme to the root element of a component.
 */
export function setThemeStyles(component: Vue, theme: VueTheme, configuration: PrivateThemeableDecoratorOptions): void {
    const themeMetadata = getThemeMetadata(theme);
    let newClassName = themeMetadata.className;
    if (component.$el) {
        component.$el.classList.add(newClassName);

        if (!themeMetadata.useCount) {
            const scopeId = (component.$.type as any)['__scopeId'] || null;
            let styles = trim(theme.rawCss);
            if (styles.length > 0) {
                styles = injectContextInCssSource(styles, themeMetadata.className, scopeId);
            }
            const cssVarsKeys = Object.keys(theme.cssVars);
            if (cssVarsKeys.length > 0) {
                styles += `.${themeMetadata.className}` + (scopeId !== null ? `[${scopeId}]` : '');
                styles += '{';
                for (const key of cssVarsKeys) {
                    if (!isUndefined(configuration.cssVars[key])) {
                        styles += `--${configuration.cssVars[key]}: ${theme.cssVars[key]};`;
                    }
                }
                styles += '}';
            }
            if (styles.length > 0) {
                const style = document.createElement('style');
                style.setAttribute('type', 'text/css');
                style.innerHTML = styles;
                document.head.appendChild(style);
                themeMetadata.stylesEl = style;
            }
        }
        ++themeMetadata.useCount;
    }
}

/**
 * Remove the class corresponding a theme from the root element of a component.
 */
export function removeThemeStyles(component: Vue, theme: VueTheme): void {
    const themeMetadata = getThemeMetadata(theme);
    component.$el.classList.remove(themeMetadata.className);
    if (--themeMetadata.useCount === 0 && themeMetadata.stylesEl !== null) {
        themeMetadata.stylesEl.remove();
        themeMetadata.stylesEl = null;
    }
}

/**
 * Very basic utility function that takes a raw css sources and inject the class of the theme and optionally the component's scope id.
 * The utility is not meant to be fool proof and is only tested for basic css syntax.
 */
export function injectContextInCssSource(source: string, themeClassName: string|null, scopeId: string|null): string {
    source = trim(source.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,''));
    const selectors = extractCssSelectors(source);

    for (let i = selectors.length - 1; i >= 0; --i) {
        const selector = selectors[i];

        // Ignore animations
        if (selector[0][0] === '@') {
            continue ;
        }
        // Add the theme class
        if (themeClassName !== null) {
            const isRootSelector = selector[0][0] === '&';
            if (isRootSelector) {
                const trimed = ltrim(selector[0].substring(1));
                source = source.substring(0, selector[1]) + trimed + source.substring(selector[2]);
                selector[2] -= selector[0].length - trimed.length;
                selector[0] = trimed;
            }
            if (isRootSelector && ['.', '#'].indexOf(selector[0][0]) < 0) {
                let j = 0;
                for (; j < selector[0].length && selector[0][j].match(/[a-z_-]+/i); ++j) ;
                selector[0] = selector[0].substring(0, j) + '.' + themeClassName + selector[0].substring(j);
            } else {
                selector[0] = '.' + themeClassName + (!isRootSelector ? ' ' : '') + selector[0];
            }
            source =
                source.substring(0, selector[1]) +
                selector[0] +
                source.substring(selector[2]);

            selector[2] += themeClassName.length + (isRootSelector ? 1 : 2);
        }

        // Add scope id
        if (scopeId !== null) {
            source =
                source.substring(0, selector[2]) +
                `[${scopeId}]` +
                source.substring(selector[2]);
        }
    }
    return source;
}

/**
 * Parse a css source with no comments and extract the list of selectors and their position in the source.
 */
function extractCssSelectors(source: string): Array<[string, number, number]> {
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
