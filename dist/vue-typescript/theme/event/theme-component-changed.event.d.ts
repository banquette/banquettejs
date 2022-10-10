import { EventArg } from "@banquette/event/event-arg";
import { VueTheme } from "../vue-theme";
export declare class ThemeComponentChangedEvent extends EventArg {
    readonly theme: VueTheme;
    readonly componentName: string;
    constructor(theme: VueTheme, componentName: string);
}
