import { EventDispatcher } from "@banquette/event/event-dispatcher";
import { UnsubscribeFunction } from "@banquette/event/type";
import { isBrowser } from "@banquette/utils-dom/is-browser";
import { trim } from "@banquette/utils-string/format/trim";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { VoidCallback } from "@banquette/utils-type/types";
import { getUniqueRandomId } from "../utils/get-unique-random-id";
import { ThemesEvents, VariantSelector, ThemeWildcard } from "./constant";
import { ThemeComponentChangedEvent } from "./event/theme-component-changed.event";
import { ThemeVariantEvent } from "./event/theme-variant.event";
import { ThemeEvent } from "./event/theme.event";
import { injectContextInCssSource } from "./utils/inject-context-in-css-source";
import { normalizeVariantSelector } from "./utils/normalize-variant-selector";
import { VueThemeVariant } from "./vue-theme-variant";

interface VariantItem {
    variant: VueThemeVariant;
    onChangeUnsubscribeFn: UnsubscribeFunction;
    onUseUnsubscribeFn: UnsubscribeFunction;
    onPriorityChangedUnsubscribeFn: UnsubscribeFunction;
}

interface ComponentVariants {
    variants: VueThemeVariant[];
    variantsIndex: Record<string, VariantItem>;
    styleElement: HTMLStyleElement|null;
}

export class VueTheme {
    private static ActiveWildcardStyleElements: HTMLStyleElement[] = [];

    /**
     * Unique identifier that will be used to inject styles.
     */
    public readonly id: string;

    /**
     * An object holding all the variants of a theme, indexed by component name.
     */
    private variants: Record<string, ComponentVariants> = {};

    /**
     * Incremented each time injectInDOM() is called.
     * Decremented each time clearDOM() is called.
     *
     * The clear only really happen when the usage count reaches 0.
     */
    private usageCount: number = 0;

    public constructor(public readonly name: string, private eventDispatcher: EventDispatcher) {
        this.id = getUniqueRandomId();
    }

    /**
     * Get all variants of a component.
     */
    public getVariants(componentName: string): VueThemeVariant[] {
        return !isUndefined(this.variants[componentName]) ? Object.values(this.variants[componentName].variantsIndex).map((i) => i.variant) : [];
    }

    /**
     * Get or create a theme variant.
     */
    public getVariant(selector: VariantSelector|VariantSelector[], componentName: string): VueThemeVariant {
        const normalizedVariantSelector = normalizeVariantSelector(selector);
        const variantId = normalizedVariantSelector.identifier;
        if (isUndefined(this.variants[componentName])) {
            this.variants[componentName] = {variants: [], variantsIndex: {}, styleElement: null};
        }
        if (isUndefined(this.variants[componentName].variantsIndex[variantId])) {
            const variant = new VueThemeVariant(this, normalizedVariantSelector, this.eventDispatcher);
            this.variants[componentName].variantsIndex[variantId] = {
                variant,
                onUseUnsubscribeFn: variant.onUse((event: ThemeVariantEvent) => {
                    if (event.variant === variant) {
                        this.variants[componentName].variantsIndex[variantId].onUseUnsubscribeFn();
                        this.injectInDOM();
                    }
                }),
                onChangeUnsubscribeFn: variant.onChange((event: ThemeVariantEvent) => {
                    if (event.variant === variant) {
                        this.injectInDOM();
                    }
                }),
                onPriorityChangedUnsubscribeFn: variant.onPriorityChange(() => {
                    this.variants[componentName].variants = this.variants[componentName].variants.sort((a: VueThemeVariant, b: VueThemeVariant) => {
                        return a.priorityNumber - b.priorityNumber;
                    });
                }),
            };
            this.variants[componentName].variants.push(variant);
        }
        return this.variants[componentName].variantsIndex[variantId].variant;
    }

    /**
     * Remove a variant.
     */
    public removeVariant(selector: VariantSelector|VariantSelector[], componentName: string): void {
        const variantId = normalizeVariantSelector(selector).identifier;
        if (!isUndefined(this.variants[componentName]) && !isUndefined(this.variants[componentName].variantsIndex[variantId])) {
            this.variants[componentName].variantsIndex[variantId].onUseUnsubscribeFn();
            this.variants[componentName].variantsIndex[variantId].onChangeUnsubscribeFn();
            const variantInstance = this.variants[componentName].variantsIndex[variantId];
            const pos = this.variants[componentName].variants.indexOf(variantInstance.variant);
            if (pos > -1) {
                this.variants[componentName].variants.splice(pos, 1);
            }
            delete this.variants[componentName].variantsIndex[variantId];
        }
    }

    /**
     * Remove all variants of one or multiple components.
     * If `componentName` is `null`, all variants of all components are removed.
     */
    public clear(componentName: string|string[]|null = null): void {
        if (componentName === null) {
            this.variants = {};
            return ;
        }
        const componentNames = ensureArray(componentName);
        for (const item of componentNames) {
            if (!isUndefined(this.variants[item])) {
                for (const variant of Object.values(this.variants[item])) {
                    variant.onUseUnsubscribeFn();
                    variant.onChangeUnsubscribeFn();
                }
                delete this.variants[item];
            }
        }
    }

    /**
     * Mark the theme as used, injecting its styles into the DOM.
     */
    public use(): void {
        ++this.usageCount;
        this.injectInDOM();
        this.eventDispatcher.dispatch(ThemesEvents.ThemeChanged, new ThemeEvent(this));
    }

