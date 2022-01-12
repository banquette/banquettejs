import { EventDispatcher, UnsubscribeFunction } from "@banquette/event";
import { UsageException } from "@banquette/exception";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { getUniqueRandomId } from "../utils";
import { VariantWildcard, ThemesEvents } from "./constant";
import { ThemeVariantCreatedEventArg } from "./event/theme-variant-created.event-arg";
import { ThemeVariantUpdatedEventArg } from "./event/theme-variant-updated.event-arg";
import { VueThemeVariant } from "./vue-theme-variant";

export class VueTheme {
    /**
     * Unique identifier that will be used to inject styles.
     */
    public readonly id: string = getUniqueRandomId();

    /**
     * An object holding all the variants of a theme.
     *
     * The first key/value pair is indexed by component name.
     * The second key/value pair is a map between variants names and actual variant objects.
     *
     * Example:
     *
     * ```
     * {
     *     'bt-button': {
     *         sm: {
     *             vars: {
     *                  fontSize: '0.8rem',
     *                  padding: '0.5rem'
     *             }
     *         },
     *         primary: {
     *             vars: {
     *                 backgroundColor: 'var(--color-primary)'
     *             }
     *         }
     *     }
     * }
     * ```
     */
    private variants: Record<string, Record<string, VueThemeVariant>> = {};

    public constructor(public readonly name: string, private eventDispatcher: EventDispatcher) {
        (this as any).id = name;
    }

    /**
     * Get or create a theme variant.
     */
    public getVariant(variantName: string, componentName: string): VueThemeVariant {
        this.validateName(variantName);
        if (isUndefined(this.variants[componentName])) {
            this.variants[componentName] = {};
        }
        if (isUndefined(this.variants[componentName][variantName])) {
            const inst = new VueThemeVariant(this, variantName, this.eventDispatcher);
            this.variants[componentName][variantName] = inst;

            // Do not dispatch synchronously to give time to the caller to finish its setup.
            window.setTimeout(() => {
                this.eventDispatcher.dispatch(ThemesEvents.VariantCreated, new ThemeVariantCreatedEventArg(
                    inst,
                    this,
                    variantName,
                    componentName
                ));
            });
        }
        return this.variants[componentName][variantName];
    }

    /**
     * Test if a variant is defined.
     */
    public hasVariant(variantName: string, componentName: string): boolean {
        return !isUndefined(this.variants[componentName]) && !isUndefined(this.variants[componentName][variantName]);
    }

    /**
     * Remove a variant.
     */
    public removeVariant(variantName: string, componentName: string): void {
        if (!isUndefined(this.variants[componentName]) && !isUndefined(this.variants[componentName][variantName])) {
            delete this.variants[componentName][variantName];
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
                delete this.variants[item];
            }
        }
    }

    /**
     * Subscribe to an event that will trigger each time a new variant is added.
     */
    public onCreated(cb: (event: ThemeVariantCreatedEventArg) => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(ThemesEvents.VariantCreated, cb);
    }

    /**
     * Subscribe to an event that will trigger each time a variant is modified.
     */
    public onUpdated(cb: (event: ThemeVariantUpdatedEventArg) => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(ThemesEvents.VariantUpdated, cb);
    }

    /**
     * Ensure variants' names are valid or throw an error.
     */
    private validateName(name: string): void {
        if (name === VariantWildcard) {
            throw new UsageException(`The name "${VariantWildcard}" is reserved. Please call "getWildcard()" if you want to get the wildcard variant.`);
        }
        if (name.match(/\s+/)) {
            throw new UsageException('The name of a variant cannot contain spaces.');
        }
    }
}
