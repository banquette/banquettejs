import { EventDispatcher, UnsubscribeFunction } from "@banquette/event";
import { flattenObject } from "@banquette/utils-object";
import { kebabCase } from "@banquette/utils-string";
import { ensureArray, isObject, isUndefined, Primitive } from "@banquette/utils-type";
import { VarsMapInterface, ThemeableMetadata } from "../decorator/themeable.decorator";
import { getUniqueRandomId } from "../utils/get-unique-random-id";
import { Vue } from "../vue";
import { ThemesEvents, PropCallback } from "./constant";
import { ThemeVariantEvent } from "./event/theme-variant.event";
import { NormalizedVariantSelectorInterface } from "./normalized-variant-selector.interface";
import { VueTheme } from "./vue-theme";

export class VueThemeVariant {
    /**
     * Unique identifier that will be used to inject styles.
     */
    public readonly uid: string = getUniqueRandomId();

    /**
     * Public id of the variant, used to target the variant when using `apply`.
     */
    public readonly publicId: string|null = null;

    /**
     * Raw CSS to inject in the head (as written by the end-user).
     * Selectors will be scoped automatically if the component has scoped styles.
     */
    public rawCss: string = '';

    /**
     * Key/value pair of css variables to override.
     */
    public readonly cssVarsMap: Record<string, Primitive> = {};

    /**
     * Key/value pair of css selectors and their css rules to apply.
     */
    public readonly cssSelectorsMap: Record<string, Record<string, Primitive>> = {};

    /**
     * Key/value pair holding propsMap values.
     */
    public readonly propsMap: Record<string, Primitive|PropCallback> = {};

    /**
     * Shortcut for `Object.keys(this.propsMap)`.
     */
    public readonly propsKeys: string[] = [];

    /**
     * Ids of other variants to apply when the variant matches.
     */
    public readonly applyIds: string[] = [];

    /**
     * `true` if the variant has been used by a component.
     */
    public readonly used: boolean = false;

    /**
     * The scope id of the component to which belongs the variant.
     */
    public readonly scopeId!: string|null;

    /**
     * The themeable configuration relative to the variant.
     */
    public readonly configuration!: ThemeableMetadata;

    /**
     * Define the priority of the variant relative to the other variants of the theme.
     * The higher the priority, the latest the variant will be processed, thus overriding previous variants.
     */
    public readonly priorityNumber: number = 0;

    public constructor(public readonly theme: VueTheme,
                       public readonly selector: NormalizedVariantSelectorInterface,
                       private eventDispatcher: EventDispatcher) {

    }

    /**
     * Set the public id of the variant, used to target the variant when using `apply`.
     */
    public id(id: string): VueThemeVariant {
        (this as any /* Writeable<VueThemeVariant> */).publicId = id;
        return this;
    }

    /**
     * Alias of `appendCssCode`.
     */
    public cssCode(source: string): VueThemeVariant {
        return this.appendCssCode(source);
    }

    /**
     * Append raw css code to already registered one.
     */
    public appendCssCode(source: string): VueThemeVariant {
        (this as any /* Writeable<VueThemeVariant> */).rawCss += source;
        this.scheduleChangeNotification();
        return this;
    }

    /**
     * Add raw css code before already registered one.
     */
    public prependCssCode(source: string): VueThemeVariant {
        (this as any /* Writeable<VueThemeVariant> */).rawCss = source + this.rawCss;
        this.scheduleChangeNotification();
        return this;
    }

    /**
     * Remove registered css.
     */
    public clearCssCode(): VueThemeVariant {
        (this as any /* Writeable<VueThemeVariant> */).rawCss = '';
        this.scheduleChangeNotification();
        return this;
    }

    /**
     * Define the value of a css variable.
     */
    public cssVar(name: string, value: string): VueThemeVariant {
        return this.cssVars({[name]: value});
    }

    /**
     * Define multiple css vars as a key/value pair.
     */
    public cssVars(map: VarsMapInterface): VueThemeVariant {
        Object.assign(this.cssVarsMap, flattenObject(map));
        this.scheduleChangeNotification();
        return this;
    }

    /**
     * Remove all css variables overrides.
     */
    public clearCssVars(): VueThemeVariant {
        (this as any /* Writeable<VueThemeVariant> */).cssVarsMap = {};
        this.scheduleChangeNotification();
        return this;
    }