    /**
     * Mark the theme as unused.
     */
    public free(): void {
        if (--this.usageCount <= 0) {
            this.clearDOM();
        }
        this.eventDispatcher.dispatch(ThemesEvents.ThemeChanged, new ThemeEvent(null));
    }

    /**
     * Inject the <style> element containing all the active styles of the theme.
     */
    private injectInDOM(): void {
        if (!isBrowser()) {
            return ;
        }
        let tmpIdentifier = [];
        for (const componentName of Object.keys(this.variants)) {
            let componentStyles = '';
            const component = this.variants[componentName];
            for (const variant of component.variants) {
                if (!variant.used) {
                    continue;
                }
                let variantStyles = trim(variant.rawCss);
                for (const selectorKey of Object.keys(variant.cssSelectorsMap)) {
                    const selectorAttributes = Object.keys(variant.cssSelectorsMap[selectorKey]);
                    if (!isUndefined(variant.configuration.css.selectors[selectorKey]) && selectorAttributes.length > 0) {
                        variantStyles += variant.configuration.css.selectors[selectorKey] + " {\n";
                        for (const rule of selectorAttributes) {
                            variantStyles += `${rule}: ${variant.cssSelectorsMap[selectorKey][rule]};\n`;
                        }
                        variantStyles += "}\n";
                    }
                }
                if (variantStyles.length > 0) {
                    variantStyles = injectContextInCssSource(variantStyles, variant.theme.id, `data-${variant.uid}`, variant.scopeId);
                    variantStyles += "\n";
                }
                const cssVarsKeys = Object.keys(variant.cssVarsMap);
                if (cssVarsKeys.length > 0) {
                    tmpIdentifier.push(variant.theme.id);
                    variantStyles += `.${variant.theme.id} [data-${variant.uid}]` + (variant.scopeId !== null ? `[${variant.scopeId}]` : '');
                    variantStyles += " {\n";
                    for (const key of cssVarsKeys) {
                        if (!isUndefined(variant.configuration.css.vars[key])) {
                            let varName = variant.configuration.css.vars[key];
                            let prefix = '';
                            if (varName[0] === '@') {
                                varName = varName.substring(1);
                                prefix = variant.configuration.componentName;
                            }
                            variantStyles += `    --${prefix}${varName}: ${variant.cssVarsMap[key]};` + "\n";
                        }
                    }
                    variantStyles += "}\n";
                }
                componentStyles += variantStyles;
            }
            if (componentStyles.length > 0) {
                if (component.styleElement === null) {
                    const style = document.createElement('style');
                    style.setAttribute('type', 'text/css');
                    component.styleElement = style;

                    const l = VueTheme.ActiveWildcardStyleElements.length;
                    if (l && VueTheme.ActiveWildcardStyleElements[l - 1].parentNode && VueTheme.ActiveWildcardStyleElements[l - 1].nextSibling) {
                        VueTheme.ActiveWildcardStyleElements[l - 1].parentNode!.insertBefore(style, VueTheme.ActiveWildcardStyleElements[l - 1].nextSibling);
                    } else {
                        let headChildren = Array.from(document.head.children), i;
                        for (i = 0; i < headChildren.length; ++i) {
                            if (headChildren[i].tagName.toLowerCase() === 'style') {
                                document.head.insertBefore(style, headChildren[i]);
                                break;
                            }
                        }
                        if (i >= headChildren.length) {
                            document.head.appendChild(style);
                        }
                    }
                    if (this.name === ThemeWildcard) {
                        VueTheme.ActiveWildcardStyleElements.push(style);
                    }
                }
                component.styleElement.innerHTML = componentStyles;
            } else if (component.styleElement !== null) {
                if (this.name === ThemeWildcard) {
                    for (let i = 0; i < VueTheme.ActiveWildcardStyleElements.length; ++i) {
                        if (VueTheme.ActiveWildcardStyleElements[i] === component.styleElement) {
                            VueTheme.ActiveWildcardStyleElements.splice(i, 1);
                            break;
                        }
                    }
                }
                component.styleElement.remove();
                component.styleElement = null;
            }
        }
        document.documentElement.classList.add(this.id);
    }

    /**
     * Remove the injected styles from the dom.
     */
    private clearDOM(): void {
        for (const componentName of Object.keys(this.variants)) {
            const component = this.variants[componentName];
            if (component.styleElement !== null) {
                component.styleElement.remove();
                component.styleElement = null;
            }
        }
        document.documentElement.classList.remove(this.id);
    }

    /**
     * Notify the theme that a component has changed, so it can dispatch the info to other components
     * that may depend on it indirectly.
     */
    public notifyComponentChange(name: string): void {
        this.eventDispatcher.dispatch(ThemesEvents.ThemeComponentChanged, new ThemeComponentChangedEvent(this, name));
    }

    /**
     * Subscribe to an event that will trigger each time a variant is modified.
     */
    public onUpdated(cb: (event: ThemeVariantEvent) => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(ThemesEvents.VariantUpdated, cb);
    }

    /**
     * Subscribe to an event that will trigger when any component of the `componentNames` list notify the theme of a change.
     */
    public onComponentsChange(componentsNames: string[], cb: VoidCallback): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(ThemesEvents.ThemeComponentChanged, (event: ThemeComponentChangedEvent) => {
            if (event.theme === this && componentsNames.indexOf(event.componentName) > -1) {
                cb();
            }
        });
    }
}
