import { EventArg } from "@banquette/event/event-arg";
import { VueThemeVariant } from "../vue-theme-variant";
export declare class ThemeVariantEvent extends EventArg {
    readonly variant: VueThemeVariant;
    constructor(variant: VueThemeVariant);
}
