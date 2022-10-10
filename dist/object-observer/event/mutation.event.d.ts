import { EventArg } from "@banquette/event/event-arg";
import { Mutation } from "../mutation";
export declare class MutationEvent extends EventArg {
    readonly mutation: Mutation;
    constructor(mutation: Mutation);
}
