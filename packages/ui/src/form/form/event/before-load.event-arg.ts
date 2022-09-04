import { EventArg } from "@banquette/event/event-arg";
import { HeadlessFormViewModel } from "../headless-form-view.model";

export class BeforeLoadEventArg extends EventArg {
    public constructor(public readonly vm: HeadlessFormViewModel) {
        super();
    }
}
