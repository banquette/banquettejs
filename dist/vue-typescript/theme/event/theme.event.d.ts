import { EventArg } from "@banquette/event/event-arg";
import { VueTheme } from "../vue-theme";
export declare class ThemeEvent extends EventArg {
    readonly theme: VueTheme | null;
    constructor(theme: VueTheme | null);
}
