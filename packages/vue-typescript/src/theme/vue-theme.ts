import { EventDispatcher, UnsubscribeFunction } from "@banquette/event";
import { trim } from "@banquette/utils-string/format/trim";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { VoidCallback } from "@banquette/utils-type/types";
import { getUniqueRandomId } from "../utils/get-unique-random-id";
import { ThemesEvents, VariantSelector } from "./constant";
import { ThemeComponentChangedEvent } from "./event/theme-component-changed.event";
import { ThemeVariantEvent } from "./event/theme-variant.event";
import { injectContextInCssSource } from "./utils/inject-context-in-css-source";
import { normalizeVariantSelector } from "./utils/normalize-variant-selector";
import { VueThemeVariant } from "./vue-theme-variant";

interface VariantItem {
    variant: VueThemeVariant;
    onChangeUnsubscribeFn: UnsubscribeFunction;
    onUseUnsubscribeFn: UnsubscribeFunction;
}

interface ComponentVariants {
    variants: Record<string, VariantItem>;
    styleElement: HTMLStyleElement|null;
}

export class VueTheme {
    /**
     * Unique identifier that will be used to inject styles.
     */
    public readonly id: string = getUniqueRandomId();

    /**
     * If `true`, the theme is queue for update.
     */
    private invalidated: boolean = false;

    /**
     * An object holding all the variants of a theme, indexed by component name.
     */
    private variants: Record<string, ComponentVariants> = {};

    public constructor(public readonly name: string, private eventDispatcher: EventDispatcher) {

    }

    /**
     * Get all variants of a component.
     */
    public getVariants(componentName: string): VueThemeVariant[] {
        return !isUndefined(this.variants[componentName]) ? Object.values(this.variants[componentName].variants).map((i) => i.variant) : [];
    }

    /**
     * Get or create a theme variant.
     */
    public getVariant(selector: VariantSelector|VariantSelector[], componentName: string): VueThemeVariant {
        const normalizedVariantSelector = normalizeVariantSelector(selector);
        const variantId = normalizedVariantSelector.identifier;
        if (isUndefined(this.variants[componentName])) {
            this.variants[componentName] = {variants: {}, styleElement: null};
        }
        if (isUndefined(this.variants[componentName].variants[variantId])) {
            const inst = new VueThemeVariant(this, normalizedVariantSelector, this.eventDispatcher);
            this.variants[componentName].variants[variantId] = {
                variant: inst,
                onUseUnsubscribeFn: inst.onUse((event: ThemeVariantEvent) => {
                    if (event.variant === inst) {
                        this.variants[componentName].variants[variantId].onUseUnsubscribeFn();
                        this.invalidate();
                    }
                }),
                onChangeUnsubscribeFn: inst.onChange(() => this.invalidate()),
            };
        }
        return this.variants[componentName].variants[variantId].variant;
    }

    /**
     * Remove a variant.
     */
    public removeVariant(selector: VariantSelector|VariantSelector[], componentName: string): void {
        const variantId = normalizeVariantSelector(selector).identifier;
        if (!isUndefined(this.variants[componentName]) && !isUndefined(this.variants[componentName].variants[variantId])) {
            this.variants[componentName].variants[variantId].onUseUnsubscribeFn();
            this.variants[componentName].variants[variantId].onChangeUnsubscribeFn();
            delete this.variants[componentName].variants[variantId];
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
     * Invalid the theme, forcing its styles to recompute and components using it to update.
     */
    public invalidate(): void {
        if (this.invalidated) {
            return ;
        }
        this.invalidated = true;
        window.setTimeout(() => {
            this.injectThemeStyles();
            this.invalidated = false;
        });
    }

    /**
     * Notify the theme that component has changed, so it can dispatch the info to other components
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

    /**
     * Inject the <style> element containing all the active styles of the theme.
     */
    private injectThemeStyles(): void {
        for (const componentName of Object.keys(this.variants)) {
            let componentStyles = '';
            const component = this.variants[componentName];
            for (const variantName of Object.keys(component.variants)) {
                const variant = component.variants[variantName].variant;
                if (!variant.used) {
                    continue ;
                }
                let variantStyles = trim(variant.rawCss);
                if (variantStyles.length > 0) {
                    variantStyles = injectContextInCssSource(variantStyles, variant.theme.id, variant.uid, variant.scopeId);
                    variantStyles += "\n";
                }
                const cssVarsKeys = Object.keys(variant.varsMap);
                if (cssVarsKeys.length > 0) {
                    variantStyles += `.${variant.theme.id} [data-${variant.uid}]` + (variant.scopeId !== null ? `[${variant.scopeId}]` : '');
                    variantStyles += " {\n";
                    for (const key of cssVarsKeys) {
                        if (!isUndefined(variant.configuration.vars[key])) {
                            variantStyles += `    --${variant.configuration.vars[key]}: ${variant.varsMap[key]};` + "\n";
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
                    document.head.appendChild(style);
                    component.styleElement = style;
                }
                component.styleElement.innerHTML = componentStyles;
            } else if (component.styleElement !== null) {
                component.styleElement.remove();
                component.styleElement = null;
            }
        }
    }
}
