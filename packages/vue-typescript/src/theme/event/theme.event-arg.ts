import { EventArg } from "@banquette/event";
import { VueTheme } from "../vue-theme";

export class ThemeEventArg extends EventArg {
    public constructor(public readonly theme: VueTheme) {
        super();
    }
}
