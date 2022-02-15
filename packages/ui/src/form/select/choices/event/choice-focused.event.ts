import { EventArg } from "@banquette/event/event-arg";
import { Choice } from "../choice";

export class ChoiceFocusedEvent extends EventArg {
    public constructor(public choice: Choice) {
        super();
    }
}
