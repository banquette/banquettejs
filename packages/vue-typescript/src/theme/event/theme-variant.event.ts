import { EventArg } from "@banquette/event/event-arg";
import { VueThemeVariant } from "../vue-theme-variant";

export class ThemeVariantEvent extends EventArg {
    public constructor(public readonly variant: VueThemeVariant) {
        super();
    }
}
