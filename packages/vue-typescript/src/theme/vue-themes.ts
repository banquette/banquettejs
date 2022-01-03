import { EventDispatcher } from "@banquette/event";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { ThemeEvents } from "./constant";
import { ThemeCreatedEventArg } from "./event/theme-created.event-arg";
import { VueTheme } from "./vue-theme";

export class VueThemes {
    /**
     * Known themes.
     */
    private static Themes: Record<string, Record<string, VueTheme>> = {};

    /**
     * Event dispatcher used to get notification from themes when a change is made.
     */
    private static Dispatcher = new EventDispatcher();

    /**
     * Get or create a theme.
     */
    public static Get(target: string, name: string): VueTheme {
        if (isUndefined(VueThemes.Themes[target])) {
            VueThemes.Themes[target] = {};
        }
        if (isUndefined(VueThemes.Themes[target][name])) {
            const inst = new VueTheme(VueThemes.Dispatcher);
            VueThemes.Themes[target][name] = inst;

            // Do not dispatch synchronously to give time to the caller to setup the theme.
            window.setTimeout(() => {
                VueThemes.Dispatcher.dispatch(ThemeEvents.Created, new ThemeCreatedEventArg(target, name, inst));
            });
        }
        return VueThemes.Themes[target][name];
    }

    /**
     * Try to get a theme and wait until it is created if necessary.
     * The theme is returned via the callback when the theme is available.
     */
    public static GetSafe(target: string, name: string, cb: (theme: VueTheme) => void): void {
        if (isUndefined(VueThemes.Themes[target]) || isUndefined(VueThemes.Themes[target][name])) {
            const unsubscribe = VueThemes.Dispatcher.subscribe(ThemeEvents.Created, (event: ThemeCreatedEventArg) => {
                if (event.target === target && event.name === name) {
                    cb(event.theme);
                    unsubscribe();
                }
            });
        } else {
            cb(VueThemes.Themes[target][name]);
        }
    }
}
