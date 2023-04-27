import { EventArg } from "@banquette/event";
import { Mutation } from "../mutation";

export class MutationEvent extends EventArg {
    public constructor(public readonly mutation: Mutation) {
        super();
    }
}
