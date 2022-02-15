import { EventArg } from "@banquette/event/event-arg";
import { Choice } from "../choice";

export class ChoicesChangedEvent extends EventArg {
    public constructor(public choices: Choice[]) {
        super();
    }
}
