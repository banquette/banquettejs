import { ltrim } from "@banquette/utils-string/format/ltrim";
import { rtrim } from "@banquette/utils-string/format/rtrim";
import { trim } from "@banquette/utils-string/format/trim";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { PrivateThemeableDecoratorOptions } from "../decorator/themeable.decorator";
import { Vue } from "../vue";
import { VariantWildcard, ThemeComponentSymbol } from "./constant";
import { VueThemeVariant } from "./vue-theme-variant";
import { VueThemes } from "./vue-themes";

interface VariantMetadata {
    useCount: 0;
    stylesEl: HTMLElement|null;
    invalidated: boolean;
}

const variantsMetadata: WeakMap<VueThemeVariant, VariantMetadata> = new WeakMap<VueThemeVariant, VariantMetadata>();

function getVariantMetadata(variant: VueThemeVariant): VariantMetadata {
    let metadata = variantsMetadata.get(variant);
    if (isUndefined(metadata)) {
        metadata = {useCount: 0, stylesEl: null, invalidated: false};
        variantsMetadata.set(variant, metadata);
    }
    return metadata;
}

/**
 * Gets the full list of variants to apply to a component.
 */
export function resolveComponentVariants(componentInstance: Vue, componentName: string, variantsStr?: string): VueThemeVariant[] {
    const output: VueThemeVariant[] = [];
    let themes = [VueThemes.GetWildcard()];
    let parentComponent: any = componentInstance.$parent;
    while (parentComponent) {
        if (parentComponent.s === ThemeComponentSymbol && VueThemes.Has(parentComponent.name)) {
            themes.push(VueThemes.Get(parentComponent.name));
            break ;
        }
        parentComponent = parentComponent.$parent;
    }
    // No custom theme? Use the one defined globally, if there is one.
    if (themes.length === 1) {
        const globalTheme = VueThemes.GetCurrent();
        if (globalTheme !== null) {
            themes.push(globalTheme);
        }
    }
    const variants = (variantsStr || '').split(' ').reduce((acc: string[], item: string) => {
        item = trim(item);
        if (item.length) {
            acc.push(item);
        }
        return acc;
    }, [VariantWildcard]);

    for (const theme of themes) {
        for (const variantName of variants) {
            if (theme.hasVariant(variantName, componentName)) {
                output.push(theme.getVariant(variantName, componentName));
            }
        }
    }
    return output;
}

/**
 * Add a class corresponding a variant to the root element of a component.
 */
export function setVariantStylesOverrides(component: Vue, variant: VueThemeVariant, configuration: PrivateThemeableDecoratorOptions): void {
    const variantMetadata = getVariantMetadata(variant);
    if (component.$el) {
        component.$el.classList.add(variant.id);

        if (!variantMetadata.useCount || variantMetadata.invalidated) {
            if (variantMetadata.stylesEl !== null) {
                variantMetadata.stylesEl.remove();
            }
            const scopeId = (component.$.type as any)['__scopeId'] || null;
            let styles = trim(variant.rawCss);
            if (styles.length > 0) {
                styles = injectContextInCssSource(styles, `${variant.theme.id} .${variant.id}`, scopeId);
            }
            const cssVarsKeys = Object.keys(variant.varsMap);
            if (cssVarsKeys.length > 0) {
                styles += `.${variant.theme.id} .${variant.id}` + (scopeId !== null ? `[${scopeId}]` : '');
                styles += '{';
                for (const key of cssVarsKeys) {
                    if (!isUndefined(configuration.vars[key])) {
                        styles += `--${configuration.vars[key]}: ${variant.varsMap[key]};`;
                    }
                }
                styles += '}';
            }
            if (styles.length > 0) {
                const style = document.createElement('style');
                style.setAttribute('type', 'text/css');
                style.innerHTML = styles;
                document.head.appendChild(style);
                variantMetadata.stylesEl = style;
            }
            variantMetadata.invalidated = false;
        }
        ++variantMetadata.useCount;
    }
}

/**
 * Add a class corresponding a variant to the root element of a component.
 */
export function invalidateVariantStylesOverrides(variant: VueThemeVariant): void {
    const variantMetadata = getVariantMetadata(variant);
    variantMetadata.invalidated = true;
}

/**
 * Remove the class corresponding a variant from the root element of a component.
 */
export function removeVariantStylesOverrides(component: Vue, variant: VueThemeVariant): void {
    const variantMetadata = getVariantMetadata(variant);
    component.$el.classList.remove(variant.id);
    if (--variantMetadata.useCount === 0 && variantMetadata.stylesEl !== null) {
        variantMetadata.stylesEl.remove();
        variantMetadata.stylesEl = null;
    }
}

/**
 * Very basic utility function that takes a raw css sources and inject the class of the variant and optionally the component's scope id.
 * The utility is not meant to be fool proof and is only tested for basic css syntax.
 */
export function injectContextInCssSource(source: string, variantClass: string|null, scopeId: string|null): string {
    source = trim(source.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,''));
    const selectors = extractCssSelectors(source);

    for (let i = selectors.length - 1; i >= 0; --i) {
        const selector = selectors[i];

        // Ignore animations
        if (selector[0][0] === '@') {
            continue ;
        }
        // Add the variant class
        if (variantClass !== null) {
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
                selector[0] = selector[0].substring(0, j) + '.' + variantClass + selector[0].substring(j);
            } else {
                selector[0] = '.' + variantClass + (!isRootSelector ? ' ' : '') + selector[0];
            }
            source =
                source.substring(0, selector[1]) +
                selector[0] +
                source.substring(selector[2]);

            selector[2] += variantClass.length + (isRootSelector ? 1 : 2);
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
