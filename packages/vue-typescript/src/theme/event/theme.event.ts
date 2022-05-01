import { EventArg } from "@banquette/event/event-arg";
import { VueTheme } from "../vue-theme";

export class ThemeEvent extends EventArg {
    public constructor(public readonly theme: VueTheme|null) {
        super();
    }
}
