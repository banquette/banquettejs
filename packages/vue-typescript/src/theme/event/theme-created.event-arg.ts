import { EventArg } from "@banquette/event";
import { VueTheme } from "../vue-theme";

export class ThemeCreatedEventArg extends EventArg {
    public constructor(public target: string, public name: string, public readonly theme: VueTheme) {
        super();
    }
}
