import { EventDispatcher } from "@banquette/event/event-dispatcher";
import { UnsubscribeFunction } from "@banquette/event/type";
import { Primitive } from "@banquette/utils-type/types";
import { VarsMapInterface, ThemeableMetadata } from "../decorator/themeable.decorator";
import { Vue } from "../vue";
import { PropCallback } from "./constant";
import { ThemeVariantEvent } from "./event/theme-variant.event";
import { NormalizedVariantSelectorInterface } from "./normalized-variant-selector.interface";
import { VueTheme } from "./vue-theme";
export declare class VueThemeVariant {
    readonly theme: VueTheme;
    readonly selector: NormalizedVariantSelectorInterface;
    private eventDispatcher;
    /**
     * Unique identifier that will be used to inject styles.
     */
    readonly uid: string;
    /**
     * Public id of the variant, used to target the variant when using `apply`.
     */
    readonly publicId: string | null;
    /**
     * Raw CSS to inject in the head (as written by the end-user).
     * Selectors will be scoped automatically if the component has scoped styles.
     */
    rawCss: string;
    /**
     * Key/value pair of css variables to override.
     */
    readonly cssVarsMap: Record<string, Primitive>;
    /**
     * Key/value pair of css selectors and their css rules to apply.
     */
    readonly cssSelectorsMap: Record<string, Record<string, Primitive>>;
    /**
     * Key/value pair holding propsMap values.
     */
    readonly propsMap: Record<string, Primitive | PropCallback>;
    /**
     * Shortcut for `Object.keys(this.propsMap)`.
     */
    readonly propsKeys: string[];
    /**
     * Ids of other variants to apply when the variant matches.
     */
    readonly applyIds: string[];
    /**
     * `true` if the variant has been used by a component.
     */
    readonly used: boolean;
    /**
     * The scope id of the component to which belongs the variant.
     */
    readonly scopeId: string | null;
    /**
     * The themeable configuration relative to the variant.
     */
    readonly configuration: ThemeableMetadata;
    /**
     * Define the priority of the variant relative to the other variants of the theme.
     * The higher the priority, the latest the variant will be processed, thus overriding previous variants.
     */
    readonly priorityNumber: number;
    constructor(theme: VueTheme, selector: NormalizedVariantSelectorInterface, eventDispatcher: EventDispatcher);
    /**
     * Set the public id of the variant, used to target the variant when using `apply`.
     */
    id(id: string): VueThemeVariant;
    /**
     * Alias of `appendCssCode`.
     */
    cssCode(source: string): VueThemeVariant;
    /**
     * Append raw css code to already registered one.
     */
    appendCssCode(source: string): VueThemeVariant;
    /**
     * Add raw css code before already registered one.
     */
    prependCssCode(source: string): VueThemeVariant;
    /**
     * Remove registered css.
     */
    clearCssCode(): VueThemeVariant;
    /**
     * Define the value of a css variable.
     */
    cssVar(name: string, value: string): VueThemeVariant;
    /**
     * Define multiple css vars as a key/value pair.
     */
    cssVars(map: VarsMapInterface): VueThemeVariant;
    /**
     * Remove all css variables overrides.
     */
    clearCssVars(): VueThemeVariant;
    /**
     * Define the css properties to associate to a single css selector.
     */
    cssSelector(name: string, values: Record<string, Primitive>): VueThemeVariant;
    /**
     * Define the css properties of multiple css selectors at once.
     */
    cssSelectors(map: VarsMapInterface): VueThemeVariant;
    /**
     * Remove all css selectors overrides.
     */
    clearCssSelectors(): VueThemeVariant;
    /**
     * Define the value of a prop.
     */
    prop(name: string, value: Primitive | PropCallback): VueThemeVariant;
    /**
     * Define multiple props as a key/value pair.
     */
    props(map: Record<string, Primitive | PropCallback>): VueThemeVariant;
    /**
     * Remove all props overrides.
     */
    clearProps(): VueThemeVariant;
    /**
     * Set one or multiple ids of other variants to apply when the variant matches.
     * Can only target variants of the same component and theme.
     */
    apply(ids: string | string[]): VueThemeVariant;
    /**
     * Set the variant's priority.
     */
    priority(priority: number): VueThemeVariant;
    /**
     * Mark the variant as used.
     */
    use(component: Vue, configuration: ThemeableMetadata): void;
    /**
     * Be notified when any value changes in the variant.
     */
    onChange(cb: (event: ThemeVariantEvent) => any): UnsubscribeFunction;
    /**
     * Be notified when the variant is used.
     */
    onUse(cb: (event: ThemeVariantEvent) => any): UnsubscribeFunction;
    /**
     * Be notified when the priority of the variant is modified.
     */
    onPriorityChange(cb: (event: ThemeVariantEvent) => any): UnsubscribeFunction;
    /**
     * Schedule a `ThemesEvents.VariantUpdated` on the next JS cycle.
     */
    private scheduleChangeNotification;
    /**
     * Immediately notify listeners that a change occurred.
     */
    private notifyChange;
}
