import { randomString } from "@banquette/utils-random/random-string";
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
        candidate = randomString(8);
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
            let styles = trim(theme.rawCss);
            if (styles.length > 0) {
                styles = styles.replace('.theme', `.${themeMetadata.className}`);
            }
            const cssVarsKeys = Object.keys(theme.cssVars);
            if (cssVarsKeys.length > 0) {
                styles += `.${themeMetadata.className}`;
                styles += '{';
                for (const key of cssVarsKeys) {
                    if (!isUndefined(configuration.cssVars[key])) {
                        styles += `--${configuration.cssVars[key]}: ${theme.cssVars[key]};`;
                    }
                }
                styles += '}';
            }
            if (styles.length > 0) {
                const scopeId = (component.$.type as any)['__scopeId'];
                if (!isUndefined(scopeId)) {
                    styles = injectScopeIdInCssSource(styles, '['+scopeId+']');
                }
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
 * Very basic utility that to mimic Vue's scope id injection to be able to override styles at runtime.
 * The utility is not meant to be fool proof and is only tested for basic css syntax.
 */
export function injectScopeIdInCssSource(source: string, injection: string): string {
    const injectionTriggers = [',', '{'];
    const injectionTargets = [':'];
    const scopesDelimiters = [['(', ')'], ['[', ']'], ['{', '}'], ["'", "'", true], ['"', '"', true]];
    const scopesStartDelimiters = scopesDelimiters.reduce((acc, item) => {
        acc.push(item[0]);
        return acc;
    }, []);
    let injectionCandidateIndex: number|null = null;
    let openedScopesIndexes: number[] = [];
    let currentScopeIndex: number|null = null;
    let inSelector = false;
    let escaped: boolean = false;
    let frozen: boolean = false;
    for (let i = 0; i < source.length; ++i) {
        const c = source[i];
        if (c === '\\') {
            escaped = !escaped;
            continue ;
        }
        if (escaped) {
            continue ;
        }
        if (currentScopeIndex !== null && c === scopesDelimiters[currentScopeIndex][1]) {
            openedScopesIndexes.pop();
            currentScopeIndex = openedScopesIndexes.length > 0 ? openedScopesIndexes[openedScopesIndexes.length - 1] : null;
            if (currentScopeIndex === null) {
                frozen = false;
            }
            continue ;
        }
        // Skip animations.
        if (c === '@') {
            frozen = true;
        }
        if (currentScopeIndex === null && !frozen) {
            if (injectionTargets.indexOf(c) > -1) {
                injectionCandidateIndex = i;
            }
            if (injectionTriggers.indexOf(c) > -1) {
                let j = (injectionCandidateIndex || i) - 1;
                for (; j >= 0 && source[j].match(/\s/); --j) ;
                if (j > 0) {
                    source = source.substring(0, j + 1) + injection + source.substring(j + 1);
                    i += injection.length;
                }
                injectionCandidateIndex = null;
            }
            if (c.match(/\s/)) {
                inSelector = false;
            } else if (!inSelector) {
                inSelector = true;
                injectionCandidateIndex = null;
            }
        }
        if (scopesStartDelimiters.indexOf(c) > -1) {
            openedScopesIndexes.push(scopesStartDelimiters.indexOf(c));
            currentScopeIndex = openedScopesIndexes[openedScopesIndexes.length - 1];
        }
    }
    return source;
}
