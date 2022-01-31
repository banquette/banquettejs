import { EventArg } from "@banquette/event/event-arg";
import { VueTheme } from "../vue-theme";

export class ThemeComponentChangedEvent extends EventArg {
    public constructor(public readonly theme: VueTheme, public readonly componentName: string) {
        super();
    }
}
