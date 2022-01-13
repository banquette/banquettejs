import { EventDispatcher, UnsubscribeFunction } from "@banquette/event";
import { Primitive, Writeable } from "@banquette/utils-type/types";
import { getUniqueRandomId, getActiveComponentsCount } from "../utils";
import { ThemesEvents } from "./constant";
import { ThemeVariantUpdatedEventArg } from "./event/theme-variant-updated.event-arg";
import { VueTheme } from "./vue-theme";

export class VueThemeVariant {
    /**
     * Unique identifier that will be used to inject styles.
     */
    public readonly id: string = getUniqueRandomId();

    /**
     * Raw CSS to inject in the head (as written by the end-user).
     * Selectors will be scoped automatically if the component has scoped styles.
     */
    public rawCss: string = '';

    /**
     * Key/value pair of css variables to override.
     */
    public readonly varsMap: Record<string, Primitive> = {};

    /**
     * Key/value pair holding propsMap values.
     */
    public readonly propsMap: Record<string, any> = {};

    /**
     * Track if a change event has been scheduled.
     */
    private changeNotificationScheduled: boolean = false;

    public constructor(public readonly theme: VueTheme,
                       public readonly name: string,
                       private eventDispatcher: EventDispatcher) {

    }

    /**
     * Alias of `appendCss`.
     */
    public css(source: string): VueThemeVariant {
        return this.appendCss(source);
    }

    /**
     * Append raw css code to already registered one.
     */
    public appendCss(source: string): VueThemeVariant {
        (this as Writeable<VueThemeVariant>).rawCss += source;
        this.scheduleChangeNotification();
        return this;
    }

    /**
     * Add raw css code before already registered one.
     */
    public prependCss(source: string): VueThemeVariant {
        (this as Writeable<VueThemeVariant>).rawCss = source + this.rawCss;
        this.scheduleChangeNotification();
        return this;
    }

    /**
     * Remove registered css.
     */
    public clearCss(): VueThemeVariant {
        (this as Writeable<VueThemeVariant>).rawCss = '';
        this.scheduleChangeNotification();
        return this;
    }

    /**
     * Define the value of a css variable.
     */
    public var(name: string, value: Primitive): VueThemeVariant {
        return this.vars({[name]: value});
    }

    /**
     * Define multiple css vars as a key/value pair.
     */
    public vars(map: Record<string, Primitive>): VueThemeVariant {
        Object.assign(this.varsMap, map);
        this.scheduleChangeNotification();
        return this;
    }

    /**
     * Remove all css variables overrides.
     */
    public clearVars(): VueThemeVariant {
        (this as Writeable<VueThemeVariant>).varsMap = {};
        this.scheduleChangeNotification();
        return this;
    }

    /**
     * Define the value of a prop.
     */
    public prop(name: string, value: Primitive): VueThemeVariant {
        return this.props({[name]: value});
    }

    /**
     * Define multiple props as a key/value pair.
     */
    public props(map: Record<string, Primitive>): VueThemeVariant {
        Object.assign(this.propsMap, map);
        this.scheduleChangeNotification();
        return this;
    }

    /**
     * Remove all props overrides.
     */
    public clearProps(): VueThemeVariant {
        (this as Writeable<VueThemeVariant>).propsMap = {};
        this.scheduleChangeNotification();
        return this;
    }

    /**
     * Be notified when any value changes in the variant.
     */
    public onChange(cb: (event: ThemeVariantUpdatedEventArg) => any): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(ThemesEvents.VariantUpdated, cb);
    }

    /**
     * Schedule a `ThemesEvents.VariantUpdated` on the next JS cycle.
     */
    private scheduleChangeNotification(): void {
        if (this.changeNotificationScheduled || !getActiveComponentsCount()) {
            return ;
        }
        this.changeNotificationScheduled = true;
        window.setTimeout(() => {
            this.notifyChange();
            this.changeNotificationScheduled = false;
        });
    }

    /**
     * Immediately notify listeners that a change occurred.
     */
    private notifyChange(): void {
        this.eventDispatcher.dispatch(ThemesEvents.VariantUpdated, new ThemeVariantUpdatedEventArg(this));
    }
}
