import { EventDispatcher, UnsubscribeFunction } from "@banquette/event";
import { isString } from "@banquette/utils-type/is-string";
import { Primitive, Writeable } from "@banquette/utils-type/types";
import { ThemeEvents } from "./constant";
import { ThemeUpdatedEventArg } from "./event/theme-updated.event-arg";

export class VueTheme {
    /**
     * Raw CSS to inject in the head (as written by the end-user).
     * Selectors will be scoped automatically if the component has scoped styles.
     */
    public readonly rawCss: string = '';

    /**
     * Key/value pair of css variables to override.
     */
    public readonly cssVars: Record<string, Primitive> = {};

    /**
     * Key/value pair holding props values.
     */
    public readonly props: Record<string, any> = {};

    /**
     * Track if a change event has been scheduled.
     */
    private changeNotificationScheduled: boolean = false;

    public constructor(private eventDispatcher: EventDispatcher) {

    }

    /**
     * Alias of `appendCss`.
     */
    public css(source: string): VueTheme {
        return this.appendCss(source);
    }

    /**
     * Append raw css code to already registered one.
     */
    public appendCss(source: string): VueTheme {
        (this as Writeable<VueTheme>).rawCss += source;
        this.scheduleChangeNotification();
        return this;
    }

    /**
     * Add raw css code before already registered one.
     */
    public prependCss(source: string): VueTheme {
        (this as Writeable<VueTheme>).rawCss = source + this.rawCss;
        this.scheduleChangeNotification();
        return this;
    }

    /**
     * Remove registered css.
     */
    public clearCss(): VueTheme {
        (this as Writeable<VueTheme>).rawCss = '';
        this.scheduleChangeNotification();
        return this;
    }

    /**
     * Define the value of a css variable.
     */
    public cssVar(vars: Record<string, Primitive>): VueTheme;
    public cssVar(name: string, value: Primitive): VueTheme;
    public cssVar(nameOrVars: string|Record<string, Primitive>, value?: Primitive): VueTheme {
        if (isString(nameOrVars)) {
            nameOrVars = {[nameOrVars]: value as Primitive};
        }
        Object.assign(this.cssVars, nameOrVars);
        this.scheduleChangeNotification();
        return this;
    }

    /**
     * Define the value of a prop.
     */
    public prop(props: Record<string, any>): VueTheme;
    public prop(name: string, value: any): VueTheme;
    public prop(nameOrProps: string|Record<string, any>, value?: any): VueTheme {
        if (isString(nameOrProps)) {
            nameOrProps = {[nameOrProps]: value as Primitive};
        }
        Object.assign(this.props, nameOrProps);
        this.scheduleChangeNotification();
        return this;
    }

    /**
     * Remove all props overrides.
     */
    public clearProps(): VueTheme {
        (this as Writeable<VueTheme>).props = {};
        this.scheduleChangeNotification();
        return this;
    }

    /**
     * Test if a prop has been defined in the theme.
     */
    public hasProp(name: string): boolean {
        return Object.keys(this.props).indexOf(name) > -1;
    }

    /**
     * Get the value of a prop.
     */
    public getPropValue(name: string): any {
        return this.props[name];
    }

    /**
     * Be notified when any value changes in the theme.
     */
    public onChange(cb: (event: ThemeUpdatedEventArg) => any): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(ThemeEvents.Updated, cb);
    }

    /**
     * Schedule a `ThemeEvents.Updated` on the next JS cycle.
     */
    private scheduleChangeNotification(): void {
        if (this.changeNotificationScheduled) {
            return ;
        }
        this.changeNotificationScheduled = true;
        window.setTimeout(() => {
            this.notifyChange();
            this.changeNotificationScheduled = false;
        });
    }

    /**
     * Immediately notify listeners that a change occured.
     */
    private notifyChange(): void {
        this.eventDispatcher.dispatch(ThemeEvents.Updated, new ThemeUpdatedEventArg(this));
    }
}
