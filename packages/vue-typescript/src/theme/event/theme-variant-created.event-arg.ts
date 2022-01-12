import { EventArg } from "@banquette/event";
import { VueTheme } from "../vue-theme";
import { VueThemeVariant } from "../vue-theme-variant";

export class ThemeVariantCreatedEventArg extends EventArg {
    public constructor(public readonly variant: VueThemeVariant,
                       public readonly theme: VueTheme,
                       public readonly variantName: string,
                       public readonly componentName: string) {
        super();
    }
}
