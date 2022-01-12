import { EventArg } from "@banquette/event";
import { VueTheme } from "../vue-theme";

export class ThemeUpdatedEventArg extends EventArg {
    public constructor(public readonly theme: VueTheme) {
        super();
    }
}