    /**
     * Define the css properties to associate to a single css selector.
     */
    public cssSelector(name: string, values: Record<string, Primitive>): VueThemeVariant {
        return this.cssSelectors({[name]: values});
    }

    /**
     * Define the css properties of multiple css selectors at once.
     */
    public cssSelectors(map: VarsMapInterface): VueThemeVariant {
        const flattened = flattenObject(map, '.', -1);
        for (const selector of Object.keys(flattened)) {
            if (isUndefined(this.cssSelectorsMap[selector])) {
                this.cssSelectorsMap[selector] = {};
            }
            if (isObject(flattened[selector])) {
                for (const rule of Object.keys(flattened[selector])) {
                    const normalizedRule = kebabCase(rule);
                    this.cssSelectorsMap[selector][normalizedRule] = flattened[selector][rule];
                }
            }
        }
        this.scheduleChangeNotification();
        return this;
    }

    /**
     * Remove all css selectors overrides.
     */
    public clearCssSelectors(): VueThemeVariant {
        (this as any /* Writeable<VueThemeVariant> */).cssSelectorsMap = {};
        this.scheduleChangeNotification();
        return this;
    }

    /**
     * Define the value of a prop.
     */
    public prop(name: string, value: Primitive|PropCallback): VueThemeVariant {
        return this.props({[name]: value});
    }

    /**
     * Define multiple props as a key/value pair.
     */
    public props(map: Record<string, Primitive|PropCallback>): VueThemeVariant {
        Object.assign(this.propsMap, map);
        (this as any /* Writeable<VueThemeVariant> */).propsKeys = Object.keys(this.propsMap);
        this.scheduleChangeNotification();
        return this;
    }

    /**
     * Remove all props overrides.
     */
    public clearProps(): VueThemeVariant {
        (this as any /* Writeable<VueThemeVariant> */).propsMap = {};
        (this as any /* Writeable<VueThemeVariant> */).propsKeys = [];
        this.scheduleChangeNotification();
        return this;
    }

    /**
     * Set one or multiple ids of other variants to apply when the variant matches.
     * Can only target variants of the same component and theme.
     */
    public apply(ids: string|string[]): VueThemeVariant {
        (this as any /* Writeable<VueThemeVariant> */).applyIds = ensureArray(ids);
        return this;
    }

    /**
     * Set the variant's priority.
     */
    public priority(priority: number): VueThemeVariant {
        (this as any /* Writeable<VueThemeVariant> */).priorityNumber = priority;
        this.eventDispatcher.dispatch(ThemesEvents.VariantPriorityChanged, new ThemeVariantEvent(this));
        return this;
    }

    /**
     * Mark the variant as used.
     */
    public use(component: Vue, configuration: ThemeableMetadata): void {
        (this as any /* Writeable<VueThemeVariant> */).used = true;
        (this as any /* Writeable<VueThemeVariant> */).configuration = configuration;
        (this as any /* Writeable<VueThemeVariant> */).scopeId = (component.$.type as any)['__scopeId'] || null;
        this.eventDispatcher.dispatch(ThemesEvents.VariantUsed, new ThemeVariantEvent(this));
    }

    /**
     * Be notified when any value changes in the variant.
     */
    public onChange(cb: (event: ThemeVariantEvent) => any): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(ThemesEvents.VariantUpdated, cb);
    }

    /**
     * Be notified when the variant is used.
     */
    public onUse(cb: (event: ThemeVariantEvent) => any): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(ThemesEvents.VariantUsed, cb);
    }

    /**
     * Be notified when the priority of the variant is modified.
     */
    public onPriorityChange(cb: (event: ThemeVariantEvent) => any): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(ThemesEvents.VariantPriorityChanged, cb);
    }

    /**
     * Schedule a `ThemesEvents.VariantUpdated` on the next JS cycle.
     */
    private scheduleChangeNotification = (() => {
        let scheduled = false;
        return (): void => {
            if (scheduled) {
                return;
            }
            scheduled = true;
            queueMicrotask(() => {
                this.notifyChange();
                scheduled = false;
            });
        };
    })();

    /**
     * Immediately notify listeners that a change occurred.
     */
    private notifyChange(): void {
        this.eventDispatcher.dispatch(ThemesEvents.VariantUpdated, new ThemeVariantEvent(this));
    }
}
