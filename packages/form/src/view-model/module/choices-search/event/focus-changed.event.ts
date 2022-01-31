import { EventArg } from "@banquette/event/event-arg";
import { Choice } from "../../choices/choice";

export class FocusChangedEvent extends EventArg {
    public constructor(public choice: Choice, public focused: boolean) {
        super();
    }
}
