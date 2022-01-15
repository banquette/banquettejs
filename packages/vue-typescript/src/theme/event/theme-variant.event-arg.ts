import { EventArg } from "@banquette/event";
import { VueThemeVariant } from "../vue-theme-variant";

export class ThemeVariantEventArg extends EventArg {
    public constructor(public readonly variant: VueThemeVariant) {
        super();
    }
}
