import { EventArg } from "@banquette/event";

export class ActionErrorEventArg<E = unknown> extends EventArg {
    public constructor(public readonly error: E) {
        super();
    }
}
